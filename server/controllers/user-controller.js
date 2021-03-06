const userService = require('../service/user-service')
const {validationResult}=require('express-validator')
const ApiError =require('../exceptions/api-error')
class UserController {

    async registration (req,res,next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next (ApiError.BadRequest('Ошибка валидации',errors))
            }
            const {email,password,login,code} =req.body
            const userData = await userService.registration(login,email,password,code)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
            return res.json(userData)

        }catch (e) {
            next(e)
        }
    }
    async login (req,res,next) {
        try {
        const {login,password} = req.body;
        const userData = await userService.login(login,password)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
            return res.json(userData)
        }catch (e) {
            next(e)
        }
    }
    async logout (req,res,next) {
        try {
            if (req.cookies?.refreshToken) {
                const {refreshToken} = req.cookies;
                const token = userService.logout(refreshToken)
                res.clearCookie('refreshToken');
                return res.json('done')
                //    нет обработки запроса без cookie
            }else throw ApiError.BadRequest('Что-то пошло не так cookie')

        }catch (e) {

            next(e)
        }
    }
    async activate (req,res,next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }catch (e) {
            next(e)
        }
    }
    async refresh (req,res,next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
            return res.json(userData)
        }catch (e) {
            next(e)
        }
    }
    async getUsers (req,res,next) {
        try {
         const users = await userService.getAllUsers()
            return res.json (users)
        }catch (e) {
            next(e)
        }
    }
}

module.exports=new UserController()