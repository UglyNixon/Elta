const {Material, WorkPlace, Ruchka} = require("../../models/models");
const ApiError = require("../../exceptions/api-error");
const ruchkaMatDto = require('../../dtos/ruchkaMat-dto')

class MaterialService {

      async  create (title,series) {


            let data  = await Material.findOne({where:{title:title,series:series}})
            if (data) {return data}
            if (!data) {
           data= await Material.create({title:title,series:series})
           }
           return data

    }
    async getOne (title,series) {
        return await Material.findOne({where:{}})
    }
    async get (id) {
          let data =[]
          const mat = await Material.findAll({include:[{model:Ruchka,as:'ruchkas',where:{id:id}}]})
            Array.prototype.forEach.call(mat,(m)=>{
                data.push(new ruchkaMatDto(m))
            })

            return data


    }
}

module.exports = new MaterialService()