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
                        <h4 className='tituloHistoria'>Nuestra Historia</h4>
                        <p className='parrafoHistoria'>Colegio Andes Chile, fue fundado el 31 de octubre de 2003, para dar espacio educativo personalizado a muchas familias que buscaban un colegio distinto y diferente, donde niñas y niños se sintieran íntegros en su quehacer educativo diario. Colegio Andes Chile es un establecimiento educacional particular, que se ubica en Rodríguez # 1064, comuna de Los Andes. Su director es  el señor Alfredo Agustín Gallegos Ávila.</p>
                        <p className='parrafoHistoria'>Nuestro establecimiento, es un centro educacional que imparte educación prebásica y básica. Así mismo a todos los alumnos se les imparte música, educación física, computación e inglés desde prekínder.</p>
                        <p className='parrafoHistoria'>A nivel pedagógico, Colegio Andes Chile impulsa una educación personalizada, centrada en las habilidades y capacidades de cada niño y niña, buscando un equilibrio entre rendimiento académico y valores transversales, dados por el carácter cercano y personalizado que da sustento valórico a nuestro proceso educativo y que es un elemento central dentro de la cultura escolar.</p>
                        <p className='parrafoHistoria'>Otro de los elementos que proporciona el sustento a estas características, es el Proyecto de Apoyo Educativo, que atiende a niños y niñas con necesidades educativas, proporcionando la tolerancia y aprecio a la diversidad que tanto se requieren en nuestra sociedad.</p>
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
