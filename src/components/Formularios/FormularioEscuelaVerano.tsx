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
  direccion: yup.string().required('La dirección es requerida'),
  consentimiento: yup.boolean().oneOf([true], 'El consentimiento es requerido'),
});

const FormularioEscuelaVerano = () => {
  const formik = useFormik({
    initialValues: {
      pupilo: '',
      apoderado: '',
      telefono: '',
      email: '',
      direccion: '',
      consentimiento: false
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        // console.log(values);
        await enviarDatos(values);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  });


  const enviarDatos = async (data: any) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
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
      await axios.post('https://colegio-backend.onrender.com/correo/enviar/verano', data, { headers: headers });
      // console.log(response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }



  /* const getRecaptchaKeys = async () => {
    const projectId = "6LeMr2IoAAAAADIjt0ZIqmn0WljROZgMqCscBtDX";
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/keys`;
  
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener las claves de reCAPTCHA:", error);
    }
  };
  
  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log(formData);
  
    await getRecaptchaKeys();
  
    ... resto de la lógica de handleClick ...
  }; */

  return (
    <Card style={{ backgroundColor: '#f5f5f5', borderRadius: '15px', padding: '20px' }} className='shadow'>
      <Card.Title>Formulario de Admisión Escuela de Verano 2024</Card.Title>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label><small><strong>Nombre completo del postulante</strong></small></Form.Label>
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
            <Form.Label><small><strong>Nombre completo del apoderado</strong></small></Form.Label>
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

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Dirección / Domicilio</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              type="text"
              placeholder="Ingrese una dirección"
              name="direccion"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.direccion && formik.touched.direccion}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.direccion}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Teléfono de Contacto</strong></small></Form.Label>
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

export default FormularioEscuelaVerano;
