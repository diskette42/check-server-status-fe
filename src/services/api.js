import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3002'
})

export const postGetDataByUser = async(owner) => await api.post(`/web-check/get-data/${owner}`)

export const postAddWebDataByUser = async({owner,webName,webURL})=> {
    console.log({owner,webName,webURL})
    return await api.post("/web-check",{owner,webName,webURL})}

export const deleteWebDataByName = async({owner,webName})=> {
    console.log(webName+owner)
    return await api.post("/web-check/delete-data",{webName,owner})
}
