import axios from 'axios'

export const adminRegister = (data)=>{
    try {
        return axios.post('/admin/register',data)
    } catch (error) {
        return error
    }
} 

export const adminLogin = (data)=>{
    try {
        return axios.post('/admin/login',data)
    } catch (error) {
        return error
    }
} 


export const addProducts = (data)=>{
    try {
        return axios.post('/products',data)
    } catch (error) {
        return error
    }
} 

export const fetchProducts = (data)=>{
    try {
        return axios.get('/products',data)
    } catch (error) {
        return error
    }
} 

export const deleteProduct = (id)=>{
    try {
        return axios.delete(`/products/${id}`)
    } catch (error) {
        return error
    }
} 

export const EditProduct = (id)=>{
    try {
        return axios.put(`/products/${id}`)
    } catch (error) {
        return error
    }
} 