import Container from 'react-bootstrap/Container';
import './simce.css'
import Grafica from '../../assets/img/SIMCE.png';
import CarouselSimce from '../Carousel/CarouselSimce';

function Simce() {

    return (
        <>


            <Container className='my-2'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-12 mb-5">
                        <CarouselSimce />
                    </div>
                    <div className="col-md-6 col-12 school-info mb-5">
                        <h4 className='tituloMision'>Resultados SIMCE 2023</h4>
                        <p className='parrafoMision'>Deseamos manifestar nuestra inmensa alegría por los resultados simce, rendidos por nuestros estudiantes durante el año 2023, queremos expresar la satisfacción por el compromiso entregado por nuestros profesionales de la educación, padres, apoderados y en especial a nuestros niños y niñas quienes han mantenido un alza sostenida desde el año 2016 hasta el 2023.
                            Es nuestro deseo continuar fortaleciendo nuestro proyecto educativo en el ámbito academico y valórico con una mirada integral hacia el futuro.</p>
                    </div>
                </div>
            </Container>
            <br />
            <Container>
                <div className='row'>
                    <div className='col-12'>
                        <h4 className='tituloHistoria'>Felicitaciones a nuestros alumnos y comunidad</h4>
                        <p className='parrafoHistoria'>Querida comunidad educativa, a través de este comunicado queremos extender las felicitaciones a los estudiantes y las familias de los cuartos básicos
                            2023 pues el día 06 de marzo del 2024 se dieron a conocer los resultados Simce rendidos por dichos estudiantes en noviembre del 2023.
                            De esta forma queremos expresar nuestra alegría dado que en matemática hubo un incremento de 32 puntos, mientras que en
                            Lenguaje se logró mantener el alza alcanzada durante el año 2022.</p>
                        <div className='center'>
                            <img src={Grafica} width="50%" height="50%" className="my-3" />
                        </div>
                        <p className='parrafoHistoria'>Con estos resultados se demuestra el gran compromiso tanto de nuestros estudiantes, en sus quehaceres educativos como de nuestros padres, apoderados y toda toda la comunidad educativa.
                            Queremos enfatizar que nuestro deber como institución es fortalecer el desarrollo integral de nuestros estudiantes y en eso evidenciamos que en el área académica, nuestros resultados están dando los frutos que esperábamos.
                            Felicitaciones y muchas gracias por seguir confiando y creyendo en nuestro proyecto educativo.
                        </p>
                        <p className='parrafoHistoria'>Saluda atte..</p>
                        <p className='parrafoHistoria'>Dirección Colegio Andes Chile.</p>
                    </div>
                </div>
            </Container>

            <Container className='my-3 d-none d-md-block'>
            </Container>



        </>
    )
}

export default Simce
