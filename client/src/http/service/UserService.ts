import $api from "../index";
import {AxiosResponse} from "axios";
import {IUser} from "../../models/IUser";


export default class UserService{
    static async fetchUsers():Promise<AxiosResponse<IUser[]>>{
       return await $api.get<IUser[]>('/user/users')
    }
}