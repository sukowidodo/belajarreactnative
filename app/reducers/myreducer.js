import {article_type} from '../actions/types';
import { insertArticle } from '../services/Article';

const initialState = {
    article:"dds",
    articles: []
  };
  
  const myReducer = (state = initialState, action) => {
    console.log("state");
    console.log(state);
    console.log("action");
    console.log(action);
    switch(action.type) {
        case article_type.ADD:
            console.log("article_type.ADD"+state);
            return{
                ...state,
                articles : action.articles
            }
            break;
    default:
            return state;    
        // case article_type.DELETE:
        //     console.log("article_type.Delete"+state);
        //     break;  
        // case article_type.UPDATE:
        //     console.log("article_type.update"+state);
        //     break;
        // case article_type.GET:
        //     console.log("article_type.get"+state);
        //     break;         
    }
  }
  
  export default myReducer;