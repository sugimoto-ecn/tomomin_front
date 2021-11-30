import axios from "axios";
import jwtDecode from "jwt-decode";

const apiNoAuth = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

const apiWithAuth = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

apiWithAuth.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    if(token) {
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp * 1000 < Date.now()) {
            window.location.href = '/auth/login'
        }else{
            config.headers.Authorization = `Bearer ${token}`
        }
    }else{
        window.location.href = '/auth/login'
    }
    return config
})

export const registerUser = async (body) => {
    try{
        const res = await apiNoAuth.post("/users/register" , body)
        return res.data
    }catch(err) {
        console.log(err.response)
        return err.response.data
    }
}

export const login = async (body) => {
    try{
        const res = await apiNoAuth.post("/users/login" , body)
        return res.data
    }catch(err) {
        console.log(err.response)
        return err.response.data
    }
}


export const updateUser = async (id,body) => {
    try{
        console.log(apiWithAuth)
        const res = await apiWithAuth.put(`/users/${id}/update` , body)
        return res.data
    }catch(err) {
        console.log(err)
        console.log(err.response)
        return err?.response?.data && err
    }
}

export const getLoginUser = async (id) => {
    try{
        const res = await apiWithAuth.get(`/users/${id}/get`)
        return res.data
    }catch(err) {
        console.log(err.response)
        return err?.response?.data && err
    }
}

export const createSchedule = async(id, body) => {
    try{
        const res = await apiWithAuth.post(`/schedule/${id}/create`, body)
        return res.data
    }catch(err) {
        console.log(err.response)
        return err?.response?.data && err
    }
}

export const getSchedule = async(id) => {
    try{
        const res = await apiWithAuth.get(`/schedule/${id}/getone`)
        return res.data
    }catch(err) {
        console.log(err.response)
        return err?.response?.data && err
    }
}
// export const 