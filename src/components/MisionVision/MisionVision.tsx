// import { useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './MisionVision.css'
import CarouselComunidad from '../Carousel/CarouselComunidad';
import AndesSlogan from '../../assets/img/imagenes carrusel/1.png'
import CarouselSimce from '../Carousel/CarouselSimce';


function MisionVision() {
    /* const compromisos = [
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
            color: "#1c2260"
        },
        {
            imgSrc: Programas,
            imgAlt: "EXCELENCIA ACADÉMICA",
            caption: "EXCELENCIA ACADÉMICA",
            title: "EXCELENCIA ACADÉMICA",
            description: "Aspiramos a la excelencia en todos los ámbitos del quehacer educativo, la que se expresa en la búsqueda constante de nuevas metodologías, perfeccionamiento docente, revisión y actualización de contenidos; todo ello acompañado de los recursos humanos y tecnológicos necesarios para brindar una educación de calidad.",
            color: "#18223C"
        },

    ]; */
    return (
        <>


            <Container className='my-5'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 mb-5">
                        <CarouselComunidad />
                    </div>
                    <div className="col-md-6 col-12 school-info mb-5">
                        <h4 className='tituloMision'>Misión</h4>
                        <p className='parrafoMision'>El colegio Andes Chile busca la formación académica personalizada de excelencia para estudiantes desde pre kínder a octavo año básico del Valle del Aconcagua, fomentando el desarrollo intelectual y el pensamiento critico, valorando la diversidad y potenciando sus habilidades  y competencias sociales. Todo esto desarrollado en un ambiente familiar bajo nuestro lema “educando con amor” , formando educandos con principios y valores.</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <h4 className='tituloVision'>Visión</h4>
                        <p className='parrafoVision'>El colegio Andes Chile tiene como visión consolidarse como una institución de excelencia académica, enfocada en la educación personalizada y familiar, con docentes altamente calificados, preparados para responder al curriculum vigente y cumplir con altos estándares de calidad académica y formativa, resaltando los valores y el desarrollo de conocimientos, habilidades y actitudes,  permitiendo que nuestros estudiantes sean capaces de enfrentar los desafíos que les presenta la sociedad siendo agente con altas expectativas de crecimiento , constituyéndose un aporte para la misma.</p>
                    </div>
                    <div className="col-md-6 col-12 school-info">
                        <CarouselSimce />
                    </div>
                </div>
            </Container>
            <br />
            <Container>
                <div className='row'>
                    <div className='col-12'>
                        <h4 className='tituloHistoria'>Presentación Colegio Andes Chile</h4>
                        <p className='parrafoHistoria'>El Colegio Andes Chile, fundado el 31 de octubre de 2003, es un establecimiento educativo particular pagado que se enfoca en brindar una educación personalizada y de excelencia.</p>
                        <p className='parrafoHistoria'>Nuestro lema "Educando con amor" nos ha acompañado desde nuestro inicio y sigue siendo la base de nuestra filosofía educativa.</p>
                        <p className='parrafoHistoria'>Estamos ubicados en Manuel Rodríguez # 1064, comuna de Los Andes ofreciendo educación pre básica y básica, con planes de expansión para incorporar enseñanza media en el futuro cercano.</p>
                        <p className='parrafoHistoria'>Contamos con docentes especializados que imparten asignaturas como música, educación física e inglés desde pre kinder, comprometidos con el desarrollo integral del nuestros estudiantes.</p>
                        <p className='parrafoHistoria'>Desde el año 2023 el señor Alfredo Agustín Gallegos Ávila asume la dirección del colegio, trayendo nueva visión y experiencia para continuar fortaleciendo nuestra comunidad educativa.</p>
                        <p className='parrafoHistoria'>En Colegio Andes Chile nos comprometemos a brindar una educación de calidad, que permita a nuestros estudiantes crecer integralmente y alcanzar su máximo potencial.</p>
                    </div>
                </div>
            </Container>

            <Container className='my-5 d-none d-md-block'>
                <div className='center'>
                    <img src={AndesSlogan} width="70%" height="90%" className="mb-3" />
                </div>
            </Container>



        </>
    )
}

export default MisionVision
