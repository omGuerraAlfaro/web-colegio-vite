import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import axios from 'axios';
import "./Formulario.css"

const formSchema = yup.object().shape({
  pupilo: yup.string().required('El nombre del postulante es requerido'),
  apoderado: yup.string().required('El nombre del apoderado es requerido'),
  telefono: yup.string().required('El teléfono es requerido'),
  email: yup.string().email('Debe ser un email válido').required('El email es requerido'),
  consentimiento: yup.boolean().oneOf([true], 'El consentimiento es requerido'),
  tallerPostula: yup.string().required('El taller al que postula es requerido'),
  cursoPostula: yup.string().required('El curso al que postula es requerido')
});

const FormularioTalleres = () => {
  const formik = useFormik({
    initialValues: {
      pupilo: '',
      apoderado: '',
      telefono: '',
      email: '',
      colegio: '',
      tallerPostula: '',
      cursoPostula: '',
      consentimiento: false
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        await enviarDatos(values);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  });

  const talleres = [
    "Taller de Circo y Malabares",
    "Taller de Ingles",
    "Taller Fútbol Recreativo",
    "Taller Instrumental y Expresión Musical",
    "Taller de Reforzamiento",
    "Taller de Ballet",
    "Taller de Manualidades",
    "Taller de Teatro y Expresión Corporal",
    "Taller Voleibol Recreativo",
    "Taller Danza Recreativa",
    "Taller Simce 4to Básico",
    "Taller de Defensa Personal",
  ];

  const cursos = [
    "Prekinder",
    "Kinder",
    "Primero",
    "Segundo",
    "Tercero",
    "Cuarto",
    "Quinto",
    "Sexto",
    "Séptimo",
    "Octavo"
  ];

  const enviarDatos = async (data: any) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      // await axios.post('http://localhost:3200/correo/enviar/taller', data, { headers: headers });
      await axios.post('https://api-colegio.onrender.com/correo/enviar/taller', data, { headers: headers });
      Swal.fire({
        title: '¡Gracias!',
        text: 'Su formulario de inscripción ha sido enviado.',
        icon: 'success',
        confirmButtonText: 'Entendido',
        timer: 5000,
        timerProgressBar: true,
      }).then(() => {
        formik.resetForm();
      });
      // console.log(response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Swal.fire({
        title: '¡ Lo Sentimos :( !',
        text: 'Tenemos problemas con nuestros servicios, por favor intente más tarde. Si el problema persiste, por favor contacte al colegio a través de nuestro Whatsapp.',
        icon: 'error',
        confirmButtonText: 'Entendido',
        timer: 8000,
        timerProgressBar: true,
      }).then(() => {
        formik.resetForm();
      });
    }
  }

  return (
    <Card style={{ backgroundColor: '#f5f5f5', borderRadius: '15px', padding: '20px' }} className='shadow'>
      <Card.Title>Formulario de inscripción Talleres 2024</Card.Title>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label><small><strong>Nombre completo del Alumno/a</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              type="text"
              placeholder="Ingrese nombre completo"
              name="pupilo"
              value={formik.values.pupilo}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.pupilo && formik.touched.pupilo}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pupilo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Curso del Alumno/a</strong></small></Form.Label>
            <div className="select-wrapper">
              <Form.Control
                className="rounded-input"
                as="select"
                name="cursoPostula"
                onChange={formik.handleChange}
                value={formik.values.cursoPostula}
                isInvalid={!!formik.errors.cursoPostula && formik.touched.cursoPostula}
              >
                <option value="" disabled hidden>Seleccionar Curso</option>
                {cursos.map((curso, index) => (
                  <option key={index} value={curso}>
                    {curso}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formik.errors.cursoPostula}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Taller al que postula</strong></small></Form.Label>
            <div className="select-wrapper">
              <Form.Control
                className="rounded-input"
                as="select"
                name="tallerPostula"
                onChange={formik.handleChange}
                value={formik.values.tallerPostula}
                isInvalid={!!formik.errors.tallerPostula && formik.touched.tallerPostula}
              >
                <option value="" disabled hidden>Seleccionar Taller</option>
                {talleres.map((taller, index) => (
                  <option key={index} value={taller}>
                    {taller}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formik.errors.tallerPostula}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Nombre completo del Apoderado</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              type="text"
              placeholder="Ingrese nombre completo"
              name="apoderado"
              value={formik.values.apoderado}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.apoderado && formik.touched.apoderado}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.apoderado}
            </Form.Control.Feedback>
          </Form.Group>          


          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Teléfono</strong></small></Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faPhone} />
                  </InputGroup.Text>
                  <Form.Control
                    className="rounded-input-right"
                    type="tel"
                    placeholder="Ingrese teléfono"
                    name="telefono"
                    value={formik.values.telefono}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.telefono && formik.touched.telefono}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Email</strong></small></Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    className="rounded-input-right"
                    type="email"
                    placeholder="Ingrese email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.email && formik.touched.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="margenLabel">
            <Form.Check
              type="checkbox"
              label="Doy mi consentimiento para el manejo de mis datos."
              name="consentimiento"
              checked={formik.values.consentimiento}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.consentimiento && formik.touched.consentimiento}
            />
            {formik.errors.consentimiento && formik.touched.consentimiento && <Form.Text className="text-danger">{formik.errors.consentimiento}</Form.Text>}
          </Form.Group>

          <Row>
            <Col md={12} sm={12} xs={12}>
              <Button type="submit" className='buttonFormulario btn-light'>Enviar formulario de inscripción</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card >
  );
};

export default FormularioTalleres;
