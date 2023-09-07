import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import "./footer.css";

function Footer() {
  return (
    <footer className="py-3 my-4 border-top container">
      <Container fluid>
        <Row className="d-flex flex-wrap justify-content-between align-items-center">
          <Col md={4} className="d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 AlphaTecnology</span>
          </Col>

          <Col md={4} className="d-flex justify-content-end">
            <Nav className="list-unstyled d-flex">
              
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

export default Footer;
