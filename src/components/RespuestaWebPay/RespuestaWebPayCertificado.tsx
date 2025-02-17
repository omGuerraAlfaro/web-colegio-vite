import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import TransactionFailure from './tipoTransaccion/TransactionFailure';
import TransactionNull from './tipoTransaccion/TransactionNull';
import TransactionSuccessCertificado from './tipoTransaccion/TransactionSuccessCertificado';

export interface WebpayResponseCertificado {
    response: {
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
    },
    updatedRecords: {
        primerNombreAlumno: string;
        segundoNombreAlumno: string;
        primerApellidoAlumno: string;
        segundoApellidoAlumno: string;
        certificateType: string;
    }[];

}

function RespuestaWebPayCertificado() {
    const [webpayRespuesta, setWebpayRespuesta] = useState<WebpayResponseCertificado | null>(null);
    const [AnulacionCompraRespuesta, setAnulacionCompraRespuesta] = useState<any>(null);
    const location = useLocation();
    const requestSent = useRef(false); // ✅ Prevent duplicate requests


    useEffect(() => {
        if (requestSent.current) return; // ✅ Avoid duplicate requests
        requestSent.current = true;

        const queryParams = new URLSearchParams(location.search);
        const tokenAnulacion = queryParams.get('TBK_TOKEN')?.toString();
        const token = queryParams.get('token_ws')?.toString();

        if (tokenAnulacion) {
            const buy_order = queryParams.get('TBK_ORDEN_COMPRA')?.toString();
            const session_id = queryParams.get('TBK_ID_SESION')?.toString();

            setAnulacionCompraRespuesta({ buy_order, session_id });
        }

        if (token) {
            getWebpayResponse(token);
        }
    }, [location]);

    const getWebpayResponse = async (token: string) => {
        try {
            const response = await axios.post(`https://colegio-backend.onrender.com/payment/confirm/certificado`, { token }, {
                headers: { 'Content-Type': 'application/json' }
            });
            // const response = await axios.post(`http://localhost:3200/payment/confirm/certificado`, { token }, {
            //     headers: { 'Content-Type': 'application/json' }
            // });

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
        return (
            <Container className='my-5'>
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status" style={{ marginRight: '10px' }} />
                    Cargando respuesta desde WebPay...
                </div>
            </Container>
        );
    }

    return (
        <Container className='my-5'>
            {webpayRespuesta.response.vci?.startsWith('TSY') ? (
                <TransactionSuccessCertificado data={webpayRespuesta} />
            ) : (
                <TransactionFailure data={webpayRespuesta.response} />
            )}
        </Container>
    );
}

export default RespuestaWebPayCertificado;
