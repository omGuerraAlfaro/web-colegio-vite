import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import axios from 'axios';
import "./Formulario.css"

const validarRutChileno = (rut: any) => {
  if (!rut) return false;
  const rutClean = rut.replace(/[^\dkK]/g, '');
  const cuerpo = rutClean.slice(0, -1);
  const dv = rutClean.slice(-1).toUpperCase();

  if (cuerpo.length < 7 || cuerpo.length > 8) return false;

  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += multiplicador * parseInt(cuerpo[i]);
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const dvEsperado = 11 - (suma % 11);
  if (dvEsperado === 11 && dv === '0') return true;
  if (dvEsperado === 10 && dv === 'K') return true;
  if (dvEsperado === parseInt(dv)) return true;

  return false;
};

const formSchema = yup.object().shape({
  primer_nombre_alumno: yup.string().required('El nombre es requerido'),
  segundo_nombre_alumno: yup.string().required('El nombre es requerido'),
  primer_apellido_alumno: yup.string().required('El apellido es requerido'),
  segundo_apellido_alumno: yup.string().required('El apellido es requerido'),
  rut_alumno: yup.string()
    .required('El rut es requerido')
    .test('isValidRUT', 'El RUT no es válido', (value) => validarRutChileno(value)),
  fecha_nacimiento_alumno: yup.date()
    .required('La fecha de nacimiento es requerida')
    .typeError('Debe ser una fecha válida'),
  curso_alumno: yup.string().required('El curso es requerido'),
  genero_alumno: yup.string().required('El género es requerido'),
  primer_nombre_apoderado: yup.string().required('El nombre es requerido'),
  segundo_nombre_apoderado: yup.string().required('El nombre es requerido'),
  primer_apellido_apoderado: yup.string().required('El apellido es requerido'),
  segundo_apellido_apoderado: yup.string().required('El apellido es requerido'),
  rut_apoderado: yup.string()
    .required('El rut es requerido')
    .test('isValidRUT', 'El RUT no es válido', (value) => validarRutChileno(value)),
  telefono_apoderado: yup.string()
    .required('El teléfono es requerido')
    .matches(/^[0-9]+$/, 'El teléfono solo debe contener números')
    .min(9, 'El teléfono debe tener al menos 9 dígitos')
    .max(9, 'El teléfono no puede exceder los 9 dígitos'),
  correo_apoderado: yup.string().email('Debe ser un email válido').required('El email es requerido'),
  confirmar_correo_apoderado: yup.string()
    .oneOf([yup.ref('correo_apoderado'), undefined], 'Los correos no coinciden')
    .required('La confirmación del correo es requerida'),
  parentesco_apoderado: yup.string().required('El parentesco es requerido'),
  estado_civil: yup.string().required('El estado civil es requerido'),
  profesion_oficio: yup.string().required('La profesión u oficio es requerida'),
  direccion: yup.string().required('La dirección es requerida'),
  comuna: yup.string().required('La comuna es requerida'),
});


const FormularioMatricula = () => {
  const formik = useFormik({
    initialValues: {
      primer_nombre_alumno: '',
      segundo_nombre_alumno: '',
      primer_apellido_alumno: '',
      segundo_apellido_alumno: '',
      rut_alumno: '',
      fecha_nacimiento_alumno: '',
      curso_alumno: '',
      genero_alumno: '',
      primer_nombre_apoderado: '',
      segundo_nombre_apoderado: '',
      primer_apellido_apoderado: '',
      segundo_apellido_apoderado: '',
      rut_apoderado: '',
      telefono_apoderado: '',
      correo_apoderado: '',
      confirmar_correo_apoderado: '',
      parentesco_apoderado: '',
      estado_civil: '',
      profesion_oficio: '',
      direccion: '',
      comuna: ''
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const { confirmar_correo_apoderado, ...datosParaEnviar } = values;
      try {
        await enviarDatos(datosParaEnviar);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  });

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
  const generos = [
    "Femenino",
    "Masculino",
  ];
  const parents = [
    "Madre",
    "Padre",
    "Abuela",
    "Abuelo",
    "Otro",
  ];
  const comuna = [
    "Los Andes",
    "San Esteban",
    "Calle Larga",
    "Rinconada",
    "San Felipe",
  ];
  const civil = [
    "Soltero/a",
    "Casado/a",
    "Viudo/a",
    "Separado/a"
  ];

  const enviarDatos = async (data: any) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      // const response = await axios.post('https://api-colegio.onrender.com/inscripcion-matricula', data, { headers: headers });
      const response = await axios.post('http://localhost:3200/inscripcion-matricula', data, { headers: headers });
      console.log(response.data);
      const idUnico = response.data?.id_inscripcion;
      console.log(idUnico);

      Swal.fire({
        title: '¡Gracias!',
        html: `
          <p>Su formulario de inscripción ha sido enviado con éxito.</p>
          <div style="margin-top: 20px; font-size: 22px; font-weight: bold; text-align: center; color: #007bff;">
            ${idUnico}
          </div>
          <p style="margin-top: 20px;">
            <strong>Importante:</strong>
            <ul style="text-align: left; margin-top: 10px;">
              <li>Guarde este identificador, ya que deberá presentarlo el día de las matrículas (primera semana de diciembre).</li>
              <li>El identificador y toda la información necesaria también se enviarán al correo electrónico que ingresó en el formulario.</li>
              <li>Si no recibe el correo, por favor revise su bandeja de spam o correo no deseado.</li>
            </ul>
          </p>`,
        icon: 'success',
        confirmButtonText: 'Entendido',
      }).then(() => {
        formik.resetForm();
      });
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Swal.fire({
        title: '¡Lo Sentimos :( !',
        text: 'Tenemos problemas con nuestros servicios, por favor intente más tarde. Si el problema persiste, contacte al colegio a través de nuestro Whatsapp.',
        icon: 'error',
        confirmButtonText: 'Entendido',
        timer: 8000,
        timerProgressBar: true,
      }).then(() => {
        formik.resetForm();
      });
    }
  };


  return (
    <Card style={{ backgroundColor: '#f5f5f5', borderRadius: '15px', padding: '20px' }} className='shadow'>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>

          <h3 className='tituloAdmision2'>Datos Alumno</h3>
          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Primer nombre alumno</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese primer nombre"
                    name="primer_nombre_alumno"
                    value={formik.values.primer_nombre_alumno}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.primer_nombre_alumno && formik.touched.primer_nombre_alumno}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.primer_nombre_alumno}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Segundo nombre alumno</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese segundo nombre"
                    name="segundo_nombre_alumno"
                    value={formik.values.segundo_nombre_alumno}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.segundo_nombre_alumno && formik.touched.segundo_nombre_alumno}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.segundo_nombre_alumno}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Primer apellido alumno</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese primer apellido"
                    name="primer_apellido_alumno"
                    value={formik.values.primer_apellido_alumno}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.primer_apellido_alumno && formik.touched.primer_apellido_alumno}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.primer_apellido_alumno}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Segundo apellido alumno</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese segundo apellido"
                    name="segundo_apellido_alumno"
                    value={formik.values.segundo_apellido_alumno}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.segundo_apellido_alumno && formik.touched.segundo_apellido_alumno}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.segundo_apellido_alumno}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Rut</strong></small></Form.Label>
                <Form.Control
                  className="rounded-input"
                  type="text"
                  placeholder="Ejemplo: 9999999-9"
                  name="rut_alumno"
                  value={formik.values.rut_alumno}
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.rut_alumno && formik.touched.rut_alumno}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.rut_alumno}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label>
                  <small><strong>Fecha de Nacimiento</strong></small>
                </Form.Label>
                <Form.Control
                  className="rounded-input"
                  type="date"  // Aquí utilizas un selector de fecha
                  name="fecha_nacimiento_alumno"
                  value={formik.values.fecha_nacimiento_alumno}
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.fecha_nacimiento_alumno && formik.touched.fecha_nacimiento_alumno}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.fecha_nacimiento_alumno}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Curso</strong></small></Form.Label>
            <div className="select-wrapper">
              <Form.Select
                className="rounded-input"
                as="select"
                name="curso_alumno"
                onChange={formik.handleChange}
                value={formik.values.curso_alumno}
                isInvalid={!!formik.errors.curso_alumno && formik.touched.curso_alumno}
              >
                <option value="" disabled hidden>Seleccionar curso</option>
                {cursos.map((curso, index) => (
                  <option key={index} value={index+1}>
                    {curso}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.curso_alumno}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="margenLabel">
            <Form.Label><small><strong>Género</strong></small></Form.Label>
            <div className="select-wrapper">
              <Form.Select
                className="rounded-input"
                as="select"
                name="genero_alumno"
                onChange={formik.handleChange}
                value={formik.values.genero_alumno}
                isInvalid={!!formik.errors.genero_alumno && formik.touched.genero_alumno}
              >
                <option value="" disabled hidden>Seleccionar género</option>
                {generos.map((genero, index) => (
                  <option key={index} value={genero}>
                    {genero}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.genero_alumno}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <hr />

          <h3 className='tituloAdmision2'>Datos Apoderado Tutor</h3>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Primer nombre apoderado</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese primer nombre"
                    name="primer_nombre_apoderado"
                    value={formik.values.primer_nombre_apoderado}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.primer_nombre_apoderado && formik.touched.primer_nombre_apoderado}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.primer_nombre_apoderado}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Segundo nombre apoderado</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese segundo nombre"
                    name="segundo_nombre_apoderado"
                    value={formik.values.segundo_nombre_apoderado}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.segundo_nombre_apoderado && formik.touched.segundo_nombre_apoderado}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.segundo_nombre_apoderado}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Primer apellido apoderado</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese primer apellido"
                    name="primer_apellido_apoderado"
                    value={formik.values.primer_apellido_apoderado}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.primer_apellido_apoderado && formik.touched.primer_apellido_apoderado}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.primer_apellido_apoderado}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Segundo apellido apoderado</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese segundo apellido"
                    name="segundo_apellido_apoderado"
                    value={formik.values.segundo_apellido_apoderado}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.segundo_apellido_apoderado && formik.touched.segundo_apellido_apoderado}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.segundo_apellido_apoderado}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label><small><strong>Rut</strong></small></Form.Label>
            <Form.Control
              className="rounded-input"
              type="text"
              placeholder="Ingrese rut apoderado - ejemplo: 9999999-9"
              name="rut_apoderado"
              value={formik.values.rut_apoderado}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.rut_apoderado && formik.touched.rut_apoderado}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.rut_apoderado}
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
                    name="telefono_apoderado"
                    value={formik.values.telefono_apoderado}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.telefono_apoderado && formik.touched.telefono_apoderado}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.telefono_apoderado}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group className="">
                <Form.Label><small><strong>Parentesco con alumno</strong></small></Form.Label>
                <div className="select-wrapper">
                  <Form.Select
                    className="rounded-input"
                    as="select"
                    name="parentesco_apoderado"
                    onChange={formik.handleChange}
                    value={formik.values.parentesco_apoderado}
                    isInvalid={!!formik.errors.parentesco_apoderado && formik.touched.parentesco_apoderado}
                  >
                    <option value="" disabled hidden>Seleccionar parentesco</option>
                    {parents.map((parent, index) => (
                      <option key={index} value={parent}>
                        {parent}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.parentesco_apoderado}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group className="">
                <Form.Label><small><strong>Estado Civil</strong></small></Form.Label>
                <div className="select-wrapper">
                  <Form.Select
                    className="rounded-input"
                    as="select"
                    name="estado_civil"
                    onChange={formik.handleChange}
                    value={formik.values.estado_civil}
                    isInvalid={!!formik.errors.estado_civil && formik.touched.estado_civil}
                  >
                    <option value="" disabled hidden>Seleccionar estado civil</option>
                    {civil.map((parent, index) => (
                      <option key={index} value={parent}>
                        {parent}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.estado_civil}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Profesión u Oficio</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese profesión u oficio"
                    name="profesion_oficio"
                    value={formik.values.profesion_oficio}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.profesion_oficio && formik.touched.profesion_oficio}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.profesion_oficio}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="margenLabel">
            <Col md={6} xs={12}>
              <Form.Group>
                <Form.Label><small><strong>Dirección</strong></small></Form.Label>
                <InputGroup>
                  <Form.Control
                    className="rounded-input"
                    type="text"
                    placeholder="Ingrese dirección"
                    name="direccion"
                    value={formik.values.direccion}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.direccion && formik.touched.direccion}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.direccion}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group className="">
                <Form.Label><small><strong>Comuna</strong></small></Form.Label>
                <div className="select-wrapper">
                  <Form.Select
                    className="rounded-input"
                    as="select"
                    name="comuna"
                    onChange={formik.handleChange}
                    value={formik.values.comuna}
                    isInvalid={!!formik.errors.comuna && formik.touched.comuna}
                  >
                    <option value="" disabled hidden>Seleccionar comuna</option>
                    {comuna.map((parent, index) => (
                      <option key={index} value={parent}>
                        {parent}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.comuna}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

          </Row>

          <Form.Group>
            <Form.Label><small><strong>Correo</strong></small></Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                className="rounded-input-right"
                type="email"
                placeholder="Ingrese correo"
                name="correo_apoderado"
                value={formik.values.correo_apoderado}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.correo_apoderado && formik.touched.correo_apoderado}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.correo_apoderado}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label><small><strong>Confirmar Correo</strong></small></Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                className="rounded-input-right"
                type="email"
                placeholder="Confirmar correo ingresado"
                name="confirmar_correo_apoderado"
                value={formik.values.confirmar_correo_apoderado}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.confirmar_correo_apoderado && formik.touched.confirmar_correo_apoderado}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmar_correo_apoderado}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>


          <Row>
            <Col md={12} sm={12} xs={12}>
              <Button type="submit" className='buttonFormulario btn-light'>Enviar Datos y Obtener Codigo de Inscripción</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card >
  );
};

export default FormularioMatricula;
