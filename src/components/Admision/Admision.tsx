// import { useState } from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { Col, Container, Row } from "react-bootstrap";
import FormularioAdmision from "../Formularios/FormularioAdmision";

const Admision = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} xs={12}>
          <FormularioAdmision />
        </Col>
        <Col sm={6} xs={12}>
          Pasos
        </Col>
      </Row>
    </Container>
  );
};

export default Admision;
