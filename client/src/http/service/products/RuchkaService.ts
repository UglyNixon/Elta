import  {AxiosResponse} from "axios";
import $api from "../../index";
import {IRuchka} from "../../../models/http/IRuchka";


export default class RuchkaService {
    static async createRuchka (data:IRuchka):Promise<AxiosResponse>{
        return  await $api.post('/product/ruchka/create', data)
    }
    static async getOne (series:string):Promise<AxiosResponse>{
        return await $api.get ('/product/ruchka/getOne',{params:{series:series}})
    }
}