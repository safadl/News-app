import{articles_sources, country_code, _api_key,articles_urlHead} from '../config/rest_config'
export async function getArticlesSources()
{
    try{
 //let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`,
 let sources= await fetch(`${articles_sources}?`,
 {
     headers: {
         'X-API-KEY':_api_key
     }
 });
 let result = await sources.json();
 sources=null;
 return result.sources;
   }
    catch(error){
  throw error;
    }
}