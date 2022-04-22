const jwt= require('jsonwebtoken')
require('dotenv').config()
const {Token} =require('../models/models')
class TokenService{

      async generateTokens (payload){

        const accessToken =  await jwt.sign(payload,process.env.JWT_KEY_ACCESS,{expiresIn:'60m'})
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

    async validateAccessToken(token) {
        try {
            const userData = await jwt.verify(token,process.env.JWT_KEY_ACCESS);
            return userData
        } catch (error) {
            return null
        }

    }

    async validateRefreshToken(token) {
        try {
            const userData =  await jwt.verify(token,process.env.JWT_KEY_REFRESH);
            return userData
        } catch (error) {
            return null
        }

    }


    async removeToken (refreshToken) {
          const token= await Token.destroy({where:{refreshToken:refreshToken}})
        return token;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where:{refreshToken:refreshToken}})
        return tokenData;
    }


}


module.exports = new TokenService();