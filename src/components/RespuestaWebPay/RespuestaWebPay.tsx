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
    const [/* boletaUpdateRespuesta */, setBoletaUpdateRespuesta] = useState<any>(null);
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
            console.log(data);

            setAnulacionCompraRespuesta(data);
            console.log(AnulacionCompraRespuesta);

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
            const response = await axios.post(`https://api-colegio.onrender.com/payment/confirm`, { token }, config);
            setWebpayRespuesta(response.data);
        } catch (error) {
            console.error('Error al obtener la respuesta de Webpay:', error);
        }
    };

    const putBoleta = async (data: putBoletaResponse) => {
        try {
            const response = await axios.put(`https://api-colegio.onrender.com/boleta/updateBoleta`, data, config)
            setBoletaUpdateRespuesta(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    if (AnulacionCompraRespuesta) {
        console.log(AnulacionCompraRespuesta);
        
        return <TransactionNull data={AnulacionCompraRespuesta} />;
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
            const rawId = webpayRespuesta.buy_order ? webpayRespuesta.buy_order.split('-').pop() : null;
            const idBoleta = rawId && !isNaN(parseInt(rawId, 10)) ? parseInt(rawId, 10) : undefined;

            const updateData: putBoletaResponse = {
                idBoleta: idBoleta,
                estado: 2,
                idPago: webpayRespuesta.buy_order
            };

            putBoleta(updateData);

            return <TransactionSuccess data={webpayRespuesta} />;
        default:
            return <TransactionFailure data={webpayRespuesta} />;

    }

    // return (
    //     <Container className='my-5'>
    //         <h1>Respuesta WebPay</h1>
    //         {webpayRespuesta ? (
    //             <>
    //                 <p>VCI = {webpayRespuesta.vci}</p>
    //                 <p>MONTO = {webpayRespuesta.amount}</p>
    //                 <p>STATUS = {webpayRespuesta.status}</p>
    //                 <p>BUY_ORDER = {webpayRespuesta.buy_order}</p>
    //                 <p>SESSION_ID = {webpayRespuesta.session_id}</p>
    //                 <p>CARD_DETAIL = {webpayRespuesta.card_detail?.card_number}</p>
    //                 <p>ACCOUNTING_DATE = {webpayRespuesta.accounting_date}</p>
    //                 <p>TRANSACTION_DATE = {webpayRespuesta.transaction_date}</p>
    //                 <p>AUTHORIZATION_CODE = {webpayRespuesta.authorization_code}</p>
    //                 <p>PAYMENT_TYPE_CODE = {webpayRespuesta.payment_type_code}</p>
    //                 <p>RESPONSE_CODE = {webpayRespuesta.response_code}</p>
    //                 <p>INSTALLMENTS_NUMBER = {webpayRespuesta.installments_number}</p>


    //                 <a href="intent://colegioandeschile.cl/app#Intent;scheme=https;package=colegio.andes.chile.app;end">Volver a la APP</a>
    //             </>
    //         ) : (
    //             <>
    //                 <p>Cargando respuesta...</p>
    //             </>


    //         )}
    //     </Container>
    // );
}

export default RespuestaWebPay;
