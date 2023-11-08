// import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CarouselHome from '../Carousel/Carousel'
import Hall from '../../assets/img/fotoHall.png'
import Inclusividad from '../../assets/icon/inclusiv.png'
import Docentes from '../../assets/icon/docente.png'
import Excelencia from '../../assets/icon/excelencia.png'
import Programas from '../../assets/icon/programas.png'
import './Home.css'
import AlertWelcome from '../Alert/AlertWelcome';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

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
                const response = await axios.get('https://api-colegio.onrender.com/noticias');
                const transformedNoticias = response.data.map((noticia: { images: string[]; }) => {
                    noticia.images = noticia.images.map(image => {
                        if (isValidBase64(image)) {
                            return base64ToURL(image);
                        } else {
                            // Si no es una cadena base64 válida, retorna la misma imagen.
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
            imgAlt: "AMBIENTE INCLUSIVO",
            caption: "AMBIENTE INCLUSIVO",
            title: "AMBIENTE INCLUSIVO",
            description: "En Nuestra Comunidad Colegio Andes Chile, cada estudiante es esencial. Nuestro compromiso es que cada miembro se sienta valorado y respetado, creando así un ambiente óptimo para el aprendizaje y crecimiento personal. Ofrecemos oportunidades para explorar, compartir y aprender, asegurando que todos tengan voz y espacio. Nuestra misión es construir juntos un futuro donde la educación sea sinónimo de unidad y respeto y amor. Te invitamos a ser parte de este viaje y a enriquecer nuestra comunidad con tu presencia.",
            color: "#FBAE3C"
        },
        {
            imgSrc: Docentes,
            imgAlt: "CUERPO DOCENTE CALIFICADO",
            caption: "CUERPO DOCENTE CALIFICADO",
            title: "CUERPO DOCENTE CALIFICADO",
            description: "Contamos con un equipo de docentes altamente calificado, comprometidos con la formación integral de nuestros estudiantes. Muchos de nuestros profesores han demostrado una lealtad institucional, siendo pilares fundamentales en nuestra comunidad educativa a lo largo de los años. Nuestro cuerpo docente se somete a formaciones continuas, garantizando así la adopción de las mejores prácticas pedagógicas. Esta combinación de experiencia, dedicación y pasión por la enseñanza asegura que cada estudiante reciba una educación personalizada y de alta calidad.",
            color: "#C0526A"
        },
        {
            imgSrc: Programas,
            imgAlt: "ENSEÑANZA DE INGLÉS",
            caption: "ENSEÑANZA DE INGLÉS",
            title: "ENSEÑANZA DE INGLÉS",
            description: "En la Comunidad Colegio Andes Chile, reconocemos la importancia del inglés como lengua global. Estamos comprometidos con ofrecer una enseñanza de inglés de alta calidad, utilizando metodologías actualizadas y herramientas tecnológicas modernas. Nuestro objetivo es que cada estudiante desarrolle habilidades lingüísticas sólidas y capacidades interlinguales, preparándolos para oportunidades globales y relaciones multilingües.",
            color: "#4A8EAD"
        },
        {
            imgSrc: Programas,
            imgAlt: "PROGRAMAS EXTRACURRICULARES",
            caption: "PROGRAMAS EXTRACURRICULARES",
            title: "PROGRAMAS EXTRACURRICULARES",
            description: "Ofrecemos una amplia variedad de programas extracurriculares diseñados para complementar la formación académica de nuestros estudiantes. Desde actividades deportivas, talleres artísticos, talleres de ciencia y tecnología; nuestros programas buscan desarrollar habilidades, pasiones y talentos en un ambiente de sana convivencia y diversión.",
            color: "#683A67"
        },
        {
            imgSrc: Excelencia,
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento de nuestros profesionales en la unidad técnica pedagogica (UTP) y todos nuestros docentes, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#F6884D"
        },



    ];


    return (
        <>
            <AlertWelcome />
            <CarouselHome />

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
                <h3 className="titulo mb-4">Nuestro Compromiso</h3>
                <Row className="justify-content-center">
                    {compromisos.map((elemento, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <Card style={{ backgroundColor: elemento.color }} className='shadow'>
                                <div className="d-flex justify-content-center mt-3">
                                    <Card.Img className="card-icon" variant="top" src={elemento.imgSrc} alt={elemento.imgAlt} />
                                </div>
                                <Card.Body>
                                    <Card.Title className='text-light titulo-card'>{elemento.title}</Card.Title>
                                    <Card.Text className='text-light parrafo-card'>{elemento.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
            </Container>

            <Container className='my-5'>
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
