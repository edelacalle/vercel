import { useEffect } from "react";
import cfg from '/app.config.js';

import { DefaultSeo } from 'next-seo';
import SEO from '/next-seo.config';
import { NextSeo } from 'next-seo';

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'

//export default function App({ Component, pageProps }) {
// return <Component {...pageProps} />
//}

import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      console.log("Cargando bootstrap.bundle.min.js")
    }, []);
    var merge = {...pageProps, ...cfg};
    const router = useRouter();
    const seo = cfg.seo[router.asPath] ?? {title:'', description:''}
    return <>
      <DefaultSeo {...SEO} />
      <NextSeo  title={seo.title} description={seo.description}  />
      <Component {...merge} />
    </>
}


/*
  
*/