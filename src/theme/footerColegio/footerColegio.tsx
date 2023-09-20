import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';
import "./footerColegio.css";

const FooterColegio = () => {
  return (
    <footer className="py-5 border-top footerCss">
      <Container fluid>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5">

          <Col md={4} className="mb-3">
            <div className='d-flex align-items-start'>
              <NavLink href="/" className="mb-3 text-dark text-decoration-none">
                <img src={AndesLogo} width="120" height="150" className="my-3" />
              </NavLink>
              <div className='d-flex flex-column info'>
                <h5>Direccion: Manuel Rodriguez #1064</h5>
                <h5>Telefono:</h5>
                <h5></h5>
              </div>
            </div>
            <p className="text-muted">© 2024 AlphaTechnology</p>
          </Col>



          <Col md={4} className="mb-3">
            <h5>Section</h5>
            <Nav className="flex-column">
              <NavLink href="#" className="nav-link p-0 text-muted">Home</NavLink>
              <NavLink href="#" className="nav-link p-0 text-muted">Features</NavLink>
              <NavLink href="#" className="nav-link p-0 text-muted">Pricing</NavLink>
              <NavLink href="#" className="nav-link p-0 text-muted">FAQs</NavLink>
              <NavLink href="#" className="nav-link p-0 text-muted">About</NavLink>
            </Nav>
          </Col>

          <Col md={4} className="d-flex align-item-center ">
            <Nav className="">
              <li className="ms-3">
                <NavLink className="text-body-secondary">
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="text-body-secondary">
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </NavLink>
              </li>
            </Nav>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default FooterColegio;
