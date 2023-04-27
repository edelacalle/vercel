import {getStaticPaths, getLang, t}  from "../../i18n";
import { Layout } from '@/components/Layout/Layout';

function myBody(props){
  return <p>About: {t('about', props.lang)} </p>
}

export default function About(props) {
  var merge = {...props , body:myBody(props)}
  return <Layout {...merge } />
}

async function getStaticProps( ctx ) {
  var lang = getLang(ctx.params.locale);
  return {
    props:{
      locale:ctx.params.locale,
      lang: lang
    }
  }
}

export { getStaticPaths, getStaticProps }