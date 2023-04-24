import {i18n, getStaticPaths as pStatic , getLang}  from "../../../i18n";

import {getSlugsbyAxiosAPICall , getPostAxiosAPICall  } from '../../../utils/news';

var oPosts ;



/*
query Assets {
  es:demoModels(locales: es) {
    title
    subtitle
    slug
    locale
    createdAt
  }
  en:demoModels(locales: en) {
    title
    subtitle
    slug
    locale
    createdAt
  }
}

*/


export default function Index(data)  {
  console.log("noticia", data)
  //return <h1> Noticias {data.title} </h1>;
  return <>
    <div>Title:{data.title}</div>
    <div>Subtitle:{data.subtitle}</div>
    <div>Content:{data.content}</div>
  </>
}

export async function getStaticPaths (){
  const aIds = await getSlugsbyAxiosAPICall();
  let paths = [];
  i18n.locales.map((lng)=> aIds.map((p)=>paths.push({ params:{"locale":lng, "noticia":p }})));
  return {
    fallback:false,
    paths:paths
  }
}

  export async function getStaticProps(ctx) {
    var post2 =  await getPostAxiosAPICall (ctx.params.noticia);
    
    console.log("booooor",post2[ctx.params.locale])
  
    return {props:post2[ctx.params.locale]}
    console.log("zero", oData );
    return {props:{title:"hola"}};
    if(oPosts.en == {}) return;
    const post =  oPosts[ctx.params.locale][ctx.params.noticia];
    if(!post ) return {props:{title:""}}
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", post)
    return {
      props:{
        title: oPosts[ctx.params.locale][ctx.params.noticia].title
      }
    }
  }