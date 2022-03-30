const jwt= require('jsonwebtoken')
require('dotenv').config()
const {Token} =require('../models/user-model')
class TokenService{

      async generateTokens (payload){

        const accessToken =  await jwt.sign(payload,process.env.JWT_KEY_ACCESS,{expiresIn:'30m'})
        const refreshToken = await jwt.sign(payload,process.env.JWT_KEY_REFRESH,{expiresIn:'30d'})

        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken (Id,refreshToken){
        const tokenData =await Token.findOne({where:{userId:Id}})
        if (tokenData) {
            tokenData.refreshToken =refreshToken
            return  await tokenData.save()
        }
        const token = await Token.create ({
            refreshToken:refreshToken,
            userId:Id
        })
        return token

    }



}


module.exports = new TokenService();