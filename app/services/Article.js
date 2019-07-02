import axios from "axios";
import Config from "../config"

var URL = Config.base_url + "articles/"

export const getArticle = ()=>{
    console.log(URL+"10/0")
    return axios.get(URL+"10/0");
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


