
import i18n, { getLang } from '@/i18n';

import {  useRouter } from 'next/router'
import Router from 'next/router';
import Image from 'next/image'
import Link from 'next/link'

import { Container, Nav, Navbar , Button} from "react-bootstrap";
//import { LanguageSwitchLink } from "./LanguageSwitchLink"
import languageDetector from '../utils/languageDetector'


function BackButton() {
  return (
    <Button variant="outline-info" onClick={()=>Router.back()}>Back</Button>
  )
}

const LanguageSwitchLink = ( props ) => {
  const router = useRouter()
  const locale = props.locale || i18n.defaultLocale
  var href  = props.href || router.asPath
  let img = `/images/${locale}.png`
  // Cambiamos el primer param por el locale
  var aPath = href.split("/");
  aPath[1] = locale;
  href = aPath.join("/");
  return (
    <Link
      href={href}
    >
      <button style={{ fontSize: 'small' }} onClick={() => languageDetector.cache(locale)}><img width="24" heigth="24" src={img} /> </button>
    </Link>
  );
}

// 

function atras(){
 // 
  console.log("atras2")
  Router.back();

}
export const Header = ({lang }) =>{
  console.log("pepe", Router);
  //return(<p>head</p>)
  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();
  return(
       <Navbar expand="md" className="mega-menu p-2" >
        <Container>
            <Navbar.Brand href="/">
              <Image 
                  alt="Cox" 
                  src="/images/cox-logo-blanco.png"
                  width="128"
                  height="52"
               ></Image>
            </Navbar.Brand>
            <BackButton/>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link active={ lastPath == "noticias" } href="/noticias">{lang["common"]["news"]}</Nav.Link>
              <Nav.Link active={ lastPath == "about" } href="/about">{lang["common"]["about"]}</Nav.Link>
              <Nav.Link active={ lastPath == "porfolio" } href="/porfolio">porfolio</Nav.Link>

              <LanguageSwitchLink locale="en" />
              <LanguageSwitchLink locale="es" />
            </Nav>
       
            

          </Navbar.Collapse>
   
        </Container>
       
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       </Navbar>
  )

}

const Body = (props) =>{
  return(
    <Container className='p-4 mt-0' style={{"position":"relative"}} >
      {props.children}
    </Container>
  )
}

export const Footer = ({lang}) =>{
  return(
    <Container className="fixed-bottom">
        {lang["common"]["foot"]}
    </Container>
  )
}

export const Layout = (props) =>{
  const lang = getLang(props.locale);
  return (
  <div className="row">
    <div className="col-12">
      <Header lang={lang} ></Header>
    </div>
    <div className="col-12">
      <Body lang={lang}>{props.body}</Body> 
    </div>
    <div className="col-12">
      <Footer lang={lang}/>
    </div>
  </div>
  );
}

