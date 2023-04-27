import styles from './Layout.module.css'

import { Container, Nav,Navbar } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { t, LanguageSwitchLink}  from "../../i18n";

const HeaderAdmin = (props) =>{
    const router = useRouter();
    return(
        <Navbar expand="lg" className={styles.caiBackground}>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <Image src='/images/logo.svg'  width={100} height={50} alt="logo" />
                    <Navbar.Text>{t((props.header && props.header.title) ? props.header.title :'' ,props.lang)}</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        {(props.header && props.header.links && props.header.links.map((l,i)=>< Nav.Link 
                            key={`l_${i}`}
                            active={router.asPath==l.href}
                            href={l.href} 
                            bsPrefix={styles.caiLink}>
                                {t(l.title,props.lang)}
                            </Nav.Link>))}
                        <LanguageSwitchLink locale="en" />
                        <LanguageSwitchLink locale="es" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


const FooterAdmin = (props) =>{
    return(
    <Container className="fixed-bottom">
        {t((props.footer && props.footer.title) ? props.footer.title :'' , props.lang)}
    </Container>
    )
}
const BodyAdmin = (props) =>{
    return(
    <Container fluid >
      {props.body}
    </Container>
    )
}

export function Layout(props) {
    return (
    <Container fluid>
        <Row >
            <Col xs={12} ><HeaderAdmin {...props} /></Col>
            <Col xs={12} ><BodyAdmin   {...props} /></Col>
            <Col xs={12} ><FooterAdmin {...props} /></Col>
        </Row>
    </Container>
    )
}
 