import { Layout } from '@/components/Layout/Layout';
import Link from "next/link";

function myBody(props){
  return <Link href={"https://api.vercel.com/v1/integrations/deploy/prj_NaxXMohIPlZSyz9PgqP1qrLMeSDI/4AU8JxuYTC"}> Refrescar </Link>
  
}

export default function Test(props) {
  var merge = {...props , body:myBody(props)}
  return <Layout {...merge } />
  
}

/*
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

*/