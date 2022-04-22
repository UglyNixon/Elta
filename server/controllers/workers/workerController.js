const workerService = require('../../service/workerService/worker-service')

class WorkerController{

    async create (req,res,next){

        try{
            const {name,code,workerPlace} =req.body

            let data = await workerService.createWorker(name,code,workerPlace)
            return res.json(data)
        }catch (e) {
            next(e)
        }
    }
    async getAllWorker (req,res,next) {
        const {wp} =req.body
        const data = await workerService.getAllWorker(wp)
        return res.json(data)
        try{


        }catch (e) {
            next(e)
        }
    }
    async createPlace(req,res,next){
        try{
        const {title} = req.body;
        const data= await workerService.createPlace(title)
        return res.json(data)
        }catch (e) {
            next(e)
        }
    }
    async getAllPlace (req,res,next) {
        try{
         const data = await workerService.getAllPlace();
         return res.json(data)
        }catch (e) {
            next(e)
        }
    }
    async getFilterWorker (req,res,next) {
        try {
            const {workPlace} =req.query
            const data =  await  workerService.getAllWorker(workPlace)
            return res.json(data)

        }
        catch (e) {
            next(e)
        }


    }
    async getOne (req,res,next) {
        try{
            const {name}=req.query
            const worker = await workerService.getOne(name);
            return res.json(worker)

        }catch (e) {
            next(e)
        }
    }
    async getOneById (req,res,next) {
        try{
            const {id}=req.query
            const worker = await workerService.getOneById(id)
            return res.json(worker)

        }catch (e) {
            next(e)
        }
    }
    
}

module.exports = new WorkerController()