const {WorkPlace, Worker} = require("../../models/models");
const ApiError = require("../../exceptions/api-error");




class WorkerService {
    async createPlace (title) {
        const cand = await WorkPlace.findOne({where:{title}})
        if (cand) {
           throw  ApiError.BadRequest(`Участок ${title} уже существует`)
        }
         const data =await WorkPlace.create({title})
        return data
    }
    async getAllPlace () {
        const data = await WorkPlace.findAll()
        if (data) {  return data}
        return {id:'',title:'нет данных'}

    }
    async createWorker (name,code,workerPlace){
        const cand = await Worker.findOne({where:{name}})
        if (cand ) {
            throw ApiError.BadRequest(`Работник ${name} уже существует`)
        }
        const place = await WorkPlace.findOne({where:{title:workerPlace}})
        const data = await Worker.create({name,code})
        data.addWorkPlace(place)
        return data
    }
    async getAllWorker (wp) {
        const data = await Worker.findAll({include:[{model:WorkPlace,as:'workPlaces',where:{title:wp}}]})

        return data
    }
    async getOne(name) {
        const data = await Worker.findOne({where:{name:name}})
        return data
    }
    async getOneById(id) {
        console.log(id)
        const data = await Worker.findOne({where:{id:+id}})
        console.log(data)
        return data
    }
}

module.exports = new WorkerService()