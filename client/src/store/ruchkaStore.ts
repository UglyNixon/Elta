import {makeAutoObservable} from "mobx";
import AuthService from "../http/service/AuthService";
import RuchkaService from "../http/service/products/RuchkaService";
import {IRuchka} from "../models/http/IRuchka";


export default class RuchkaStore {

    constructor() {
        makeAutoObservable(this)
    }

    async create (formData:any) {
        try {
            const response = await RuchkaService.createRuchka(formData)
            return response
        } catch (e:any) {
            console.log(e.response?.data?.message)
        }

    }




}