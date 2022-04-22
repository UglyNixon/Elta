import  {AxiosResponse} from "axios";
import $api from "../../index";
import {IDefec} from "../../../models/http/IDefec";
import {IBrakRuchkaMat} from "../../../models/http/IBrakRuchkaMat";



export default class DefecService {
    static async create (data:any):Promise<AxiosResponse>{
        return  await $api.post('/product/defec/create', data)
    }
    static async get (series:string):Promise<AxiosResponse<IDefec[]>>{
        return  await $api.get<IDefec[]>('/product/defec/all',{params:{series}});
    }
    static async ruchkaMatDefec(data:any) :Promise<AxiosResponse>{
        return await $api.post('product/defec/ruchkaMatDefec',data)
    }
    static async   fetchMaterialBrak(data={name:'',date:'2022-01-01'}):Promise<AxiosResponse<IBrakRuchkaMat[]>>{
            const a =  await $api.post<IBrakRuchkaMat[]>('product/defec/materialBrak',data)
        console.log(a.data)
        return a
    }
}