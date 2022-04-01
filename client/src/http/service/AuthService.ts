import $api from '../index'
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../../models/http/AuthResponse";


export default class AuthService {

    static async login (login:string,password:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/user/login',{login,password})
    }

    static async registration (email:string,login:string,password:string):Promise<AxiosResponse>{
        return $api.post<AuthResponse>('/user/registration',{email,login,password})
    }

    static async logout ():Promise<void>{
        return $api.post('/user/logout')
    }



}
