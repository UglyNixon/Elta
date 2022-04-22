import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../http/service/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/http/AuthResponse";



export default class UserStore {
    _user = {} as IUser
    _isAuth=false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool:boolean){
        this._isAuth=bool
    }
    get isAuth (){

        return this._isAuth
    }
    get User() {
        return this._user
}


    setUser(user:IUser){
        this._user=user
    }

    async login(login:string,password:string){
        try{
            const response =await AuthService.login(login, password)
            localStorage.setItem('token',response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)

        }catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
    async registration(email:string,login:string,password:string,code:string){
        try {
            const response = await AuthService.registration(email,login,password,code)
        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
    async logout(){
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
            return response
        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(){
            try {
                const response = await axios.get<AuthResponse>(`/user/refresh`,{
                    withCredentials:true,
                    baseURL:process.env.REACT_APP_API_URL
                })
                localStorage.setItem('token',response.data.accessToken)
                this.setAuth(true)

                this.setUser(response.data.user)
                return response
            } catch (e:any) {
                console.log(e.response?.data?.message)
            }


    }
}