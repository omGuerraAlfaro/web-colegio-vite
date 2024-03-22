import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChildren, faPersonChalkboard, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Talleres.css';
import CarouselTalleres from '../Carousel/CarouselTalleres';
import FormularioTalleres from '../Formularios/FormularioTalleres';

function Talleres() {
    return (
        <Container>
            <h3 className="tituloTaller">Talleres</h3>
            <Row className='my-3 d-flex align-items-center'>
                <Col md={6} sm={6} xs={12}>
                    <CarouselTalleres />
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <p className='parrafoTalleres'>Dentro de nuestra comunidad, creemos que el aprendizaje va más allá del aula. Los talleres son vitales para brindar experiencias prácticas, fomentando la creatividad y la colaboración. Son oportunidades para que nuestros estudiantes se empoderen y enriquezcan su formación, consolidando nuestro compromiso con una educación integral y significativa.</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Circo y Malabares</h4>
                        <h6 className='cupos'>10 cupos máximo</h6>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Adán Salinas</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                        <hr className='hrclass' />
                        <h6 className='cupos'>10 cupos máximo</h6>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Adán Salinas</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$16.000(Valor Mensual)</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Ingles</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Miss Catalina Molina</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Miss Catalina Molina</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Fútbol Recreativo</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Magdalena Rivera</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Magdalena Rivera</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Instrumental y Expresión Musical</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Anggelo Álvarez</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-2'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Anggelo Álvarez</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$16.000(Valor Mensual)</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Reforzamiento</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Maria Olga Bravo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Fabiola Cabrera</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Ballet</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer y Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Paula Flores</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$16.000(Valor Mensual)</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Manualidades</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer y Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Erika Donoso</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Teatro y Expresión Corporal</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Maria Victoria Lizana</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$16.000(Valor Mensual)</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Voleibol Recreativo</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer y Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Magdalena Rivera</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Danza Recreativa</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer y Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Magdalena Rivera</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Simce 4to Básico</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer y Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Maria Olga Bravo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Defensa Personal</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Viernes | 14:45 | 15:15</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Primer y Segundo Ciclo</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Mushka Ceballos</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$16.000(Valor Mensual)</b></p>
                        </div>
                    </div>
                </Col>
            </Row>

            <h3 className="titulo my-3">Formulario de Inscripción Talleres 2024</h3>
            <Row>
                <Col sm={6} xs={12}>
                    <FormularioTalleres />
                </Col>
                <Col sm={6} xs={12} className="textSteps">
                    <h4 className="tituloAdmision">Para la incorporación a nuestros talleres 2024, debe seguir los siguientes pasos:</h4>
                    <div className="bodySteps">
                        <h4><strong>Paso 1: </strong>Llenar el formulario:</h4>
                    </div>
                    <div className="bodySteps">
                        <h4><strong>Paso 2: </strong>Una vez que haya llenado el formulario, será contactado(a) a la brevedad por la encargada de inscripciones para concretar dicha inscripción.</h4>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}

export default Talleres;
