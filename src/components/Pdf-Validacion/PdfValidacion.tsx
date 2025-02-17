import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row, Form, Button, Spinner, Card } from "react-bootstrap";
import axios from 'axios';
import "./PdfValidacion.css";

interface ValidationResult {
  message: string;
  data?: {
    certificateType: string;
    certificateNumber: string;
    isValid: boolean;
    primerNombreAlumno: string;
    segundoNombreAlumno: string;
    primerApellidoAlumno: string;
    segundoApellidoAlumno: string;
    curso: string;
    rut: string;
    dv: string;
    expirationDate: string;
  };
}

const PdfValidacion = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [manualId, setManualId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    if (id) {
      validatePdf(id);
    }
  }, [location]);

  const validatePdf = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get<ValidationResult>(
        `https://colegio-backend.onrender.com/pdf-validador/validar-certificado?id=${id}`
      );
      setValidationResult(response.data);
    } catch (error) {
      console.error('Error al validar el PDF:', error);
      setValidationResult({ message: "Error al validar el certificado" });
    } finally {
      setLoading(false);
    }
  };

  const handleManualValidation = () => {
    if (manualId.trim()) {
      validatePdf(manualId.trim());
    } else {
      alert("Por favor, ingrese un ID válido.");
    }
  };

  const transformCurso = (num: number): string => {
    switch (num) {
      case 1:
        return 'Pre-Kinder';
      case 2:
        return 'Kinder';
      case 3:
        return 'Primero Básico';
      case 4:
        return 'Segundo Básico';
      case 5:
        return 'Tercero Básico';
      case 6:
        return 'Cuarto Básico';
      case 7:
        return 'Quinto Básico';
      case 8:
        return 'Sexto Básico';
      case 9:
        return 'Séptimo Básico';
      case 10:
        return 'Octavo Básico';
      default:
        return 'Curso Desconocido';
    }
  };



  return (
    <Container>
      <Row>
        <h3 className="titulo my-3">Validación de Certificados</h3>
        <Col sm={12} xs={12}>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status" style={{ marginRight: '10px' }} />
              Validando certificado...
            </div>
          ) : (
            <>
              {validationResult ? (
                <Card
                  className={validationResult.message === "Error al validar el certificado" ? 'cardStyle2' : 'cardStyle shadow'}
                  style={{ backgroundColor: validationResult.message === "Error al validar el certificado" ? '#e1cacd' : '#D4EDDA' }}
                >
                  <Card.Header>
                    <Card.Title>Resultado de la Validación</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Subtitle><b>Mensaje:</b></Card.Subtitle>
                    <Card.Text><b>{validationResult.message}</b></Card.Text>
                    <hr />
                    {validationResult.data && (
                      <>
                        <Card.Subtitle><b>Tipo de Certificado:</b></Card.Subtitle>
                        <Card.Text><b>{validationResult.data.certificateType}</b></Card.Text>
                        <hr />
                        <Card.Subtitle><b>Nombre Alumno:</b></Card.Subtitle>
                        <Card.Text><b>{validationResult.data.primerNombreAlumno} {validationResult.data.segundoNombreAlumno} {validationResult.data.primerApellidoAlumno} {validationResult.data.segundoApellidoAlumno}</b></Card.Text>
                        <hr />
                        <Card.Subtitle><b>Rut Alumno:</b></Card.Subtitle>
                        <Card.Text><b>{validationResult.data.rut}-{validationResult.data.dv}</b></Card.Text>
                        <hr />
                        <Card.Subtitle><b>Curso Alumno:</b></Card.Subtitle>
                        <Card.Text><b>{transformCurso(Number(validationResult.data.curso))}</b></Card.Text>
                        <hr />
                        <Card.Subtitle><b>Número de Matrícula:</b></Card.Subtitle>
                        <Card.Text><b>{validationResult.data.certificateNumber}</b></Card.Text>
                        <hr />
                        <Card.Subtitle><b>Fecha Expiración:</b></Card.Subtitle>
                        <Card.Text><b>{validationResult.data.expirationDate}</b></Card.Text>
                        <hr />
                      </>
                    )}
                  </Card.Body>
                </Card>
              ) : (
                <div>
                  <h4>Ingrese el ID del Certificado</h4>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el ID del certificado"
                      value={manualId}
                      onChange={(e) => setManualId(e.target.value)}
                    />
                    <Button
                      variant="primary"
                      className="mt-3"
                      onClick={handleManualValidation}
                    >
                      Validar
                    </Button>
                  </Form.Group>
                </div>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PdfValidacion;
