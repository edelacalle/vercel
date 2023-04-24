
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

function getLang(lng){
  var lang = require("./"+lng+".json");
  return lang;
}

module.exports = {
  i18n: cfg,
  getStaticPaths: getStaticPaths,
  getLang: getLang
}




/*
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en','es','br'],
  },

}
*/
