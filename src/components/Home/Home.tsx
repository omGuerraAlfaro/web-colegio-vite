// import { useState } from 'react'
import Card from 'react-bootstrap/Card';
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
import AlertWelcome from '../Alert/AlertWelcome';

import anuario from '../../assets/docs/ANUARIO.pdf';


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
                <h3 className="titulo">¡Ve nuestro anuario!</h3>
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


            {/* /Users/omarguerra/Documents/GitHub/web-colegio-vite/src/assets/docs/Anuario.pdf */}

            <Container className="mt-5">
                <h3 className="titulo mb-4">Nuestro Compromiso</h3>
                <Row className="justify-content-center">
                    {compromisos.map((elemento, index) => (
                        <div className="col-md-4 mb-4 d-flex" key={index}>
                            <Card style={{ backgroundColor: elemento.color }} className="shadow h-100 w-100 d-flex flex-column">
                                <div className="d-flex justify-content-center mt-3">
                                    <Card.Img className="card-icon" variant="top" src={elemento.imgSrc} alt={elemento.imgAlt} />
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-light titulo-card">{elemento.title}</Card.Title>
                                    <Card.Text className="text-light parrafo-card flex-grow-1">{elemento.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
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
        </>
    )
}

export default Home
