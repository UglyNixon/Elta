import {AxiosResponse} from "axios";
import $api from "../../index";


export default class MaterialService{

    static async getMaterial(series:string):Promise<AxiosResponse> {
        return $api.get('/product/material/get',{params:{series:series}})
    }
}