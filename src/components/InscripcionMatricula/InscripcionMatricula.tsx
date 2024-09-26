import { Col, Container, Row } from "react-bootstrap";
import "./InscripcionMatricula.css";
import FormularioMatricula from "../Formularios/FormularioMatricula";

const InscripcionMatricula = () => {
  return (
    <Container>
      <h3 className="tituloAdmision my-3">Inscripción Matrícula 2025</h3>
      <Row>
        <Col sm={7} xs={12} className="textSteps order-sm-2 order-1">
          <h4 className="tituloAdmision">Para incorporarte a nuestra comunidad CACH 2025, ten en cuenta lo siguiente:</h4>
          <div className="bodySteps">
            <h4><strong>1. Completa el formulario de inscripción:</strong></h4>
            <p>Al finalizar, recibirás un código único que hará tu proceso de matrícula más rápido y sencillo. ¡Es un paso esencial para asegurar tu lugar con nosotros!</p>
          </div>
          <div className="bodySteps">
            <h4><strong>2. ¿Qué hacer con el código?</strong></h4>
            <p>Este código contiene tus datos y agiliza el proceso de matrícula, permitiéndonos preparar toda la documentación de manera anticipada. ¡Solo preséntalo el día de la matrícula y listo!</p>
          </div>
          <div className="bodySteps">
            <h4><strong>3. Beneficios de usar el código:</strong></h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>Ahorra tiempo: Evita esperas largas y simplifica los trámites.</li>
              <li>Personalización: Tus datos ya estarán registrados, haciendo el proceso más fluido.</li>
              <li>Facilidad: Recibirás un correo de confirmación con toda la información necesaria para tu matrícula.</li>
            </ul>
          </div>
          <div className="bodySteps">
            <h4><strong>Días de matrícula:</strong></h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>Lunes 2 de diciembre (Prekinder a 2° básico)</li>
              <li>Martes 3 de diciembre (3° a 5° básico)</li>
              <li>Miércoles 4 de diciembre (6° a 8° básico)</li>
            </ul>
          </div>
          <div className="bodySteps">
            <h4><strong>Importante:</strong></h4>
            <p>Guarda el código en un lugar seguro y revisa tu correo electrónico para más instrucciones. Si no encuentras el correo, revisa tu bandeja de spam o correos no deseados.</p>
            <p><strong>¡No olvides llevar tu carnet y/o cédula de identidad el día de la matrícula!</strong></p>
          </div>
        </Col>
        <Col sm={5} xs={12} className="order-sm-1 order-2">
          <FormularioMatricula />
        </Col>
      </Row>
    </Container>
  );
};

export default InscripcionMatricula;
