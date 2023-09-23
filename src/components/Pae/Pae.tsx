import Container from 'react-bootstrap/Container';
import { Accordion, Col, Row } from 'react-bootstrap';
import './Pae.css'

function Pae() {

    return (
        <>
            <Container>
                <h1 className='tituloPae'>Puente de Apoyo Educativo (PAE)</h1>

                <Row>
                    <Col xs={12} sm={6} md={6} className='textAcordion'>
                        <h1 className='tituloAcordion'>Te Acompañamos En Cada Paso Del Aprendizaje</h1>
                        <p>Atención personalizada para estudiantes con un equipo especializado en fonoaudiología, psicopedagogía, psicología y terapia ocupacional. Impulsamos el éxito académico y el desarrollo integral, fortaleciendo habilidades y confianza para futuros desafíos.</p>
                        <p>Aspiramos a ser un pilar fundamental en su proceso de aprendizaje, fortaleciendo su conocimiento, autoestima y habilidades personales para que enfrenten nuevos desafíos con confianza y motivación</p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5 className='tituloPrograma'>Programa A</h5></Accordion.Header>
                                <Accordion.Body className='textAcordion'>
                                    <p><strong>Este programa está dirigido a los diagnósticos permanentes como TEA (Trastorno del espectro autista), Discapacidad Intelectual, Síndrome de Down.</strong></p>
                                    <h6><strong>1.- Atención Psicopedagógica:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Atención personalizada para el trabajo con las habilidades cognitivas tales como: atención, concentración, memoria, funciones ejecutivas y estrategias de aprendizajes.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en trastornos asociados como: Dislexia (dificultad en la identificación del sonido del habla en letras y palabras), Discalculia (confusión de números y signos matemático), Disortografía (escritura nintetigible en ortografía y escritura), Disgrafía (falta de habilidades motoras en la escritura).</p>
                                        </li>
                                        <li>
                                            <p>Plan de trabajo con las docentes para la confección de evaluaciones y adecuaciones curriculares PACL (plan de adecuación curricular individual).</p>
                                        </li>
                                    </ul>
                                    <br />
                                    <h6><strong>2.- Atención Fonoaudiológica:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Evaluación y desarrollo de habilidades lingúííticas.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en trastornos de habla: como trastornos de los sonidos del habla, Disfemia (tartamudez) y parámetros de habla.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en habilidades sociales.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en la comunicación.</p>
                                        </li>
                                    </ul>
                                    <br />
                                    <h6><strong>3.- Atención Psicológica:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Atención personalizada para el correcto trabajo habilidades psicosociales y emocionales.</p>
                                        </li>
                                        <li>
                                            <p>Reconocer el mejor uso de sus emociones a través del juego y actividades más lúdicas.</p>
                                        </li>
                                        <li>
                                            <p>Manejo de la frustración y ansiedad.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en habilidades cognitivas.</p>
                                        </li>
                                    </ul>
                                    <br />
                                    <h6><strong>4.- Atención Terapeuta Ocupacional:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Intervención en actividades de la vida diaria (básicas e instrumentales).</p>
                                        </li>
                                        <li>
                                            <p>Adaptación de actividades y ambientes.</p>
                                        </li>
                                        <li>
                                            <p>Procesos de autorregulación y condiciones ambientales.</p>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5 className='tituloPrograma'>Programa B</h5></Accordion.Header>
                                <Accordion.Body className='textAcordion'>
                                    <p><strong>Este programa está dirigido a dificultades más transitorias como Trastorno del Lenguaje. Expresivo o Mixto (TDL) Déficit Atencional Funcionamiento Intelectual Limítrofe (FIL) con o sin Hiperactividad (TDA)</strong></p>
                                    <h6><strong>1.- Atención Psicopedagógica:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Atención personalizada para el trabajo con las habilidades cognitivas tales como: atención, concentración, memoria, funciones ejecutivas y estrategias de aprendizajes.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en trastornos asociados como: Dislexia, Discalculia, Disortografía y Disgrafia.</p>
                                        </li>
                                        <li>
                                            <p>Plan de trabajo con las docentes para la confección de evaluaciones y adecuaciones curriculares PACL (plan de adecuación curricular individual).</p>
                                        </li>
                                    </ul>
                                    <br />
                                    <h6><strong>2.- Atención Fonoaudiológica:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Intervención en habilidades lingúlsticas, tanto en su variante expresivo y comprensivo.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en trastornos de los sonidos del habla.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en dificultades de aprendizaje de Lecto/escritura.</p>
                                        </li>
                                    </ul>
                                    <br />
                                    <h6><strong>3.- Atención Psicológica en TDA:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Intervención en Habilidades Cognitivas principalmente las funciones ejecutivas.</p>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h5 className='tituloPrograma'>Programa C</h5></Accordion.Header>
                                <Accordion.Body className='textAcordion'>
                                    <p><strong>Este programa está dirigido al Diagnóstico de Dificultades Específicas del Aprendizaje (DEA)</strong></p>
                                    <h6><strong>1.- Atención Psicopedagógica:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Atención personalizada para el trabajo con las habilidades cognitivas tales como: atención, concentración, memoria, funciones ejecutivas y estrategias de aprendizajes.</p>
                                        </li>
                                        <li>
                                            <p>Intervención en trastornos asociados como: Dislexia, Discalculia, Disortografía y Disgrafia.</p>
                                        </li>
                                        <li>
                                            <p>Plan de trabajo con las docentes para la confección de evaluaciones y adecuaciones curriculares PACI</p>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h5 className='tituloPrograma'>Programa D</h5></Accordion.Header>
                                <Accordion.Body className='textAcordion'>
                                    <p><strong>Este programa está dirigido al Diagnóstico de Dificultades Específicas del Aprendizaje (DEA)</strong></p>
                                    <h6><strong>1.- Adecuaciones Curriculares:</strong></h6>
                                    <ul>
                                        <li>
                                            <p>Incluye material.</p>
                                        </li>
                                        <li>
                                            <p>Adecuación de plan lector.</p>
                                        </li>
                                        <li>
                                            <p>Posible eximición de asignatura.</p>
                                        </li>
                                        <li>
                                            <p>Adecuación escala de evaluación.</p>
                                        </li>
                                        <li>
                                            <p>Apoyo grupal en aula de lenguaje y matemáticas.</p>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <h1 className='tituloAcordion mt-5'>Consideraciones Generales de los Programas:</h1>
                <ul className='textAcordion'>
                    <li>
                        <p>Cada niño y niña que cuente con este programa recibirá adecuaciones en los planes lectores, posible eximición de asignaturas y adecuación de escala de exigencia académica.</p>
                    </li>
                    <li>
                        <p>Se entregará estados de avances semestrales de los diferentes profesionales. Las evaluaciones para descartar o confirmar un diagnóstico no están consideradas en el programa.</p>
                    </li>
                    <li>
                        <p>Recibirá apoyos grupales en aula en las asignaturas tales como Lenguaje y Matemáticas.</p>
                    </li>
                </ul>
            </Container>
        </>
    )
}

export default Pae
