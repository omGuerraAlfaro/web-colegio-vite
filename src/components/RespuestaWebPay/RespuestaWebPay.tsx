import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './RespuestaWebPay.css';
import TransactionSuccess from './tipoTransaccion/TransactionSuccess';
import TransactionFailure from './tipoTransaccion/TransactionFailure';
import { Spinner } from 'react-bootstrap';
import TransactionNull from './tipoTransaccion/TransactionNull';

export interface WebpayResponse {
    vci?: string;
    amount?: number;
    status?: string;
    buy_order?: string;
    session_id?: string;
    card_detail?: {
        card_number: string;
    };
    accounting_date?: string;
    transaction_date?: string;
    authorization_code?: string;
    payment_type_code?: string;
    response_code?: number;
    installments_number?: number;
}
export interface putBoletaResponse {
    idBoleta?: number;
    estado?: number;
    idPago?: string;
}

function RespuestaWebPay() {
    const [webpayRespuesta, setWebpayRespuesta] = useState<WebpayResponse | null>(null);
    // const [/* boletaUpdateRespuesta */, setBoletaUpdateRespuesta] = useState<any>(null);
    const [AnulacionCompraRespuesta, setAnulacionCompraRespuesta] = useState<any>(null);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const tokenAnulacion = queryParams.get('TBK_TOKEN')?.toString();
        const token = queryParams.get('token_ws')?.toString();

        if (tokenAnulacion) {
            const buy_order = queryParams.get('TBK_ORDEN_COMPRA')?.toString();
            const session_id = queryParams.get('TBK_ID_SESION')?.toString();

            const data = { buy_order, session_id };

            setAnulacionCompraRespuesta(data);
        }

        if (token) {
            getWebpayResponse(token);
        }
    }, [location]);


    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const getWebpayResponse = async (token: string) => {
        try {
            const response = await axios.post(`https://colegio-backend.onrender.com/payment/confirm`, { token }, config);
            setWebpayRespuesta(response.data);
        } catch (error) {
            console.error('Error al obtener la respuesta de Webpay:', error);
        }
    };

    if (AnulacionCompraRespuesta) {
        return (
            <Container className='my-5'>
                <TransactionNull data={AnulacionCompraRespuesta} />
            </Container>
        );
    }

    if (!webpayRespuesta) {
        return <Container className='my-5'>
            <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" style={{ marginRight: '10px' }} />
                Cargando respuesta desde WebPay...
            </div>
        </Container>;
    }


    switch (webpayRespuesta.vci) {
        case 'TSY':
        case 'TSYS':
        case 'TSYF':
            return (
                <Container className='my-5'>
                    <TransactionSuccess data={webpayRespuesta} />
                </Container>
            );
        default:
            return (
                <Container className='my-5'>
                    <TransactionFailure data={webpayRespuesta} />
                </Container>
            );
    }
}

export default RespuestaWebPay;
