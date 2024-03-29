import{articles_url, country_code, category, _api_key} from '../config/rest_config'
import _ from 'lodash'



export async function getArticles()
{
    try{
 //let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`,
 let articles= await fetch(`${articles_url}?q=general&pageSize=100`,
 {
     headers: {
         'X-API-KEY':_api_key
     }
 });
 let result = await articles.json();
 articles=null;
 return result.articles;
   }
    catch(error){
  throw error;
    }
}