import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChildren, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
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
                        <h4 className='titulo-taller'>Taller de Ingles</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>5° Y 6° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Miss Paula Muñoz</p>
                        </div>
                        <hr className='hrclass'/>
                        <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>7° Y 8° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Miss Paula Muñoz</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Fútbol Mixto</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Miércoles | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>1° Y 5° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Juan Francisco Palacios</p>
                        </div>
                        <hr className='hrclass'/>
                        <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>6° Y 8° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Juan Francisco Palacios</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller Handball Mixto</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Martes | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>3° a 8° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Javiera Muñoz</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Mecanotecnia</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>5° a 6° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Erick Jegó</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Instrumentos</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>1° a 8° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Miguel Ángel Gomez</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4 className='titulo-taller'>Taller de Coro</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text mx-1'>Jueves | 14:45 | 16:00</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>3° a 8° BÁSICO</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2 awesome' />
                            <p className='align-self-center adjust-text'>Anggelo Álvarez</p>
                        </div>
                    </div>
                </Col>   
                <FormularioTalleres />             
            </Row>
        </Container>
    );
}

export default Talleres;
