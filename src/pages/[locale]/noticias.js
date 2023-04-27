import {  getLang , getStaticPaths }  from "../../i18n";
import { Layout } from "@/components/Layout/Layout";
import { getPostsyAxiosAPICall } from "../../utils/news";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const  oBody = function (aNews , oLang ){
  return(
    <Card >
      <Card.Header><div>{oLang["common"]["news"]}</div></Card.Header>
      <Card.Img variant="top" src="/images/Header-Sala-prensa.png" />
      <Card.Body>
        <ListGroup>
          {aNews.map((n) => 
            <ListGroup.Item key={"n_"+n.slug} action href={"noticias/"+ n.slug }>
              {n.title}
          </ListGroup.Item>)}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}  

export default  function Noticias(props) {
  var merge = {...props , body:oBody(props.payload.data.posts , props.lang )}
  return <Layout  {...merge }/>
}

async function getStaticProps( ctx ) {
  return {
    props:{
      locale: ctx.params.locale,
      lang: getLang(ctx.params.locale),
      payload: await getPostsyAxiosAPICall(ctx.params.locale)
    }
  }
}

export { getStaticPaths, getStaticProps }