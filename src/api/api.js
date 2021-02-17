import axios from "axios";

const API='https://602a79de6c995100176ee6f9.mockapi.io/HW-6'

export const getUserList=()=>{
       return axios.get(API)
}

export const addNewUser=({name,surname,phone})=>{
    return axios
        .post(API,{name,surname,phone})
}