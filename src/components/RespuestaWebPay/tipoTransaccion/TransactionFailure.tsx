import { WebpayResponse } from '../RespuestaWebPay';
import { Card } from 'react-bootstrap';
import './Transactions.css'

interface Props {
    data: WebpayResponse;
}

function TransactionFailure({ data }: Props) {
    
    return (
        <Card className='cardStyle2 shadow' style={{ backgroundColor: '#e1cacd' }}>
            <Card.Header>
                <Card.Title>Transacción Rechazada</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle><b>Orden de Compra:</b></Card.Subtitle>
                <Card.Text><b>{data.buy_order}</b></Card.Text>
                <hr />
                <Card.Subtitle>Detalles:</Card.Subtitle>
                <Card.Text>No se pudo completar su transacción</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TransactionFailure;
