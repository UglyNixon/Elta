import axios from 'axios'
const $api = axios.create({

    withCredentials:true,
    baseURL:process.env.REACT_APP_API_URL
})

$api.interceptors.request.use( config=>{
    config.headers = config.headers ?? {}
    config.headers.Authrization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api