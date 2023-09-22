import Container from 'react-bootstrap/Container';
import './Reglamento.css'
import ReglamentoPDF from '../../assets/docs/Reglamento-interno.pdf';

function Reglamento() {

    return (
        <>
            <Container>
                <div>
                    <a href={ReglamentoPDF} download className="btn btn-primary">
                        Descargar PDF
                    </a>
                </div>
            </Container>
        </>
    )
}

export default Reglamento
