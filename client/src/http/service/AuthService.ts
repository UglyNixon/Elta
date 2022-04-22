import $api from '../index'
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../../models/http/AuthResponse";


export default class AuthService {

    static async login (login:string,password:string):Promise<AxiosResponse<AuthResponse>>{
        return await $api.post<AuthResponse>('/user/login',{login,password})
    }

    static async registration (email:string,login:string,password:string,code:string):Promise<AxiosResponse>{
        return await $api.post<AuthResponse>('/user/registration',{email,login,password,code})
    }

    static async logout ():Promise<void>{
        return await $api.post('/user/logout')
    }



}
