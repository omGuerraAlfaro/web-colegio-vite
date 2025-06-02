import { Col, Container, Row } from "react-bootstrap";
import FormularioAdmision from "../Formularios/FormularioAdmision";
import "./Admision.css";

const Admision = () => {
  return (
    <Container>
      <h3 className="titulo my-3">Formulario Postulación 2026</h3>
      <Row>
        <Col sm={12} xs={12} className="textSteps">
          <h4 className="tituloAdmision">Para la incorporación a nuestra comunidad CACH, debe seguir los siguientes pasos:</h4>
          <div className="bodySteps">
            <h4><strong>Paso 1: </strong>Llenar el formulario:</h4>
          </div>
          <div className="bodySteps">
            <h4><strong>Paso 2: </strong>Una vez que haya llenado el formulario, será contactado(a) a la brevedad por la encargada de Admisión. Durante este paso se agendarán:</h4>
            <ul>
              <li>
                Fecha de la entrevista
              </li>
              <li>
                Hora de la entrevista
              </li>
            </ul>
          </div>
          <div className="bodySteps">
            <h4><strong>Paso 3: </strong>Entrevista:</h4>
            <p>La entrevista será con el Director del Establecimiento, quien entrevistará tanto a los apoderados como al alumno postulante. Durante este encuentro, se proporcionará toda la información y documentación necesaria para el proceso de admisión.</p>
          </div>
        </Col>
        <Col sm={12} xs={12}>
          <FormularioAdmision />
        </Col>
      </Row>
    </Container>
  );
};

export default Admision;
