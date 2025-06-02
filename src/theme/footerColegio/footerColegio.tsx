import { Container, Row, Col, Nav, NavLink, Button } from 'react-bootstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';
import EditorialSM from '../../assets/img/sm_logo.webp';
import "./footerColegio.css";

const FooterColegio = () => {

  const renderTooltip = (props: any) => (
    <Tooltip id="whatsapp-tooltip" {...props}>
      Comunícate con nosotros
    </Tooltip>
  );

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
                <Button href='/admision' variant="outline-primary" className="buttonAnimated mx-3">Admisión 2026</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="mb-3">
            <div className='d-flex flex-column my-3 textFooter text-center'>
              <h6><strong>Direccion:</strong> Manuel Rodríguez #1064, Los Andes</h6>
              <h6><strong>Email:</strong> colegioandeschile@gmail.com</h6>
              <h6><strong>Telefono:</strong> 34 2 402858</h6>
            </div>
          </Col>



          <Col md={3} className="mb-3 d-none d-md-block">
            <Nav className="flex-column">
              <NavLink className="text-dark bold textFooter2" href="/mision-vision">Nuestra Comunidad</NavLink>
              {/* <NavLink className="text-dark bold textFooter2" href="/pae">Programa PAE</NavLink> */}
              <NavLink className="text-dark bold textFooter2" href="/reglamento">Reglamento interno de Convivencia Escolar</NavLink>
            </Nav>
          </Col>


          <Col md={3} className="d-flex flex-column justify-content-between align-items-center">
            <Nav className="w-100 d-flex justify-content-center">
              <li className="ms-3" style={{ position: 'relative', top: '-20px' }}>
                <NavLink className="text-body-secondary" href='https://tiendasm.cl/produccion/web/catalogo/1'>
                  <img
                    src={EditorialSM}
                    width="80"
                    height="100"
                  />
                </NavLink>
              </li>
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
            <p className="text-muted text-center">© 2024</p>
          </Col>

        </Row>

        <a href="https://wa.me/56993216494?text=Estimados,%20me%20dirijo%20a%20ustedes%20para%20solicitar%20información%20acerca%20del%20colegio.%20Agradezco%20su%20pronta%20respuesta." target="_blank" className="whatsapp">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          </OverlayTrigger>
        </a>
      </Container>
    </footer>
  );
};

export default FooterColegio;
