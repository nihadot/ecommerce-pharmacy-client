import axios from "axios"

export const userRegister = (data)=>{
    try {
        return axios.post('/users/register',data)
    } catch (error) {
        return error
    }
} 

export const userLogin = (data)=>{
    try {
        return axios.post('/users/login',data)
    } catch (error) {
        return error
    }
} 


export const addProducts = (data)=>{
    try {
        return instance.post('/products',data)
    } catch (error) {
        return error
    }
} 

export const fetchProducts = (data)=>{
    try {
        return instance.get('/products',data)
    } catch (error) {
        return error
    }
} 