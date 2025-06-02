import { useState } from 'react';
import {
  Navbar as RBNavbar,
  Nav,
  NavDropdown,
  Container,
  Modal,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUniversity,
  faBookOpen,
  faUserPlus,
  faAt,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path:any) => location.pathname === path;

  const [showIntranetModal, setShowIntranetModal] = useState(false);

  return (
    <>
      <div className="top-strip" />

      <RBNavbar expand="lg" id="color-bg" className="sticky-navbar shadow">
        <Container>
          <RBNavbar.Brand className="d-flex align-items-center" href="/">
            <img
              src={AndesLogo}
              width={55}
              height={65}
              className="d-inline-block align-top"
              alt="Logo Colegio Andes Chile"
            />
            <div className="ms-2 brand-text">
              <div className="tituloNav">Colegio Andes Chile</div>
              <div className="subtituloNav">Educando con Amor</div>
            </div>
          </RBNavbar.Brand>

          <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RBNavbar.Collapse id="basic-navbar-nav">
            {/* Espaciado uniforme entre items */}
            <Nav className="ms-auto" style={{ display: 'flex', gap: '1rem' }}>
              <Nav.Link
                href="/"
                className={`custom-link bold ${isActive('/') ? 'active-link' : ''}`}
              >
                <FontAwesomeIcon icon={faHome} className="me-1" />
                Inicio
              </Nav.Link>

              <NavDropdown
                title={
                  <><FontAwesomeIcon icon={faUniversity} className="me-1" /> Nuestro Colegio</>
                }
                id="nav-colegio"
                className="custom-link bold"
              >
                <NavDropdown.Item href="/mision-vision">
                  Misión – Visión
                </NavDropdown.Item>
                <NavDropdown.Item href="/reglamento">
                  Reglamento
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <><FontAwesomeIcon icon={faBookOpen} className="me-1" /> Vida Estudiantil</>
                }
                id="nav-vida"
                className="custom-link bold"
              >
                <NavDropdown.Item href="/talleres">Talleres</NavDropdown.Item>
                <NavDropdown.Item href="/utiles">Lista de Útiles</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <><FontAwesomeIcon icon={faUserPlus} className="me-1" /> Admisiones</>
                }
                id="nav-admisiones"
                className="custom-link bold"
              >
                <NavDropdown.Item href="/admision">Formulario Postulación</NavDropdown.Item>
                <NavDropdown.Item href="/matricula">Formulario Matrícula</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                className="custom-link bold"
                onClick={() => setShowIntranetModal(true)}
                style={{ cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={faAt} className="me-1" />
                Intranet
              </Nav.Link>
            </Nav>
          </RBNavbar.Collapse>
        </Container>
      </RBNavbar>

      <Modal show={showIntranetModal} onHide={() => setShowIntranetModal(false)} centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: '#c12437', color: '#fff' }}
          className="d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faAt} size="lg" className="me-2" />
          <Modal.Title>Intranet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p style={{ fontSize: '1.1rem' }}>
            <strong>¡Próximamente!</strong>
          </p>
          <p>El acceso a la Intranet estará habilitado muy pronto.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowIntranetModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
