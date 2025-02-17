import { Card } from 'react-bootstrap';
import './Transactions.css'

function TransactionNull(data:any) {
    
    const {buy_order} = data.data;
    console.log(buy_order);
    
    return (
        <Card className='cardStyle2 shadow' style={{ backgroundColor: '#e1cacd' }}>
            <Card.Header>
                <Card.Title>Transacción Cancelada</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle><b>Orden de Compra:</b></Card.Subtitle>
                <Card.Text><b>{buy_order}</b></Card.Text>
                <hr />
                <Card.Subtitle>Detalles:</Card.Subtitle>
                <Card.Text>No se pudo completar su transacción. Su compra fue cancelada.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TransactionNull;