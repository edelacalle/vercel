import {getStaticPaths,getStaticProps, t}  from "../../i18n";
import { Layout } from '@/components/Layout/Layout';
import cfg from 'porfolio.config.js';


function myBody(props){
  return <p>Porfolio{t('porfolio', props.lang)} </p>
}

export default function About(props) {
  props.header.title = "pepe1";
  props = {...props , ...cfg};
  var merge = {...props , body:myBody(props)}
  return <Layout {...merge } />
}



export { getStaticPaths, getStaticProps }