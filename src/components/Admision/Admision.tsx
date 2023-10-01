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
          <h4>Para la incorporación a nuestra comunidad CACH, debe seguir los siguientes pasos:</h4>
          <h4><strong>Paso 1: </strong>Llenar el formulario:</h4>
          <h4><strong>Paso 2: </strong>Una vez que haya llenado el formulario, será contactado(a) a la brevedad por la encargada de Admisión. Durante este paso se agendarán:</h4>
          <ul>
            <li>
              Fecha de la entrevista
            </li>
            <li>
              Hora de la entrevista
            </li>
          </ul>
          <h4><strong>Paso 3: </strong>Entrevista:</h4>
          <p>La entrevista será con el Director del Establecimiento, quien entrevistará tanto a los apoderados como al alumno postulante. Durante este encuentro, se proporcionará toda la información y documentación necesaria para el proceso de admisión.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Admision;
