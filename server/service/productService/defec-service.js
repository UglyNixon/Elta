

const ruchkaService = require('./ruchka-service')
const {Defec, RuchkaBrakReport, Ruchka, Worker, WorkPlace} = require("../../models/models");
const DefecDto =require('../../dtos/defec-dto')
const sequelize = require('../../db');
const {Sequelize} = require('sequelize')

class DefecService {

    async create (series,defec) {
            const ruchka = await ruchkaService.findOne(series)
            const ruchkaId =ruchka.id
        Array.prototype.forEach.call(defec,async function(d){await Defec.create({title:d.title,value:d.value,ruchkaId})})
             // а как это с bind провернуть?
    }
    async createRuchkaMatDefec(data){
        Array.prototype.forEach.call(data,async function (d){
            await RuchkaBrakReport.create({
                title:d.title,
                series:d.series,
                value1:+d.value1,
                value2:+d.value2,
                value3:+d.value3,
                value4:+d.value4,
                value5:+d.value5,
                workerId:+d.workerId,
                date:d.date
            })
        })
    }
    async get(series) {
        let data = []
        const ruchka = await Ruchka.findOne({where:{series:series}})
        if (!ruchka) return [new DefecDto({title:'',value:''})]
        const models = await Defec.findAll({where:{ruchkaId:+ruchka.id}})
        Array.prototype.forEach.call(models,(model)=>data.push(new DefecDto(model)))
        return data
    }
    async materialBrak(id,date){
        let tableArr=[]
        let workerId=[]
        if (id!=='Все') {
            const worker = await Worker.findOne({where: {name: id}})
            workerId=worker.id
        }
        if (id=='Все' ){
            const worker =await Worker.findAll({include:[{model:WorkPlace,as:'workPlaces',where:{title:'Ручки'}}],raw:true})
            worker.forEach(w=>workerId.push(w.id))

        }


        const titles = await RuchkaBrakReport.findAll({
            where:{date,workerId},attributes:[Sequelize.fn('DISTINCT', Sequelize.col('title')) ,'title']})
        const titleForeach =async (title)=>{
            let seriesArray=[]
            const series = await RuchkaBrakReport.findAll({where:{title:title.title,workerId,date},
            attributes:[Sequelize.fn('DISTINCT',Sequelize.col('series')),'series']})
            for (let serie of series){
                const val1 = await RuchkaBrakReport.findAll(
                    {where:{title:title.title,workerId,date,series:serie.series},
                        attributes:
                            [[Sequelize.fn('sum',Sequelize.col('value1')),'value1']]
                     })
                const val2 = await RuchkaBrakReport.findAll(
                    {where:{title:title.title,workerId,date,series:serie.series},
                        attributes:[[Sequelize.fn('SUM',Sequelize.col('value2')),'value2']]
                    })
                const val3 = await RuchkaBrakReport.findAll(
                    {where:{title:title.title,workerId,date,series:serie.series},
                        attributes:[[Sequelize.fn('SUM',Sequelize.col('value3')),'value3']]
                   })
                const val4 = await RuchkaBrakReport.findAll(
                    {where:{title:title.title,workerId,date,series:serie.series},
                        attributes:[[Sequelize.fn('SUM',Sequelize.col('value4')),'value4']]
                   })
                const val5 = await RuchkaBrakReport.findAll(
                    {where:{title:title.title,workerId,date,series:serie.series},
                        attributes:[[Sequelize.fn('SUM',Sequelize.col('value5')),'value5']]
                        })


            seriesArray.push({series:serie.series,
                val1:+val1[0].value1,
                val2:+val2[0].value2,
                val3:+val3[0].value3,
                val4:+val4[0].value4,
                val5:+val5[0].value5})
            }

            return seriesArray


        }


          for (let title of titles) {
            const arr = await titleForeach(title)
              const sum = arr.reduce((sum,elem)=>{return sum+elem.val1+elem.val2+elem.val3+elem.val4+elem.val5},0)
              tableArr.push({title:title.title,value:sum,seriesArray:arr})
          }


            return tableArr

}}

module.exports=new DefecService()