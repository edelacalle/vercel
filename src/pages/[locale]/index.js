
import Link from 'next/link';

import {getStaticPaths, getLang} from '../../i18n'; 

export default function Index(props) {
  console.log("props", props)
  return <main>
      <div>Pagina principal: {props.title} </div>
      <div>{props.title}</div>
      <a href="/about">{props.about}</a>
      <div><Link href="/en" locale="en" >Hola Eng </Link></div>
      <div><Link href="/es" locale="es" >Hola ESP </Link></div>
      <div><a href="/" locale="en" >English</a></div>
    </main>;
}

async function getStaticProps(ctx) {
  var lang = getLang(ctx.params.locale);
  return {
    props:{
      title: lang.common.title,
      about: lang.common.about
    }
  }

}

 export { getStaticPaths, getStaticProps }
