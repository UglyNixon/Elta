const defecService =require('../../service/productService/defec-service')


class DefecController{
    async create(req,res,next) {
            const {series,defec} = req.body
        console.log(series)
        console.log(JSON.parse(defec))
       await defecService.create(series,JSON.parse(defec))
        return res.json('done')
    }
    async get (req,res,next) {
        const {series} = req.query
        const data = await defecService.get(series)
        return res.json(data)
    }
    async ruchkaMatDefec (req,res,next) {
        try{
            const data = req.body
            const defec =await defecService.createRuchkaMatDefec(data)
            return res.json('Записано')
        }catch (e) {
            next(e)
        }

    }
    async materialBrak (req,res,next) {
        try{
            const {name,date} = req.body
            const data = await defecService.materialBrak(name,date)
        return res.json(data)
        }catch (e) {
            next(e)
        }
    }

}

module.exports = new DefecController()