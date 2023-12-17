import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHome, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contacto.css';

const Contacto = () => {
    const lat = "-32.8301184";
    const lng = "-70.605871";


    return (
        <Container>
            <h1 className='titulo'>Contacto</h1>
            <Row>
                <Col md={8} xs={12}>
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://maps.google.com/maps?q=${lat},${lng}&t=&z=19&ie=UTF8&iwloc=&output=embed`}
                        title="Google Maps"
                    ></iframe>
                </Col>
                <Col md={4} xs={12} className='my-3'>
                    <div className="body-card-contacto">
                        <h4 className='titulo-contacto'>Dirección</h4>
                        <div className='d-flex align-items-center my-3'>
                            <FontAwesomeIcon icon={faHome} className='mx-2' size='xl' color='#1c2260' />
                            <p className='align-self-center adjust-text mx-1 txt'>Manuel Rodríguez #1064, Los Andes</p>
                        </div>
                    </div>
                    <div className="body-card-contacto">
                        <h4 className='titulo-contacto'>Horario de Atención</h4>
                        <div className='d-flex align-items-center my-3'>
                            <FontAwesomeIcon icon={faClock} className='mx-2' size='xl' color='#1c2260' />
                            <p className='align-self-center adjust-text mx-1 txt'>Lunes a Viernes | 08:00 | 16:45</p>
                        </div>
                    </div>
                    <div className="body-card-contacto">
                        <h4 className='titulo-contacto'>Correo Electrónico</h4>
                        <div className='d-flex align-items-center my-3'>
                            <FontAwesomeIcon icon={faAt} className='mx-2' size='xl' color='#1c2260' />
                            <p className='align-self-center adjust-text mx-1 txt'>colegioandeschile@gmail.com</p>
                        </div>
                    </div>
                    <div className="body-card-contacto">
                        <h4 className='titulo-contacto'>Teléfono</h4>
                        <div className='d-flex align-items-center my-3'>
                            <FontAwesomeIcon icon={faPhone} className='mx-2' size='xl' color='#1c2260'/>
                            <p className='align-self-center adjust-text mx-1 txt'>+56 2 402858</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacto;
