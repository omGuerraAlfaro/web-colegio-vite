import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const FormularioAdmision = () => {
  const [formData, setFormData] = useState({
    pupilo: "",
    apoderado: "",
    telefono: "",
    email: "",
    colegio: "",
    consentimiento: false,
    captchaValue: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      consentimiento: e.target.checked,
    }));
  };

  const getRecaptchaKeys = async () => {
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

    // ... resto de la lógica de handleClick ...
  };

  return (
    <Form onSubmit={handleClick}>
      <Form.Group>
        <Form.Label>Nombre completo del postulante</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre completo del postulante"
          name="pupilo"
          value={formData.pupilo}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Nombre completo del apoderado</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre completo del apoderado"
          name="apoderado"
          value={formData.apoderado}
          onChange={handleChange}
          required
        />
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
            value={formData.telefono}
            onChange={handleChange}
            required
          />
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
            value={formData.email}
            onChange={handleChange}
            required
          />
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
            value={formData.colegio}
            onChange={handleChange}
            required
          />
        </InputGroup>
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Doy mi consentimiento para el manejo de mis datos."
          name="consentimiento"
          checked={formData.consentimiento}
          onChange={handleCheckbox}
          required
        />
      </Form.Group>

      <Button onClick={handleClick}>Enviar</Button>
    </Form>
  );
};

export default FormularioAdmision;
