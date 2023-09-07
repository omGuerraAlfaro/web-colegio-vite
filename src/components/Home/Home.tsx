// import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CarouselHome from '../Carousel/Carousel'
import Hall from '../../assets/img/fotoHall.png'
import './Home.css'

function Home() {
    const compromisos = [
        {
            imgSrc: "https://ssla.cl/wp-content/uploads/2020/11/Excelencia-academica_1_SSLA.png",
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#FBAE3C"
        },
        {
            imgSrc: "https://ssla.cl/wp-content/uploads/2020/11/Excelencia-academica_1_SSLA.png",
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#F6884D"
        },
        {
            imgSrc: "https://ssla.cl/wp-content/uploads/2020/11/Excelencia-academica_1_SSLA.png",
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#C0526A"
        },
        {
            imgSrc: "https://ssla.cl/wp-content/uploads/2020/11/Excelencia-academica_1_SSLA.png",
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#683A67"
        },
        {
            imgSrc: "https://ssla.cl/wp-content/uploads/2020/11/Excelencia-academica_1_SSLA.png",
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#18223C"
        },

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
                        <p className='parrafo'>Aspiramos a ser un pilar fundamental en su proceso de aprendizaje, fortaleciendo su conocimiento, autoestima y habilidades personales para que enfrenten nuevos desafíos con confianza y motivación.</p>
                    </div>
                </div>
            </Container>



            <Container className="mt-5">
                <h3 className="titulo fonty1 mb-4">Nuestro compromiso</h3>
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
        </>
    )
}

export default Home
