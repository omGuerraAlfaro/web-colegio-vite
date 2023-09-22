import Container from 'react-bootstrap/Container';
import './Reglamento.css'
import ReglamentoPDF from '../../assets/docs/Reglamento-interno.pdf';
import { Button } from 'react-bootstrap';

function Reglamento() {

    return (
        <>
            <Container>
                <div>
                    <Button href={ReglamentoPDF} className="buttonAnimated">
                        Descargar PDF
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Reglamento
