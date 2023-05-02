import {getStaticPaths, getLang, t}  from "../../i18n";
import { Layout } from '@/components/Layout/Layout';
import { Carousel } from "react-bootstrap";
import Link from 'next/link';

function myBody(props){
  return (  <Carousel slide={false} className="p-2" >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/sliders/slide_1-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Creemos en un mundo que funcione con energias renovables 100% verdes</h3>
      <p>Invitacion conferencia resultados 1T - 2023  <Link target="_blank"  href="https://coxenergy.sharepoint.com/:b:/s/pubdoc/Ed_ZZvOotrdEjly7okKkL58BiVds73X4aDmmSdlwv4NqwQ?e=4%3a1aQFpF&at=9">Leer</Link></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/sliders/slide_2-1.jpg"
      
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Queremos ser protagonistas </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/sliders/slide_3-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
  )
}

export default function Index(props) {
  var merge = {...props , body:myBody(props)}
  return <Layout {...merge} />
}

async function getStaticProps(ctx) {
  var lang = getLang(ctx.params.locale);
  return {
    props:{
      locale:ctx.params.locale,
      lang: lang
    }
  }
}

export { getStaticPaths, getStaticProps }
