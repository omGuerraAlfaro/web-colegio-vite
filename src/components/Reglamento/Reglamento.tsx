import Container from 'react-bootstrap/Container';
import './Reglamento.css'
import ReglamentoPDF from '../../assets/docs/Reglamento-interno.pdf';
import { Button } from 'react-bootstrap';

function Reglamento() {

    return (
        <>
            <Container className='my-3 textReglamento'>
                <h1 className='tituloReglamento'>Reglamento Interno de Convivencia Escolar</h1>
                <p>El Reglamento Interno de Convivencia Escolar del Colegio Andes Chile tiene como finalidad promover un clima de armonía y respeto entre los estudiantes, y entre estos y todos los miembros que conforman nuestra comunidad educativa. Es imperativo que cada individuo se comprometa a su estricto seguimiento y aplicación. Los padres, madres y apoderados tienen la responsabilidad de unirse a sus hijos(as) en el proceso de comprensión, respeto y adhesión a este reglamento en su totalidad.</p>
                <p>La convivencia en el Colegio Andes Chile se define como la capacidad de autonomía que cada estudiante debe alcanzar, con el objetivo de interactuar de manera adecuada y responsable con el entorno educativo y, por extensión, con la sociedad. Nuestro propósito es formar individuos cuyas acciones se enmarquen en valores como el respeto y la adhesión a las normativas vigentes, incluyendo aspectos como: puntualidad, asistencia, disciplina, presentación personal y compromiso con la institución, entre otros valores fundamentales.</p>
                <a href={ReglamentoPDF} target="_blank" rel="noopener noreferrer" className="buttonLink">
                    <Button className="buttonAnimated">
                        Ver Reglamento Interno de Convivencia Escolar
                    </Button>
                </a>
            </Container>
        </>
    )
}

export default Reglamento
