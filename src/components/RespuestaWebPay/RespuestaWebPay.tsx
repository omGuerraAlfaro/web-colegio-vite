import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './RespuestaWebPay.css'; 

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

function RespuestaWebPay() {
    const [webpayRespuesta, setWebpayRespuesta] = useState<WebpayResponse | null>(null);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token_ws')?.toString();
        console.log('token:', token);


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
            const response = await axios.post(`https://api-colegio.onrender.com/payment/confirm`, {token} , config);
            setWebpayRespuesta(response.data);
        } catch (error) {
            console.error('Error al obtener la respuesta de Webpay:', error);
        }
    };

    return (
        <Container className='my-5'>
            <h1>Respuesta WebPay</h1>
            {webpayRespuesta ? (
                <>
                    <p>VCI = {webpayRespuesta.vci}</p>
                    <p>MONTO = {webpayRespuesta.amount}</p>
                    <p>STATUS = {webpayRespuesta.status}</p>
                    <p>BUY_ORDER = {webpayRespuesta.buy_order}</p>
                    <p>SESSION_ID = {webpayRespuesta.session_id}</p>
                    <p>CARD_DETAIL = {webpayRespuesta.card_detail?.card_number}</p>
                    <p>ACCOUNTING_DATE = {webpayRespuesta.accounting_date}</p>
                    <p>TRANSACTION_DATE = {webpayRespuesta.transaction_date}</p>
                    <p>AUTHORIZATION_CODE = {webpayRespuesta.authorization_code}</p>
                    <p>PAYMENT_TYPE_CODE = {webpayRespuesta.payment_type_code}</p>
                    <p>RESPONSE_CODE = {webpayRespuesta.response_code}</p>
                    <p>INSTALLMENTS_NUMBER = {webpayRespuesta.installments_number}</p>
                </>
            ) : (
                <p>Cargando respuesta...</p>
            )}
        </Container>
    );
}

export default RespuestaWebPay;
