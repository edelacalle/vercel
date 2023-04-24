import { i18n, getLang}  from "../../i18n";
import { getPostsyAxiosAPICall } from "../../utils/news";

export default  function Noticias(props) {
  console.log("y ahora " , props)
  return <>
    Noticias
    {JSON.stringify(props.payload)}
  </>
  
}

/*
Noticias.getInitialProps = async (ctx) => {
  //const res = await fetch('https://api.github.com/repos/vercel/next.js')
  //const json = await res.json()
  //return { stars: json.stargazers_count }
  console.log("initial props")
  return { props:{}}
}
*/

async function getStaticPaths (){
  let paths = [];
  i18n.locales.map((lng)=> paths.push({params:{"locale":lng}}));
  //i18n.locales.map((lng)=> aIds.map((p)=>paths.push({ params:{"locale":lng }})));
  return {
    fallback:false,
    paths:paths
  }
}



async function getStaticProps( ctx ) {
  const aNews = await getPostsyAxiosAPICall(ctx.params.locale);

  
   return {
    props:{
      locale: ctx.params.locale,
      payload: aNews
    }
  }
}

export { getStaticPaths, getStaticProps }