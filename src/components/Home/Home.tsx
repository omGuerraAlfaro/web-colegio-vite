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
import PhotoGallery from '../PhotoGallery/PhotoGallery';

function Home() {
    const compromisos = [
        {
            imgSrc: Inclusividad,
            imgAlt: "AMBIENTE INCLUSIVO",
            caption: "AMBIENTE INCLUSIVO",
            title: "AMBIENTE INCLUSIVO",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#FBAE3C"
        },
        {
            imgSrc: Excelencia,
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#F6884D"
        },
        {
            imgSrc: Docentes,
            imgAlt: "CUERPO DOCENTE CALIFICADO",
            caption: "CUERPO DOCENTE CALIFICADO",
            title: "CUERPO DOCENTE CALIFICADO",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#C0526A"
        },
        {
            imgSrc: Programas,
            imgAlt: "PROGRAMAS EXTRACURRICULARES",
            caption: "PROGRAMAS EXTRACURRICULARES",
            title: "PROGRAMAS EXTRACURRICULARES",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#683A67"
        },
        {
            imgSrc: Programas,
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#18223C"
        },

    ];

    const photosFromDatabase = [
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
        { src: "https://via.placeholder.com/200x100", fecha: "25/04/2012", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur alias quaerat non exercitationem, itaque dignissimos quos repellat voluptas ex? Dolores voluptate, illo libero ipsum voluptas excepturi dicta natus ab?" },
    ];

    return (
        <>
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
                <h3 className="titulo fonty1 mb-4">Nuestro Compromiso</h3>
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
                <PhotoGallery photos={photosFromDatabase} />
            </Container >
        </>
    )
}

export default Home
