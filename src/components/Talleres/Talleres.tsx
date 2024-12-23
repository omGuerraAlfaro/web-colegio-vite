import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChildren, faPersonChalkboard, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Talleres.css';
import CarouselTalleres from '../Carousel/CarouselTalleres';
import FormularioTalleres from '../Formularios/FormularioTalleres';

function Talleres() {
    return (
        <Container>
            <h3 className="tituloTaller">Talleres 2025</h3>
            <Row className='my-3 d-flex align-items-center'>
                <Col md={6} sm={6} xs={12}>
                    <CarouselTalleres />
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <p className='parrafoTalleres'>Dentro de nuestra comunidad, creemos que el aprendizaje va más allá del aula.</p>
                    <p className='parrafoTalleres'>Este año como colegio ampliamos la gama de talleres, entregando más opciones con el fin de fomentar el desarrollo de diversas habilidades en nuestros niños y niñas, y que puedan explorar diferentes áreas para un desarrollo integral.</p>
                    <p className='parrafoTalleres'>A continuación se detallan los talleres con el día que se llevará a cabo y su costo.</p>
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
                            <p className='align-self-center adjust-text mx-3'><b>$16.000(Valor Mensual)</b></p>
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
                            <p className='align-self-center adjust-text'>Primer Ciclo</p>
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
                            <p className='align-self-center adjust-text'>Primer Ciclo</p>
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
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
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
                            <p className='align-self-center adjust-text mx-3'><b>Gratis</b></p>
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
                            <p className='align-self-center adjust-text mx-1'>Viernes | 14:15 | 15:15</p>
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
                <Container>
                    <Col md={12} sm={6} xs={12}>
                        <code className='nota text-center d-none d-md-block'>Nota: Aquellos estudiantes que asistan deberán traer su colación fría para ingerirla a la salida de clases (14:15 hrs).</code>
                        <code className='notaCel text-center d-block d-md-none'>Nota: Aquellos estudiantes que asistan deberán traer su colación fría para ingerirla a la salida de clases (14:15 hrs).</code>
                        <div className='cuadroProfe'>
                            <div className='text-center'>
                                <h3>Taller de Circo</h3>
                                <h3>Luis Adán Salinas Vera</h3>
                                <p>Tecnólogo en deportes y recreación, Magíster en ciencias de la salud y el deporte</p>
                                <p>Especialidad en la Escuela de Artes Circense del Circo del Mundo-Chile. Santiago de Chile</p>
                            </div>
                        </div>
                        <div className='cuadroProfe'>
                            <div className='text-center'>
                                <h3>Taller de Ballet</h3>
                                <h3>Paula Flores Casanova</h3>
                                <p>Danza y Coreografía Uniacc</p>
                                <p>Docente en academia semillitas e interprete compañía de danza Matices</p>
                            </div>
                        </div>
                        <div className='cuadroProfe'>
                            <div className='text-center'>
                                <h3>Taller de Defensa Personal y Artes Marciales</h3>
                                <h3>Mushka Ceballos Arenas</h3>
                                <p>Instructora certificada Cinturón Negro III Dan</p>
                            </div>
                        </div>
                    </Col>
                </Container>
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
