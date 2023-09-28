import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChildren, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import './Talleres.css';
import CarouselTalleres from '../Carousel/CarouselTalleres';

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
                        <h4>Taller de Ingles</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 15:00 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2' />
                            <p className='align-self-center adjust-text'>PREKÍNDER Y KÍNDER</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2' />
                            <p className='align-self-center adjust-text'>Diana Guerrero</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4>Taller de Teatro</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 15:00 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2' />
                            <p className='align-self-center adjust-text'>PREKÍNDER Y KÍNDER</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2' />
                            <p className='align-self-center adjust-text'>Diana Guerrero</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4>Taller de Ajedrez</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 15:00 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2' />
                            <p className='align-self-center adjust-text'>PREKÍNDER Y KÍNDER</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2' />
                            <p className='align-self-center adjust-text'>Diana Guerrero</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4>Taller de Ingles</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 15:00 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2' />
                            <p className='align-self-center adjust-text'>PREKÍNDER Y KÍNDER</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2' />
                            <p className='align-self-center adjust-text'>Diana Guerrero</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4>Taller de Teatro</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 15:00 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2' />
                            <p className='align-self-center adjust-text'>PREKÍNDER Y KÍNDER</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2' />
                            <p className='align-self-center adjust-text'>Diana Guerrero</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <div className="body-card">
                        <h4>Taller de Ajedrez</h4>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' />
                            <p className='align-self-center adjust-text mx-1'>Lunes | 15:00 | 15:45</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faChildren} className='mx-2' />
                            <p className='align-self-center adjust-text'>PREKÍNDER Y KÍNDER</p>
                        </div>
                        <div className='d-flex align-items-center my-1'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='mx-2' />
                            <p className='align-self-center adjust-text'>Diana Guerrero</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Talleres;
