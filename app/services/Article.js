import axios from "axios";
import Config from "../config"

var URL = Config.base_url + "articles/"

export const getArticle = ()=>{
    console.log(URL+"1000/0")
    return axios.get(URL+"1000/0");
}

export const deleteArticle = (id) =>{
    return axios.delete(URL+""+id);
}

export const insertArticle = (article) =>{
    const formData = new FormData();
    formData.append('image', {uri: article.uri, type: 'image/jpg', name: 'xxx'});
    formData.append('title',article.title)
    formData.append('content',article.content)
    return axios({
        url: URL,
        method: 'POST',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const updateArticle= (article) =>{
    return axios.put(URL, article);
}


