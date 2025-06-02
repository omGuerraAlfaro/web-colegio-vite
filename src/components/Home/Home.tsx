// import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CarouselHome from '../Carousel/Carousel'
import Hall from '../../assets/img/imagenes carrusel/18.png'
import Inclusividad from '../../assets/icon/inclusiv.png'
import Docentes from '../../assets/icon/docente.png'
import Excelencia from '../../assets/icon/excelencia.png'
import Programas from '../../assets/icon/programas.png'
import Libros from '../../assets/icon/Libros.png'
import Taller from '../../assets/icon/taller.png'
import './Home.css'
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import anuario from '../../assets/docs/ANUARIO.pdf';
import AlertWelcome from '../Alert/AlertSimse';
import { Col, Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHome, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';


function base64ToURL(base64: any) {
    const binary = atob(base64);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([array], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
}

function isValidBase64(str: any) {
    try {
        atob(str);
        return true;
    } catch (e) {
        return false;
    }
}

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        async function fetchNoticias() {
            try {
                const response = await axios.get('https://colegio-backend.onrender.com/noticias', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // withCredentials: true 
                });
                const transformedNoticias = response.data.map((noticia: { images: string[]; }) => {
                    noticia.images = noticia.images.map(image => {
                        if (isValidBase64(image)) {
                            return base64ToURL(image);
                        } else {
                            return image;
                        }
                    });
                    return noticia;
                });
                setNoticias(transformedNoticias);
            } catch (error) {
                console.error("Hubo un error cargando las noticias:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchNoticias();
    }, []);

    const lat = "-32.8301184";
    const lng = "-70.605871";

    const compromisos = [
        {
            imgSrc: Inclusividad,
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Como Colegio Andes Chile aspiramos a la excelencia académica entregando  una educación de alta calidad,  buscando constantemente metodologías que se ajusten al curriculum actualizado , planificando y evaluando constantemente, lo que se  expresa cada año en los resultados obtenidos a nivel nacional posicionándonos en el quinto lugar dentro de la Comuna en la evaluación SIMCE.",
            color: "#c12437"
        },
        {
            imgSrc: Docentes,
            imgAlt: "EDUCACIÓN PERSONALIZADA",
            caption: "EDUCACIÓN PERSONALIZADA",
            title: "EDUCACIÓN PERSONALIZADA",
            description: "En nuestro Colegio Andes Chile contamos con una educación personalizada, centrada en las necesidades, intereses y habilidades individuales de cada estudiante, los cursos están compuestos por 25 estudiantes máximo proporcionando una experiencia de aprendizaje realmente  efectiva y significativa, concibiendo al estudiante como agente mismo y principal de su formación.",
            color: "#e58b5b"
        },
        {
            imgSrc: Programas,
            imgAlt: "AMBIENTE FAMILIAR",
            caption: "AMBIENTE FAMILIAR",
            title: "AMBIENTE FAMILIAR",
            description: "En nuestro  Colegio Andes Chile, buscamos recrear la calidez y cercanía que se encuentra en una familia, construyendo relaciones cercanas entre estudiantes, docentes , personal, padres y apoderados , fortaleciendo el apoyo mutuo, el respeto, la comunicación abierta y  oportuna, cultivando  valores como la empatía, responsabilidad y solidaridad.",
            color: "#4A8EAD"
        },
        {
            imgSrc: Libros,
            imgAlt: "CUERPO DOCENTE CALIFICADO",
            caption: "CUERPO DOCENTE CALIFICADO",
            title: "CUERPO DOCENTE CALIFICADO",
            description: "Contamos con un equipo de docentes, comprometidos con la formación integral de nuestros estudiantes, altamente calificados, en constante perfeccionamiento , que cuentan con licenciaturas, pos títulos y/o magíster, que permiten mejorar las prácticas pedagógicas, además de  demostrar su lealtad institucional, siendo pilares fundamentales de nuestra comunidad educativa a lo largo de los años. Esta combinación de experiencia, dedicación y pasión por la enseñanza asegura que cada estudiante reciba una educación personalizada y de calidad.",
            color: "#1B5E20"
        },
        {
            imgSrc: Excelencia,
            imgAlt: "ENSEÑANZA DE INGLÉS",
            caption: "ENSEÑANZA DE INGLÉS",
            title: "ENSEÑANZA DE INGLÉS",
            description: "En nuestro  Colegio Andes Chile, reconocemos la importancia del inglés como lengua global. Estamos comprometidos con ofrecer una enseñanza de inglés de alta calidad, utilizando metodologías actualizadas y herramientas tecnológicas modernas. Nuestro objetivo es que cada estudiante desarrolle habilidades lingüísticas sólidas y capacidades interlinguales, preparándolos para oportunidades globales y relaciones multilingües.",
            color: "#0D47A1"
        },
        {
            imgSrc: Taller,
            imgAlt: "TALLERES EXTRACURRICULARES",
            caption: "TALLERES EXTRACURRICULARES",
            title: "TALLERES EXTRACURRICULARES",
            description: "Ofrecemos una amplia variedad de programas extracurriculares diseñados para complementar la formación académica de nuestros estudiantes. Desde actividades deportivas, como futbol, vóley, defensa personal, talleres artísticos como instrumentos, danza, teatro, manualidades y reforzamientos; Nuestros programas buscan desarrollar habilidades, pasiones y talentos en un ambiente de sana convivencia y diversión.",
            color: "#00796B"
        },



    ];


    return (
        <>
            <AlertWelcome />
            <CarouselHome />


            <Container className="my-5 container-fondo">
                <h3 className="titulo">¡Mira nuestro anuario!</h3>
                <p className="parrafo">Explora los momentos más destacados del año escolar 2024 y revive las actividades, logros y eventos importantes que marcaron a nuestra comunidad educativa.</p>
                <div className='text-center mt-5'>
                    <a
                        href={anuario}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buttonAnimated text-decoration-none"
                    >
                        Ver Anuario 2024
                    </a>
                </div>
            </Container>


            <Container className='my-5' id='noticias'>
                <h3 className="titulo fonty1 mb-4">Galería de Noticias</h3>
                {isLoading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner animation="border" role="status" style={{ marginRight: '10px' }} />
                        Cargando Noticias...
                    </div>

                ) : (
                    <PhotoGallery photos={noticias} />
                )}
            </Container>

            <Container className='my-5'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12">
                        <img src={Hall} alt="Colegio Andes Chile" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-12 school-info">
                        <h4 className='titulo'>Colegio Andes Chile</h4>
                        <p className='parrafo'>Aspiramos a ser un pilar fundamental en su proceso de aprendizaje, fortaleciendo su conocimiento, autoestima y habilidades personales para que enfrenten nuevos desafíos con motivación y confianza.</p>
                    </div>
                </div>
            </Container>

            <Container className="mt-5">
                <h3 className="titulo mb-3">Nuestro Compromiso</h3>
                {/* Pestañas que envuelven y permiten wrap en móvil, no wrap en md+ */}
                <Tabs
                    defaultActiveKey={compromisos[0].caption}
                    id="compromisos-tabs"
                    className="mb-4 nav-pills d-flex flex-wrap flex-md-nowrap justify-content-start"
                    variant="pills"
                >
                    {compromisos.map(({ imgSrc, caption, title, description, color }) => (
                        <Tab eventKey={caption} title={caption} key={caption}>
                            <div
                                className="d-flex flex-column flex-md-row align-items-center p-3"
                                style={{ backgroundColor: color, borderRadius: '8px' }}
                            >
                                <img src={imgSrc} alt={title} style={{ width: '64px', marginBottom: '1rem', marginRight: '1rem' }} />
                                <div>
                                    <h5 className="text-light mb-2">{title}</h5>
                                    <p className="text-light mb-0">{description}</p>
                                </div>
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </Container>



            <Container className='my-5'>
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
                                <FontAwesomeIcon icon={faPhone} className='mx-2' size='xl' color='#1c2260' />
                                <p className='align-self-center adjust-text mx-1 txt'>34 2 402858</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
