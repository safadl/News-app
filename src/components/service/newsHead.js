import{articles_url, country_code, _api_key,articles_urlHead} from '../config/rest_config'

export async function getArticlesH(category='general', country_code='')
{
    try{
 let articles= await fetch(`${articles_urlHead}?category=${category}&country=${country_code}&pageSize=100`,
 
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