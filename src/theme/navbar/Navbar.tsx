import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';
// import AndesSlogan from '../../assets/img/slogan2.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path:any) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="container d-none d-md-block text-center">
        <img src={AndesLogo} width="120" height="150" className="my-3" />
        <h3 className='tituloNav'>Colegio Andes Chile</h3>
        <h5 className='subtituloNav'>Educando con Amor</h5>
        {/* <img src={AndesSlogan} width="210" height="140" className="my-3" /> */}
      </div>
      <RBNavbar bg="light" expand="lg" id='color-bg' className='mb-4 mt-4 shadow'>
        <Container>
          <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RBNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between align-items-center w-100">
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/") ? "active-link" : ""}`} href="/">Inicio</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/comunidad") ? "active-link" : ""}`} href="/comunidad">Nuestra Comunidad</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/pae") ? "active-link" : ""}`} href="/pae">Programa PAE</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/reglamento") ? "active-link" : ""}`} href="/reglamento">Reglamento interno de Convivencia Escolar</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/utiles") ? "active-link" : ""}`} href="/utiles">Lista de Útiles</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/talleres") ? "active-link" : ""}`} href="/talleres">Talleres</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/contacto") ? "active-link" : ""}`} href="/contacto">Contacto</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/admision") ? "active-link" : ""}`} href="/admision">Admisión</Nav.Link>
            </Nav>
          </RBNavbar.Collapse>
        </Container>
      </RBNavbar>
    </>
  )
};

export default Navbar;
