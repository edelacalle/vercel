import {getStaticPaths, getLang}  from "../../i18n";

export default function About(props) {
  return <main>About page:  -- {props.title}</main>;
}

async function getStaticProps( ctx ) {
  var lang = getLang(ctx.params.locale);
  return {
    props:{
      title:lang.common.about
    }
  }
}

export { getStaticPaths, getStaticProps }