import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';
// import AndesSlogan from '../../assets/img/slogan2.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: any) => {
    return location.pathname === path;
  };

  // Dentro de tu componente
  const navigate = useNavigate();

  const handleNavClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const noticiasElement = document.getElementById('noticias');
      if (noticiasElement) {
        noticiasElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* d-none d-md-block */}
      <div className="container d-flex align-items-center">
        <img src={AndesLogo} width="120" height="150" className="my-3" />
        <div>
          <h3 className='tituloNav'>Colegio Andes Chile</h3>
          <h5 className='subtituloNav'>Educando con Amor</h5>
        </div>
      </div>


      <RBNavbar bg="light" expand="lg" id='color-bg' className='mb-4 shadow sticky-navbar'>
        <Container>
          <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RBNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between align-items-center w-100">
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/") ? "active-link" : ""}`} href="/">Inicio</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/#noticias") ? "active-link" : ""}`} onClick={handleNavClick}>Noticias</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/info-simce") ? "active-link" : ""}`} href="/info-simce">Información SIMCE</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/mision-vision") ? "active-link" : ""}`} href="/mision-vision">Misión - Visión</Nav.Link>
              {/* <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/pae") ? "active-link" : ""}`} href="/pae">Programa PAE</Nav.Link> */}
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/reglamento") ? "active-link" : ""}`} href="/reglamento">Reglamento Interno de Convivencia Escolar</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/utiles") ? "active-link" : ""}`} href="/utiles">Lista de Útiles</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/talleres") ? "active-link" : ""}`} href="/talleres">Talleres</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/admision") ? "active-link" : ""}`} href="/admision">Alumnos Nuevos 2025</Nav.Link>
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/matricula") ? "active-link" : ""}`} href="/matricula">Inscripción Matrícula 2025</Nav.Link>
              {/* <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/verano") ? "active-link" : ""}`} href="/verano">Escuela de Verano</Nav.Link> */}
              <Nav.Link className={`text-wrap custom-link text-light bold ${isActive("/contacto") ? "active-link" : ""}`} href="/contacto">Contacto</Nav.Link>
            </Nav>
          </RBNavbar.Collapse>
        </Container>
      </RBNavbar>
    </>
  )
};

export default Navbar;
