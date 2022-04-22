const ruchkaService  = require('../../service/productService/ruchka-service')
const materialService = require('../../service/productService/material-service')
 class MaterialService {

    async get (req,res,next) {
        try {
            const {series} =req.query
             const ruchka =await ruchkaService.findOne(series)
            const data  =await materialService.get(ruchka.id)
            return res.json(data)
        }catch (e) {
            next(e)
        }

    }
}

 module.exports = new MaterialService()