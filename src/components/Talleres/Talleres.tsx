import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPersonChalkboard, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Talleres.css';
// import CarouselTalleres from '../Carousel/CarouselTalleres';
import FormularioTalleres from '../Formularios/FormularioTalleres';

function Talleres() {
    return (
        <Container>
            <h3 className="tituloTaller">Talleres 2025</h3>
            <Row className='my-3 d-flex align-items-center'>
                {/* <Col md={6} sm={6} xs={12}>
                    <CarouselTalleres />
                </Col> */}
                <Col md={6} sm={6} xs={12}>
                    <p className='parrafoTalleres'>Dentro de nuestra comunidad, creemos que el aprendizaje va más allá del aula.</p>
                    <p className='parrafoTalleres'>Este año como colegio ampliamos la gama de talleres, entregando más opciones con el fin de fomentar el desarrollo de diversas habilidades en nuestros niños y niñas, y que puedan explorar diferentes áreas para un desarrollo integral.</p>
                    <p className='parrafoTalleres'>A continuación se detallan los talleres con el día que se llevará a cabo y su costo.</p>
                </Col>
            </Row>

            <Row>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Agrupación Músical</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Gerson Olivares</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 5°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Instrumental</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Gerson Olivares</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 5°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Coro</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Gerson Olivares</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 5°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Manualidades</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Karol Sanchez / Claudia Lazcano</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Hall</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-2'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>

                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Danza</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Paula Flores</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Patio Pasto</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-2'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                        <h6 className='cupos'>Mínimo 10 asistentes</h6>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Danza Párvulo</h4>

                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Paula Flores</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Patio Pasto</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 13:15 | 14:15</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                        <h6 className='cupos'>Mínimo 10 asistentes</h6>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Teatro</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Jorge Ramirez</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 6°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-2'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                {/* <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Yoga</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Gina Herrera</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Cancha Colegio</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$10.000(Valor Mensual)</b></p>
                        </div>
                        <h6 className='cupos'>Mínimo 10 asistentes</h6>
                    </div>
                </Col> */}

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Fútbol</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Fernando Marinelli</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> MAS SPORT</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 16:00</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$20.000(Valor Mensual)</b></p>
                        </div>
                        <h6 className='cupos'>Mínimo 10 asistentes</h6>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Defensa Personal</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Mushka Ceballos</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Cancha Colegio</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Viernes | 14:15 | 15:15</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$20.000(Valor Mensual)</b></p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Redes Sociales y Herramientas Digitales</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Jovanna López</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Biblioteca</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-2'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>$10.000(Valor Mensual)</b></p>
                        </div>
                        <h6 className='cupos'>2 clases al mes</h6>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Jugando en Inglés Párvulo</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Romina Reyes</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Biblioteca</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 13:30 | 14:15</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Inglés Primer Ciclo</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Romina Reyes</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 7°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Inglés Segundo Ciclo</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Romina Reyes</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 7°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Simce 8vo Básico (Lenguaje)</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Jorge Ramírez</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 8°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito / Obligatorio</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Simce 8vo Básico (Matemáticas)</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Cristian González</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 8°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito / Obligatorio</b></p>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Simce 4to Básico</h4>
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Maria Olga Bravo</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faLocationDot} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'><b>Ubicación:</b> Sala 4°A</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 15:45</p>
                        </div>
                        <hr className='hrclass' />
                        <div className='d-flex align-items-center my-2'>
                            <FontAwesomeIcon icon={faDollarSign} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-3'><b>Gratuito / Obligatorio</b></p>
                        </div>
                    </div>
                </Col>


                {/* <Container>
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
                </Container> */}
            </Row>

            <h3 className="titulo my-3">Formulario de Inscripción Talleres 2025</h3>
            <Row>
                <Col sm={6} xs={12} className="textSteps">
                    <h4 className="tituloAdmision">Para incorporarse a nuestros talleres 2025, siga los siguientes pasos:</h4>
                    <div className="bodySteps">
                        <h4><strong>Paso 1:</strong> Complete el formulario de inscripción.</h4>
                    </div>
                    <div className="bodySteps">
                        <h4><strong>Paso 2:</strong> Una vez enviado el formulario, la encargada de inscripciones se pondrá en contacto con usted para confirmar el proceso.</h4>
                    </div>
                    <div className="bodySteps">
                        <h4><strong>Paso 3:</strong> Recibirá una notificación de confirmación a través de su correo electrónico.</h4>
                    </div>
                </Col>
                <Col sm={6} xs={12}>
                    <FormularioTalleres />
                </Col>
            </Row>


        </Container>
    );
}

export default Talleres;
