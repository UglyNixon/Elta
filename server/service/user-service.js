const {User, Token} = require("../models/models");
const bcrypt = require('bcrypt')
const uuid=require('uuid')
const mailService = require('./mail-service')
const tokenService =require('./token-service')
const UserDto= require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration (login,email,password,code) {
        const candidate = await User.findOne({where:{login:login}});
        if (candidate) {
            throw  ApiError.BadRequest(`Пользователь ${login} уже зарегистрирован`)
        }
            const link = await uuid.v4()
            const hashpassword = await bcrypt.hash(password,3)

                const user = await User.create(
                    {

                        email:email,
                        login:login,
                        password:hashpassword,
                        activationLink:link,

                    }
                )
            await  mailService.sendActivationMail(email,`${process.env.API_URL}user/activate/${link}`)
            const userDto= new UserDto(user)
            const tokens = await tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id,tokens.refreshToken)

            return {
                ...tokens,
                user:userDto
            }


     }

     async activate (activationLink) {
        const user = await User.findOne({where:{activationLink}})
         if (!user) {
             throw new ApiError.BadRequest(`Некорректная ссылка для активации`)
         }
         user.isActivated=true;
         await user.save()
     }

     async login (login,password) {
            const user = await User.findOne({where:{login:login}})
         if (!user) {
             throw ApiError.BadRequest('Пользователь не был найдет')
         }
         const isPassEquals = await bcrypt.compare(password,user.password)
         if (!isPassEquals) {
             throw ApiError.BadRequest('Неверный пароль')
         }
         const userDto = new UserDto(user)
         const tokens = await tokenService.generateTokens({...userDto})
         await tokenService.saveToken(userDto.id,tokens.refreshToken)

         return {
             ...tokens,
             user:userDto
         }
     }

     async logout (refreshToken) {

        const token = await tokenService.removeToken (refreshToken);
        return
     }

     async refresh (refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = await tokenService.validateRefreshToken(refreshToken)
         const tokenFromDb = await tokenService.findToken(refreshToken);
         if (!userData || !tokenFromDb) {
             throw ApiError.UnauthorizedError()
         }
         const user = await User.findOne({where:{id:userData.id}})
         const userDto = new UserDto(user)
         const tokens = await tokenService.generateTokens({...userDto});

         await tokenService.saveToken(userDto.id, tokens.refreshToken);
         return {...tokens, user: userDto}
     }

     async getAllUsers () {
        const users = await User.findAll() ;
        return users
     }
}

module.exports = new UserService()