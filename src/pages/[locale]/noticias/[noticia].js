import {i18n, getStaticPaths as pStatic , getLang}  from "../../../i18n";

import {getSlugsbyAxiosAPICall , getPostAxiosAPICall  } from '../../../utils/news';

import { Layout } from "@/components/Layout/Layout";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const  oBody = function (data, lang ){
  if(!data) return <Card><Card.Header>Noticia no found</Card.Header></Card>
  return(
    <Card >
      <Card.Header>{lang["common"]["news"]}</Card.Header>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Title>{data.subtitle}</Card.Title>
        <Card.Text><div dangerouslySetInnerHTML={{__html: data.content }} /></Card.Text>
      </Card.Body>
    </Card>
  )
}  

export default  function Noticia(props) {
  var auxBody = oBody(props.payload , props.lang );
  return <Layout body={auxBody}  {...props} />
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
    if(!post2) return {props:{}}
   // console.log("y ahora ", post2);
    return {
      props:{
        locale: ctx.params.locale,
        lang: getLang(ctx.params.locale),
        payload: post2[ctx.params.locale]
      }
    }
  }