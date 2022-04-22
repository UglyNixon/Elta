
const ruchkaService = require('../../service/productService/ruchka-service')
class RuchkaController {

    async create(req,res,next) {
             try{
                 const {name,series,value,status,dolg,brak,materials} = req.body
                 let rData;
                 console.log('**************')
                 console.log(materials)
                 if (materials){
                      rData = await ruchkaService.createVsMat(name,series,value,status,dolg,brak,materials)
                 }
                 return res.json(rData)
             }catch (e) {
                 next(e)
             }
    }
    async getOne(req,res,next) {
        try{
            const {series} = req.query
            const data = await ruchkaService.findOne(series)
            return res.json(data)
        }catch (e) {
            next(e)
        }
    }


}
module.exports=new RuchkaController()