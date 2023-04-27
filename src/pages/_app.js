import { useEffect } from "react";
import cfg from '/app.config.js';

import 'bootstrap/dist/css/bootstrap.css';
//import '@/styles/globals.css'

//export default function App({ Component, pageProps }) {
// return <Component {...pageProps} />
//}


export default function App({ Component, pageProps }) {
    useEffect(() => {
     require("bootstrap/dist/js/bootstrap.bundle.min.js");
      console.log("Cargando bootstrap.bundle.min.js")
    }, []);
    var merge = {...pageProps, ...cfg};
    return <Component {...merge} />
}