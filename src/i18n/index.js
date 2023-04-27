import { useRouter } from 'next/router'
import languageDetector from '../utils/languageDetector'


const cfg = {
  defaultLocale: 'es',
  locales: ['en','es'],
}


async function getStaticPaths (){
  let paths=[];
  cfg.locales.map((e)=> paths.push({params:{"locale":e}}))
  return {
    fallback:false,
    paths:paths
  }
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

function getLang(lng){
  lng = (cfg.locales.indexOf(lng)==-1) ? cfg.defaultLocale : lng;
  return require("./"+lng+".json");

}

// INFO: Mejorar
function t(txt,lang){
  // console.log("traduzco", txt , lang)
  return (lang && lang["common"] && lang["common"][txt] ) ? lang["common"][txt]:txt
}



const LanguageSwitchLink = (props) => {
    const router = useRouter()
    const locale = props.locale || i18n.defaultLocale
    var href  = props.href || router.asPath
    let img = `/images/${locale}.png`
    // Cambiamos el primer param por el locale
    var aPath = href.split("/");
    aPath[1] = locale;
    href = aPath.join("/");
    return <a href={href}>
      <button onClick={() => languageDetector.cache(locale)}>
        <img width="24" height="24" src={`/images/${locale}.png`}></img>
      </button>
    </a>
      
  }

/*
<Link
        href={href}
      >
      <button style={{ fontSize: 'small' }} onClick={() => languageDetector.cache(locale)}><img width="24" heigth="24" src={img} /> </button>
      </Link>
  
*/


module.exports = {
  i18n: cfg,
  getStaticPaths: getStaticPaths,
  getStaticProps:getStaticProps,
  getLang: getLang,
  t:t,
  LanguageSwitchLink:LanguageSwitchLink
}

