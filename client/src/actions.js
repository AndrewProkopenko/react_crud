import axios from './lib/axios'

export const API_HEALTHCHECK = () => {
    axios.get('/')
}

export const ADD_POST = async (data) => {  
    return axios.post('/add', data)
}


export const FETCH_POST = async () => { 
    return axios.get('/')
}


export const DELETE_POST = async (id) => {  
    return axios.delete(`/delete/${id}`)
}


export const EDIT_POST = async (id) => { 
    return await axios.get(`/edit/${id}`)
}

export const UPDATE_POST = async (id, post) => { 
    return axios.post(`/update/${id}`, post)
}