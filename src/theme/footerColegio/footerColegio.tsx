import { Container, Row, Col, Nav, NavLink, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';
import "./footerColegio.css";

const FooterColegio = () => {
  return (
    <footer className="py-5 border-top footerCss">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="mb-3">
            <div className='d-flex align-items-center justify-content-center'>
              <NavLink href="/" className="mb-3 text-dark text-decoration-none">
                <img src={AndesLogo} width="120" height="150" className="mx-3 my-3" />
              </NavLink>
              <div className='d-flex flex-column'>
                <Button href='/admision' variant="outline-primary" className="buttonAnimated mx-3">Admisión 2024</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="mb-3">
            <div className='d-flex flex-column my-3 textFooter text-center'>
              <h6><strong>Direccion:</strong> Manuel Rodríguez #1064, Los Andes</h6>
              <h6><strong>Email:</strong> colegioandeschile@gmail.com</h6>
              <h6><strong>Telefono:</strong> +56 2 402858</h6>
            </div>
          </Col>



          <Col md={3} className="mb-3 d-none d-md-block">
            <Nav className="flex-column">
              <NavLink className="text-dark bold textFooter2" href="/comunidad">Nuestra Comunidad</NavLink>
              <NavLink className="text-dark bold textFooter2" href="/pae">Programa PAE</NavLink>
              <NavLink className="text-dark bold textFooter2" href="/reglamento">Reglamento interno de Convivencia Escolar</NavLink>
            </Nav>
          </Col>


          <Col md={3} className="d-flex flex-column justify-content-between align-items-center">
            <Nav className="w-100 d-flex justify-content-center">
              <li className="ms-3">
                <NavLink className="text-body-secondary" href='https://www.instagram.com/cach.colegioandeschile/'>
                  <FontAwesomeIcon icon={faInstagram} size="3x" className='iconEffect' />
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="text-body-secondary" href='https://www.facebook.com/colegioandeschile'>
                  <FontAwesomeIcon icon={faFacebook} size="3x" className='iconEffect' />
                </NavLink>
              </li>
            </Nav>
            <p className="text-muted text-center">© 2024 AlphaTechnology</p>
          </Col>

        </Row>

        <div className="btn-float">
          <a href="https://wa.me/56949147149?text=Hola,%20estoy%20busca%20de%20información,%20mi%20consulta%20es%20la%20siguiente:" className="whatsapp" target="_blank"><FontAwesomeIcon className='whatsapp-icon' icon={faWhatsapp} /></a>
        </div>
      </Container>
    </footer>
  );
};

export default FooterColegio;
