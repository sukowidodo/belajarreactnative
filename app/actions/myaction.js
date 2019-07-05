import {article_type} from './types'

export const updateStateArticle = (articles) =>{
    return {
        type : article_type.ADD,
        articles : articles
    }
}
