// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css";
import AndesLogo from '../../assets/img/LOGOCOLEGIO.png';
import AndesSlogan from '../../assets/img/slogan2.png';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <img src={AndesLogo} width="120" height="150" className="my-3" />
        <img src={AndesSlogan} width="210" height="140" className="my-3" />

      </div>
      <RBNavbar bg="light" expand="lg" id='color-bg' className='mb-4 shadow'>
        <Container>
          {/* <RBNavbar.Brand href="#">
          </RBNavbar.Brand> */}
          <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RBNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between align-items-center w-100">
              <Nav.Link className="text-wrap custom-link text-light bold" href="/">Inicio</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/comunidad">Nuestra Comunidad</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/pae">Programa PAE</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/utiles">Lista de Útiles</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/reglamento">Reglamento interno de Convivencia Escolar</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/talleres">Talleres</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/contacto">Contacto</Nav.Link>
              <Nav.Link className="text-wrap custom-link text-light bold" href="/admision">Admisión</Nav.Link>
            </Nav>
          </RBNavbar.Collapse>
        </Container>
      </RBNavbar>
    </>
  )
};

export default Navbar;
