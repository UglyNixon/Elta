import {AxiosResponse} from "axios";
import $api from "../../index";
import {IWorker} from "../../../models/http/IWorker";


export default class WorkerService {

   static async createWorker (data:object):Promise<AxiosResponse> {
        return  $api.post('worker/work/create', data)
    }
    static async getAllWorker (wp:object):Promise<AxiosResponse> {
       return $api.post('worker/work/all',wp)
    }
   static async createWorkPlace (data:object) :Promise<AxiosResponse> {
        return  $api.post('/worker/workerPlace/create', data)
    }
    static async getAllWorkPlace():Promise<AxiosResponse> {
        return $api.get('/worker/workerPlace/all')
    }
    static async filterWorkers(workPlace:string):Promise<AxiosResponse<IWorker[]>> {
        return $api.get<IWorker[]>('/worker/work/filter',{params:{workPlace}})
    }
    static async getOne(name:string):Promise<AxiosResponse<IWorker>>{
       return $api.get<IWorker>('/worker/work/one',{params:{name}})
    }
    static async getOneById(id:string) :Promise<AxiosResponse<IWorker>> {
        return $api.get<IWorker>('/worker/work/oneById',{params:{id}})
    }


}