import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../http/service/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/http/AuthResponse";



export default class UserStore {
    user = {} as IUser
    isAuth=false
    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool:boolean){
        this.isAuth=bool
    }

    setUser(user:IUser){
        this.user=user
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
    async registration(login:string,pass:string,email:string){
        try {
            const response = await AuthService.registration(login,pass,email)
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
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