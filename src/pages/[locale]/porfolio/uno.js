import {getStaticPaths,getStaticProps, t}  from "@/i18n";
import { Layout } from '@/components/Layout/Layout';
import cfg from '/porfolio.config.js';


function myBody(props){
  return <p>Porfolio uno {t('porfolio', props.lang)} </p>
}

export default function Index(props) {
  props = {...props , ...cfg};
  var merge = {...props , body:myBody(props)}
  return <Layout {...merge } />
}



export { getStaticPaths, getStaticProps }