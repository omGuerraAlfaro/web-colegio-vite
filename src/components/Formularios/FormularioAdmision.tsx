import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faSchool, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const formSchema = yup.object().shape({
  pupilo: yup.string().required('El nombre del postulante es requerido'),
  apoderado: yup.string().required('El nombre del apoderado es requerido'),
  telefono: yup.string().required('El teléfono es requerido'),
  email: yup.string().email('Debe ser un email válido').required('El email es requerido'),
  colegio: yup.string().required('El colegio de procedencia es requerido'),
  consentimiento: yup.boolean().oneOf([true], 'El consentimiento es requerido'),
  cursoPostula: yup.string().required('El curso al que postula es requerido')
});

const FormularioAdmision = () => {
  const formik = useFormik({
    initialValues: {
      pupilo: '',
      apoderado: '',
      telefono: '',
      email: '',
      colegio: '',
      cursoPostula: '',
      consentimiento: false
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      // Lógica adicional de envío, por ejemplo, llamadas API...
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
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre completo del postulante</Form.Label>
        <Form.Control
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

      <Form.Group>
        <Form.Label>Nombre completo del apoderado</Form.Label>
        <Form.Control
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

      <Form.Group>
        <Form.Label>Curso al que postula</Form.Label>
        <div className="select-wrapper">
          <Form.Control
            as="select"
            name="cursoPostula"
            onChange={formik.handleChange}
            value={formik.values.cursoPostula}
            isInvalid={!!formik.errors.cursoPostula && formik.touched.cursoPostula}
            className="position-relative"
          >
            <option value="" disabled hidden>Seleccionar curso</option> {/* Placeholder option */}
            {cursos.map((curso, index) => (
              <option key={index} value={curso}>
                {curso}
              </option>
            ))}
          </Form.Control>
          <FontAwesomeIcon icon={faSortDown} className="select-icon" />
          <Form.Control.Feedback type="invalid">
            {formik.errors.cursoPostula}
          </Form.Control.Feedback>
        </div>
      </Form.Group>





      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faPhone} />
          </InputGroup.Text>
          <Form.Control
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

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faEnvelope} />
          </InputGroup.Text>
          <Form.Control
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

      <Form.Group>
        <Form.Label>Colegio de procedencia</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSchool} />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Ingrese colegio de procedencia"
            name="colegio"
            value={formik.values.colegio}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.colegio && formik.touched.colegio}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.colegio}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group>
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

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormularioAdmision;
