
const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')
module.exports = function (role) {
    return async function (req, res, next) {
            try {
                const authorizationHeader = req.headers.authorization
                if (!authorizationHeader) {
                    return next(ApiError.BadRole('Ошибка прав доступа'))
                }
                const accessToken = authorizationHeader.split(' ')[1];
                if (!accessToken) {
                    return next(ApiError.BadRole('Ошибка прав доступа'))
                }
                const userData = await tokenService.validateAccessToken(accessToken);

                if (userData.role !==role) {
                    return next(ApiError.BadRole('Ошибка прав доступа'))
                }
                next()


            }catch (e) {
                return  next(ApiError.BadRole('Ошибка прав доступа'))
            }

    }


}