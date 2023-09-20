import { Container, Row, Col, Nav, NavLink, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
                <img src={AndesLogo} width="120" height="150" className="mx-5 my-3" />
              </NavLink>
              <div className='d-flex flex-column info'>
                <Button variant="outline-primary" className="buttonAnimated">Admisión 2024</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-3">
            <div className='d-flex flex-column my-3'>
              <h6>Direccion: Manuel Rodríguez #1064, Los Andes</h6>
              <h6>Telefono: +56 2 402858</h6>
              <h6>Email: colegioandeschile@gmail.com</h6>
            </div>
          </Col>

          <Col md={4} className="mb-3">
            <Nav className="flex-column">
              <NavLink className="text-dark bold" href="/comunidad">Nuestra Comunidad</NavLink>
              <NavLink className="text-dark bold" href="/pae">Programa PAE</NavLink>
              <NavLink className="text-dark bold" href="/reglamento">Reglamento interno de Convivencia Escolar</NavLink>
            </Nav>
          </Col>

          <Col md={4} className="d-flex flex-column justify-content-between align-items-center">
            <Nav className="w-100 d-flex justify-content-center">
              <li className="ms-3">
                <NavLink className="text-body-secondary">
                  <FontAwesomeIcon icon={faInstagram} size="3x" className='iconEffect' />
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="text-body-secondary">
                  <FontAwesomeIcon icon={faFacebook} size="3x" className='iconEffect'/>
                </NavLink>
              </li>
            </Nav>
            <p className="text-muted text-center">© 2024 AlphaTechnology</p>
          </Col>

        </Row>

      </Container>
    </footer>
  );
};

export default FooterColegio;
