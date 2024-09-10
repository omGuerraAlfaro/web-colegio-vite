import { Col, Container, Row } from "react-bootstrap";
import "./InscripcionMatricula.css";
import FormularioMatricula from "../Formularios/FormularioMatricula";

const InscripcionMatricula = () => {
  return (
    <Container>
      <h3 className="tituloAdmision my-3">Inscripción Matrícula 2025</h3>
      <Row>
        <Col sm={6} xs={12}>
          <FormularioMatricula />
        </Col>
        <Col sm={6} xs={12} className="textSteps">
          <h4 className="tituloAdmision">Para la incorporación a nuestra comunidad CACH 2025, debes saber lo siguiente:</h4>
          <div className="bodySteps">
            <h4><strong>Completa el formulario al finalizar te entregaremos un codigo con el cúal tu proceso de matrícula será mucho mas rápido!!</strong></h4>
          </div>
          <div className="bodySteps">
            <h4><strong>Que hacer con el codigo: </strong></h4>
            <p>Con el codigo entregado tu proceso de matrícula será mucho más rápido, ya que los datos necesarios para generar la documentación de matrícula </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InscripcionMatricula;
