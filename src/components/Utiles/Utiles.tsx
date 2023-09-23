import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Utiles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';



function Utiles() {
    const cursos1 = [
        { curso: 'Pre-Kinder', pdfUrl: '/src/assets/docs/utiles/prekinder.pdf' },
        { curso: 'Kinder', pdfUrl: '/src/assets/docs/utiles/kinder.pdf' }
    ];
    const cursos2 = [
        { curso: '1° Básico', pdfUrl: '/src/assets/docs/utiles/1.pdf' },
        { curso: '2° Básico', pdfUrl: '/src/assets/docs/utiles/2.pdf' },
        { curso: '3° Básico', pdfUrl: '/src/assets/docs/utiles/3.pdf' },
        { curso: '4° Básico', pdfUrl: '/src/assets/docs/utiles/4.pdf' },
        { curso: '5° Básico', pdfUrl: '/src/assets/docs/utiles/5.pdf' },
        { curso: '6° Básico', pdfUrl: '/src/assets/docs/utiles/6.pdf' },
        { curso: '7° Básico', pdfUrl: '/src/assets/docs/utiles/7.pdf' },
        { curso: '8° Básico', pdfUrl: '/src/assets/docs/utiles/8.pdf' },
    ];

    return (
        <>
            <Container>
                <h1 className='tituloUtiles'>Lista de Útiles Año 2023</h1>
                <Row>
                    <h1 className='tituloCursos'>Nivel Pre-Escolar</h1>
                    {cursos1.map((curso, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <Card className="myCard">
                                <Card.Body className="text-center">
                                    <Card.Title className='tituloCards'>{curso.curso}</Card.Title>
                                    <a href={curso.pdfUrl} download rel="noopener noreferrer">
                                        <button className="buttonPDF">
                                            <span>Descargar PDF</span>
                                            <FontAwesomeIcon icon={faDownload} className="mx-1" />
                                        </button>
                                    </a>
                                    <a href={curso.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="buttonPDF">
                                            <span>Ver PDF</span>
                                            <FontAwesomeIcon icon={faFilePdf} className="mx-1" />
                                        </button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <h1 className='tituloCursos'>Nivel Básico</h1>
                    {cursos2.map((curso, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <Card className="myCard">
                                <Card.Body className="text-center">
                                    <Card.Title className='tituloCards'>{curso.curso}</Card.Title>
                                    <a href={curso.pdfUrl} download rel="noopener noreferrer">
                                        <button className="buttonPDF">
                                            <span>Descargar PDF</span>
                                            <FontAwesomeIcon icon={faDownload} className="mx-1" />
                                        </button>
                                    </a>
                                    <a href={curso.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="buttonPDF">
                                            <span>Ver PDF</span>
                                            <FontAwesomeIcon icon={faFilePdf} className="mx-1" />
                                        </button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Utiles;
