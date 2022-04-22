const {Worker, Ruchka} = require("../../models/models");
const ApiError = require("../../exceptions/api-error");
const ruchkaDto = require('../../dtos/ruchka-dto')
const materialService = require('./material-service')




class ruchkaService {

    async createVsMat (name,series,value,status,dolg,brak,materials) {
        let mat = JSON.parse(materials)
        let matData=[]
        const cand = await Ruchka.findOne({where:{series:series}})
        if (cand) {
            throw ApiError.BadRequest(` ${name} уже существует`)
        }
        for (let key in mat) {
          matData.push(await materialService.create(key,mat[key]))
        }
        console.log()
        const workerId = await Worker.findOne({where:{name}})
        const wId=workerId.id
        const ruchka = await Ruchka.create({series,totalValue:+value,status,dolg:+dolg,brak:+brak,workerId:+wId})
        ruchka.addMaterial(matData)
        return ruchka
    }
    async findOne(series){
        const data =  await Ruchka.findOne({where:{series}})
        return new ruchkaDto(data)
    }
}

module.exports =  new ruchkaService()