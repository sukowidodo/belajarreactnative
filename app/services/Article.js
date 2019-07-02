import axios from "axios";
import Config from "../config"

var URL = Config.base_url + "articles/"

export const getArticle = ()=>{
    return axios.get(URL);
}

export const deleteArticle = (id) =>{
    return axios.delete(URL+""+id);
}

export const insertArticle = (article) =>{
    console.log(URL)
    return axios.post(URL, article);
}

export const updateArticle= (article) =>{
    return axios.put(URL, article);
}


