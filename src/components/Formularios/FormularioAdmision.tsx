// src/components/FormularioAdmision.tsx
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSchool,
  faMapMarkerAlt,
  faUser,
  faIdCard,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import "./Formulario.css";

//
// 1) Definimos el esquema de validación con exactamente la misma forma que el DTO de NestJS.
//
const formSchema = yup.object().shape({
  // ----- Información del Apoderado -----
  apoderado: yup.string().required("El nombre del apoderado es requerido"),
  rut: yup
    .string()
    .matches(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/, "Debe ser un RUT válido (ej: 12.345.678-5)")
    .required("El RUT es requerido"),
  direccion: yup.string().required("La dirección es requerida"),
  comuna: yup.string().required("La comuna es requerida"),
  telefono: yup.string().required("El teléfono es requerido"),
  email: yup.string().email("Debe ser un email válido").required("El email es requerido"),

  // ----- Información del Estudiante -----
  pupilo: yup.string().required("El nombre del estudiante es requerido"),
  edad: yup
    .number()
    .typeError("La edad debe ser un número")
    .min(3, "Mínimo 3 años")
    .max(25, "Máximo 25 años")
    .required("La edad es requerida"),
  cursoPostula: yup.string().required("El curso al que postula es requerido"),
  colegioOrigen: yup.string().required("El establecimiento de origen es requerido"),

  // ----- Motivos del Cambio (anidado) -----
  motivosCambio: yup
    .object()
    .shape({
      proyecto: yup.boolean().required(),
      disciplina: yup.boolean().required(),
      academicas: yup.boolean().required(),
      domicilio: yup.boolean().required(),
      otro: yup.boolean().required(),
      otroText: yup.string().when("otro", {
        is: true,
        then: (schema) => schema.required("Debe especificar el otro motivo"),
        otherwise: (schema) => schema.optional(),
      }),
    })
    .required("motivosCambio es obligatorio"),

  // ----- Expectativas (anidado) -----
  expectativas: yup
    .object()
    .shape({
      academica: yup.boolean().required(),
      valores: yup.boolean().required(),
      socioemocional: yup.boolean().required(),
      talentos: yup.boolean().required(),
      otroExp: yup.boolean().required(),
      otroExpText: yup.string().when("otroExp", {
        is: true,
        then: (schema) => schema.required("Debe especificar otra expectativa"),
        otherwise: (schema) => schema.optional(),
      }),
    })
    .required("expectativas es obligatorio"),

  // ----- Comentarios (opcional) -----
  comentarios: yup.string().optional(),

  // ----- Declaración y autorización -----
  consentimiento: yup
    .boolean()
    .oneOf([true], "Debe aceptar la declaración y autorización")
    .required("Debes aceptar la declaración")
});

const FormularioAdmision: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      // --- Apoderado ---
      apoderado: "",
      rut: "",
      direccion: "",
      comuna: "",
      telefono: "",
      email: "",

      // --- Estudiante ---
      pupilo: "",
      edad: "",          // Lo convertimos a number con TypeScript/Number en el DTO
      cursoPostula: "",
      colegioOrigen: "",

      // --- MotivosCambio (anidado) ---
      motivosCambio: {
        proyecto: false,
        disciplina: false,
        academicas: false,
        domicilio: false,
        otro: false,
        otroText: "",
      },

      // --- Expectativas (anidado) ---
      expectativas: {
        academica: false,
        valores: false,
        socioemocional: false,
        talentos: false,
        otroExp: false,
        otroExpText: "",
      },

      // --- Comentarios ---
      comentarios: "",

      // --- Consentimiento ---
      consentimiento: false,
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        console.log("Payload a enviar:", values);
        await axios.post("https://colegio-backend.onrender.com/correo/enviar-postulacion", values, {
          headers: { "Content-Type": "application/json" },
        });
        Swal.fire({
          title: "¡Gracias!",
          text: "Su formulario de postulación ha sido enviado.",
          icon: "success",
          confirmButtonText: "Entendido",
          timer: 5000,
          timerProgressBar: true,
        }).then(() => formik.resetForm());
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        Swal.fire({
          title: "¡Lo sentimos! :(",
          text: "Hubo un problema en el servidor. Por favor inténtelo más tarde.",
          icon: "error",
          confirmButtonText: "Entendido",
          timer: 8000,
          timerProgressBar: true,
        });
      }
    },
  });

  // Para monitorear en consola los errores de validación si los hubiera:
  React.useEffect(() => {
    console.log("Errores de validación:", formik.errors);
  }, [formik.errors]);

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
    "Octavo",
  ];

  return (
    <Card
      style={{
        backgroundColor: "#218be1",
        borderRadius: "15px",
        padding: "20px",
        color: "#ffffff",
      }}
      className="shadow"
    >
      <Card.Title as="h4">Formulario de Postulación</Card.Title>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          {/* =========================
               Información del Apoderado
              ============================ */}
          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="apoderado">
              <Form.Label>
                <small>
                  <strong>Nombre completo del apoderado</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre completo"
                  name="apoderado"
                  value={formik.values.apoderado}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.apoderado && !!formik.errors.apoderado}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.apoderado}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="rut">
              <Form.Label>
                <small>
                  <strong>RUT</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faIdCard} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ej: 12.345.678-5"
                  name="rut"
                  value={formik.values.rut}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.rut && !!formik.errors.rut}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.rut}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="direccion">
              <Form.Label>
                <small>
                  <strong>Dirección</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingrese dirección"
                  name="direccion"
                  value={formik.values.direccion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.direccion && !!formik.errors.direccion}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.direccion}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="comuna">
              <Form.Label>
                <small>
                  <strong>Comuna</strong>
                </small>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese comuna"
                name="comuna"
                value={formik.values.comuna}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.touched.comuna && !!formik.errors.comuna}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.comuna}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="telefono">
              <Form.Label>
                <small>
                  <strong>Teléfono de contacto</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faPhone} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Ingrese teléfono"
                  name="telefono"
                  value={formik.values.telefono}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.telefono && !!formik.errors.telefono}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.telefono}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="email">
              <Form.Label>
                <small>
                  <strong>Correo electrónico</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Ingrese email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.email && !!formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <hr />

          {/* =========================
               Información del Estudiante
              ============================ */}
          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="pupilo">
              <Form.Label>
                <small>
                  <strong>Nombre completo del estudiante</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre completo"
                  name="pupilo"
                  value={formik.values.pupilo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.pupilo && !!formik.errors.pupilo}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pupilo}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="edad">
              <Form.Label>
                <small>
                  <strong>Edad</strong>
                </small>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 10"
                name="edad"
                value={formik.values.edad}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.touched.edad && !!formik.errors.edad}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.edad}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} controlId="cursoPostula">
              <Form.Label>
                <small>
                  <strong>Curso al que postula</strong>
                </small>
              </Form.Label>
              <Form.Control
                as="select"
                name="cursoPostula"
                value={formik.values.cursoPostula}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.touched.cursoPostula && !!formik.errors.cursoPostula}
              >
                <option value="" disabled hidden>
                  Seleccionar curso
                </option>
                {cursos.map((curso, idx) => (
                  <option key={idx} value={curso}>
                    {curso}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formik.errors.cursoPostula}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={12} controlId="colegioOrigen">
              <Form.Label>
                <small>
                  <strong>Establecimiento de origen</strong>
                </small>
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSchool} style={{ color: "#176ed2" }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingrese colegio o jardín de procedencia"
                  name="colegioOrigen"
                  value={formik.values.colegioOrigen}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.touched.colegioOrigen && !!formik.errors.colegioOrigen}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.colegioOrigen}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <hr />

          {/* ====================================
              Motivos del Cambio de Colegio (objeto)
              ===================================== */}
          <Form.Group className="mb-3">
            <Form.Label>
              <small>
                <strong>¿Por qué desea cambiar a su hijo/a de colegio?</strong>
              </small>
            </Form.Label>
            <Form.Label>
              <small>
                <strong>(Puede marcar más de una opción)</strong>
              </small>
            </Form.Label>
            <div className="ms-3">
              <Form.Check
                type="checkbox"
                label="Busco un proyecto educativo más acorde a nuestras necesidades"
                name="motivosCambio.proyecto"
                checked={formik.values.motivosCambio.proyecto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.motivosCambio?.proyecto &&
                  !!formik.errors.motivosCambio?.proyecto
                }
              />

              <Form.Check
                type="checkbox"
                label="Ha tenido dificultades de disciplina o comportamiento"
                name="motivosCambio.disciplina"
                checked={formik.values.motivosCambio.disciplina}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.motivosCambio?.disciplina &&
                  !!formik.errors.motivosCambio?.disciplina
                }
              />

              <Form.Check
                type="checkbox"
                label="Ha presentado dificultades académicas"
                name="motivosCambio.academicas"
                checked={formik.values.motivosCambio.academicas}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.motivosCambio?.academicas &&
                  !!formik.errors.motivosCambio?.academicas
                }
              />

              <Form.Check
                type="checkbox"
                label="Cambio de domicilio"
                name="motivosCambio.domicilio"
                checked={formik.values.motivosCambio.domicilio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.motivosCambio?.domicilio &&
                  !!formik.errors.motivosCambio?.domicilio
                }
              />

              <Form.Check
                type="checkbox"
                label="Otro motivo"
                name="motivosCambio.otro"
                checked={formik.values.motivosCambio.otro}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.touched.motivosCambio?.otro && !!formik.errors.motivosCambio?.otro}
              />

              {formik.values.motivosCambio.otro && (
                <Form.Control
                  type="text"
                  placeholder="Especifique otro motivo"
                  className="mt-2"
                  name="motivosCambio.otroText"
                  value={formik.values.motivosCambio.otroText}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    !!formik.touched.motivosCambio?.otroText &&
                    !!formik.errors.motivosCambio?.otroText
                  }
                />
              )}
              <Form.Control.Feedback type="invalid">
                {formik.errors.motivosCambio?.otroText}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <hr />

          {/* ==============================================
             Expectativas del Proyecto Educativo (objeto)
              =============================================== */}
          <Form.Group className="mb-3">
            <Form.Label>
              <small>
                <strong>
                  ¿Qué espera encontrar en el Colegio Andes Chile para su hijo/a?
                </strong>
              </small>
            </Form.Label>
            <Form.Label>
              <small>
                <strong>(Puede marcar más de una opción)</strong>
              </small>
            </Form.Label>
            <div className="ms-3">
              <Form.Check
                type="checkbox"
                label="Formación académica de calidad"
                name="expectativas.academica"
                checked={formik.values.expectativas.academica}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.expectativas?.academica &&
                  !!formik.errors.expectativas?.academica
                }
              />

              <Form.Check
                type="checkbox"
                label="Educación basada en valores y principios"
                name="expectativas.valores"
                checked={formik.values.expectativas.valores}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.expectativas?.valores &&
                  !!formik.errors.expectativas?.valores
                }
              />

              <Form.Check
                type="checkbox"
                label="Desarrollo socioemocional y habilidades blandas"
                name="expectativas.socioemocional"
                checked={formik.values.expectativas.socioemocional}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.expectativas?.socioemocional &&
                  !!formik.errors.expectativas?.socioemocional
                }
              />

              <Form.Check
                type="checkbox"
                label="Espacios para potenciar talentos e intereses"
                name="expectativas.talentos"
                checked={formik.values.expectativas.talentos}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.expectativas?.talentos &&
                  !!formik.errors.expectativas?.talentos
                }
              />

              <Form.Check
                type="checkbox"
                label="Otro"
                name="expectativas.otroExp"
                checked={formik.values.expectativas.otroExp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  !!formik.touched.expectativas?.otroExp &&
                  !!formik.errors.expectativas?.otroExp
                }
              />

              {formik.values.expectativas.otroExp && (
                <Form.Control
                  type="text"
                  placeholder="Especifique otra expectativa"
                  className="mt-2"
                  name="expectativas.otroExpText"
                  value={formik.values.expectativas.otroExpText}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    !!formik.touched.expectativas?.otroExpText &&
                    !!formik.errors.expectativas?.otroExpText
                  }
                />
              )}
              <Form.Control.Feedback type="invalid">
                {formik.errors.expectativas?.otroExpText}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <hr />

          {/* ===========================
               Comentarios Adicionales
              ============================ */}
          <Form.Group className="mb-3" controlId="comentarios">
            <Form.Label>
              <small>
                <strong>Comentarios adicionales</strong>
              </small>
            </Form.Label>
            <Form.Label>
              <small>
                <strong>
                  ¿Hay algún otro aspecto que desee compartir respecto a esta postulación?
                </strong>
              </small>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faCommentDots} style={{ color: "#176ed2" }} />
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escriba aquí cualquier comentario adicional..."
                name="comentarios"
                value={formik.values.comentarios}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </InputGroup>
          </Form.Group>

          <hr />

          {/* ================================
              Declaración y Autorización
              ================================= */}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label={
                <>
                  He leído y acepto las políticas del Colegio Andes Chile y autorizo al colegio a
                  verificar la información proporcionada.
                </>
              }
              name="consentimiento"
              checked={formik.values.consentimiento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={!!formik.touched.consentimiento && !!formik.errors.consentimiento}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.consentimiento}
            </Form.Control.Feedback>
          </Form.Group>

          <hr />

          <div className="text-center mt-4">
            <Button type="submit" className="buttonFormulario btn-light">
              Enviar formulario de postulación
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioAdmision;
