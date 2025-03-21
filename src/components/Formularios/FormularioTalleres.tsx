import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import axios from 'axios';
import "./Formulario.css";

const formSchema = yup.object().shape({
  rutApoderado: yup.string().required('El RUT del apoderado es requerido'),
  pupilo: yup.string().required('El alumno/a es requerido'),
  apoderado: yup.string().required('El nombre del apoderado es requerido'),
  telefono: yup.string().required('El teléfono es requerido'),
  email: yup.string().email('Debe ser un email válido').required('El email es requerido'),
  tallerPostula: yup.string().required('El taller al que postula es requerido'),
});

const FormularioTalleres = () => {
  const [alumnosDelApoderado, setAlumnosDelApoderado] = useState<any[]>([]);
  const [formHabilitado, setFormHabilitado] = useState(false);

  const formik = useFormik({
    initialValues: {
      rutApoderado: '',
      pupilo: '',
      apoderado: '',
      telefono: '',
      email: '',
      tallerPostula: ''
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
    { id_taller: 1, descripcion_taller: 'Taller Agrupación Musical' },
    { id_taller: 2, descripcion_taller: 'Taller de Reforzamiento' },
    { id_taller: 3, descripcion_taller: 'Taller de Futbol' },
    { id_taller: 4, descripcion_taller: 'Taller Instrumental' },
    { id_taller: 5, descripcion_taller: 'Taller de Manualidades' },
    { id_taller: 6, descripcion_taller: 'Taller de Teatro' },
    { id_taller: 7, descripcion_taller: 'Taller de Coro' },
    { id_taller: 8, descripcion_taller: 'Taller de Defensa Personal' },
    { id_taller: 9, descripcion_taller: 'Taller Simce 4to Básico' },
    { id_taller: 10, descripcion_taller: 'Taller Simce 8vo Básico' },
  ];

  const buscarApoderado = async (rut: string) => {
    try {
      const rutFormat = rut.split("-")[0];
      const response = await axios.get(`https://colegio-backend.onrender.com/apoderado/${rutFormat}/with-estudents`);
      const apoderado = response.data;

      if (apoderado && apoderado.estudiantes?.length > 0) {
        const nombreCompletoApoderado = [
          apoderado.primer_nombre_apoderado,
          apoderado.segundo_nombre_apoderado,
          apoderado.primer_apellido_apoderado,
          apoderado.segundo_apellido_apoderado
        ].filter(Boolean).join(" ");

        const alumnos = apoderado.estudiantes.map((alumno: any) => ({
          id: alumno.id,
          nombreCompleto: [
            alumno.primer_nombre_alumno,
            alumno.segundo_nombre_alumno,
            alumno.primer_apellido_alumno,
            alumno.segundo_apellido_alumno
          ].filter(Boolean).join(" ")
        }));

        setAlumnosDelApoderado(alumnos);
        formik.setFieldValue('apoderado', nombreCompletoApoderado);
        formik.setFieldValue('telefono', apoderado.telefono_apoderado || '');
        formik.setFieldValue('email', apoderado.correo_apoderado || '');
        setFormHabilitado(true);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Apoderado no encontrado',
          text: 'No se encontró un apoderado con ese RUT.',
        });
        setAlumnosDelApoderado([]);
        formik.setFieldValue('apoderado', '');
        formik.setFieldValue('telefono', '');
        formik.setFieldValue('email', '');
        setFormHabilitado(false);
      }
    } catch (error) {
      console.error('Error al buscar apoderado:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error en la búsqueda',
        text: 'Hubo un problema al buscar al apoderado. Intente más tarde.',
      });
      setAlumnosDelApoderado([]);
      setFormHabilitado(false);
    }
  };

  const enviarDatos = async (data: any) => {
    try {
      const payload = {
        id_alumno: data.pupilo,
        id_taller: data.tallerPostula,
        correo: data.email
      };

      await axios.post('https://colegio-backend.onrender.com/inscripcion-taller', payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      Swal.fire({
        title: '¡Gracias!',
        text: 'Su formulario de inscripción ha sido enviado.',
        icon: 'success',
        confirmButtonText: 'Entendido',
        timer: 5000,
        timerProgressBar: true,
      }).then(() => {
        formik.resetForm();
        setAlumnosDelApoderado([]);
        setFormHabilitado(false);
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Swal.fire({
        title: '¡Lo sentimos :(!',
        text: 'Tenemos problemas con nuestros servicios, por favor intente más tarde.',
        icon: 'error',
        confirmButtonText: 'Entendido',
        timer: 8000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <Card style={{ backgroundColor: '#f5f5f5', borderRadius: '15px', padding: '20px' }} className='shadow'>
      <Card.Title>Formulario de inscripción Talleres 2025</Card.Title>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label><small><strong>RUT del Apoderado</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              type="text"
              placeholder="Ingrese RUT (Formato: 12345678-9)"
              name="rutApoderado"
              value={formik.values.rutApoderado}
              onChange={formik.handleChange}
              onBlur={() => buscarApoderado(formik.values.rutApoderado)}
              isInvalid={!!formik.errors.rutApoderado && formik.touched.rutApoderado}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.rutApoderado}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Nombre completo del Apoderado</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              type="text"
              name="apoderado"
              value={formik.values.apoderado}
              readOnly
              disabled={!formHabilitado}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label><small><strong>Alumno/a</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              as="select"
              name="pupilo"
              value={formik.values.pupilo}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.pupilo && formik.touched.pupilo}
              disabled={!formHabilitado}
            >
              <option value="" disabled hidden>Seleccione un alumno</option>
              {alumnosDelApoderado.map((alumno) => (
                <option key={alumno.id} value={alumno.id}>{alumno.nombreCompleto}</option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {formik.errors.pupilo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Taller al que postula</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              as="select"
              name="tallerPostula"
              value={formik.values.tallerPostula}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.tallerPostula && formik.touched.tallerPostula}
              disabled={!formHabilitado}
            >
              <option value="" disabled hidden>Seleccionar Taller</option>
              {talleres.map((taller) => (
                <option key={taller.id_taller} value={taller.id_taller}>
                  {taller.descripcion_taller}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {formik.errors.tallerPostula}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Teléfono</strong></small></Form.Label>
                <InputGroup>
                  <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                  <Form.Control
                    className="rounded-input-right"
                    type="tel"
                    name="telefono"
                    value={formik.values.telefono}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.telefono && formik.touched.telefono}
                    disabled={!formHabilitado}
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
                  <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                  <Form.Control
                    className="rounded-input-right"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.email && formik.touched.email}
                    disabled={!formHabilitado}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12} sm={12} xs={12}>
              <Button type="submit" className='buttonFormulario btn-light' disabled={!formHabilitado}>
                Ingresar Inscripción
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioTalleres;
