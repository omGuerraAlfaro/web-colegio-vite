import { Col, Container, Row } from "react-bootstrap";
import "./Verano.css";
import FormularioEscuelaVerano from "../Formularios/FormularioEscuelaVerano";

const EscuelaVerano = () => {
  return (
    <Container>
      <h3 className="titulo my-3">Escuela de Verano</h3>
      <Row>
        <Col sm={6} xs={12}>
          <FormularioEscuelaVerano />
        </Col>
        <Col sm={6} xs={12} className="textSteps">
          <h4 className="tituloAdmision">Para la incorporación a escuela de verano:</h4>
          <div className="bodySteps">
            <h4><strong>Paso 1: </strong>Llenar el formulario:</h4>
          </div>
          <div className="bodySteps">
            <h4><strong>Paso 2: </strong>Una vez que haya llenado el formulario, será contactado(a) a la brevedad por la encargada de Admisión. Durante este paso se agendarán:</h4>
            <ul>
              <li>
                Fecha de la entrevista de inscripción
              </li>
              <li>
                Hora de la entrevista de inscripción
              </li>
            </ul>
          </div>          
        </Col>
      </Row>
    </Container>
  );
};

export default EscuelaVerano;
