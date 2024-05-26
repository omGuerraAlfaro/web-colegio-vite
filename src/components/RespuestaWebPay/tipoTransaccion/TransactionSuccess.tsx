import { useEffect, useState } from 'react';
import { WebpayResponse } from '../RespuestaWebPay';
import { Button, Card, Container } from 'react-bootstrap';
import { es } from 'date-fns/locale';
import { format, parseISO } from 'date-fns';
import jsPDF from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';

declare module 'jspdf' {
    interface jsPDF {
        autoTable: (options: UserOptions) => void;
        lastAutoTable: {
            finalY: number;
        };
    }
}

interface Props {
    data: WebpayResponse;
}

interface BoletaData {
    id: number;
    detalle: string;
    pago_id: string;
    total: string;
    rut_estudiante: string;
    rut_apoderado: string;
}

interface ApoderadoData {
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    rut: string;
    dv: string;
    telefono: string;
    correo_electronico: string;
}

interface EstudianteData {
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    rut: string;
    dv: string;
    curso: { nombre: string; descripcion: string; };
}

function formatDate(isoString: any) {
    const date = parseISO(isoString);
    return format(date, "dd/MM/yyyy HH:mm:ss", { locale: es });
}

function formatNumber(number: any) {
    return number.toLocaleString('de-DE');
}

function getPaymentTypeDescription(paymentTypeCode: any) {
    switch (paymentTypeCode) {
        case 'VD':
            return 'Venta Débito';
        case 'VN':
            return 'Venta Normal';
        case 'VC':
            return 'Venta en Cuotas';
        case 'SI':
            return '3 Cuotas sin Interés';
        case 'S2':
            return '2 Cuotas sin Interés';
        case 'NC':
            return 'N Cuotas sin Interés';
        case 'VP':
            return 'Venta Prepago';
        default:
            return 'Tipo de Pago Desconocido';
    }
}

const fetchBoletaData = async (id: number): Promise<BoletaData> => {
    const response = await fetch(`https://api-colegio.onrender.com/boleta/id/${id}`);
    const data = await response.json();
    return {
        id,
        detalle: data.detalle.toUpperCase(),
        pago_id: data.pago_id,
        total: data.total,
        rut_estudiante: data.rut_estudiante,
        rut_apoderado: data.rut_apoderado
    };
};

const fetchApoderadoData = async (rut: string): Promise<ApoderadoData> => {
    const response = await fetch(`https://api-colegio.onrender.com/apoderado/rut/${rut}`);
    const data = await response.json();
    return {
        primer_nombre: data.primer_nombre,
        segundo_nombre: data.segundo_nombre,
        primer_apellido: data.primer_apellido,
        segundo_apellido: data.segundo_apellido,
        rut: data.rut,
        dv: data.dv,
        telefono: data.telefono,
        correo_electronico: data.correo_electronico
    };
};

const fetchEstudianteData = async (rut: string): Promise<EstudianteData> => {
    const response = await fetch(`https://api-colegio.onrender.com/estudiante/rut/${rut}`);
    const data = await response.json();
    return {
        primer_nombre: data.primer_nombre,
        segundo_nombre: data.segundo_nombre,
        primer_apellido: data.primer_apellido,
        segundo_apellido: data.segundo_apellido,
        rut: data.rut,
        dv: data.dv,
        curso: data.curso[0]
    };
};

function TransactionSuccess({ data }: Props) {
    const [boletas, setBoletas] = useState<BoletaData[]>([]);
    const [apoderado, setApoderado] = useState<ApoderadoData | null>(null);
    const [estudiantes, setEstudiantes] = useState<{ [key: string]: EstudianteData }>({});

    useEffect(() => {
        const fetchBoletas = async () => {
            const ordenCompra = data.buy_order;
            const parts = ordenCompra!.split('-');
            console.log(parts);

            const rut = parts[0];
            const dePocoInteres = parts[1];
            const boleta1 = parts.length >= 3 ? parts[2] : null;
            const boleta2 = parts.length === 4 ? parts[3] : null;
            console.log(boleta1);


            console.log(`RUT: ${rut}`);
            console.log(`De poco interés: ${dePocoInteres}`);
            console.log(`Boleta 1: ${boleta1}`);
            console.log(`Boleta 2: ${boleta2}`);

            const idsBoletas = [boleta1, boleta2].filter(id => id !== null).map(id => parseInt(id!, 10));

            const boletaDataPromises = idsBoletas.map(id => fetchBoletaData(id));
            const boletaData = await Promise.all(boletaDataPromises);
            setBoletas(boletaData);

            // Fetch apoderado data (assuming all boletas have the same apoderado)
            if (boletaData.length > 0) {
                const apoderadoData = await fetchApoderadoData(boletaData[0].rut_apoderado);
                setApoderado(apoderadoData);

                // Fetch estudiante data for each boleta
                const estudianteDataPromises = boletaData.map(boleta => fetchEstudianteData(boleta.rut_estudiante));
                const estudianteData = await Promise.all(estudianteDataPromises);
                const estudiantesMap = boletaData.reduce((map, boleta, index) => {
                    map[boleta.rut_estudiante] = estudianteData[index];
                    return map;
                }, {} as { [key: string]: EstudianteData });
                setEstudiantes(estudiantesMap);
            }
        };

        fetchBoletas();
    }, [data.buy_order]);

    const generatePdf = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            format: 'letter'
        });

        const logo = 'data:image/png;base64,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';

        doc.addImage(logo, 'PNG', 15, 10, 20, 20);

        // Apoderado name
        const apoderadoName = apoderado ? `${apoderado.primer_nombre} ${apoderado.segundo_nombre} ${apoderado.primer_apellido} ${apoderado.segundo_apellido}`.trim() : 'sin datos';

        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Detalle de Transacción", 105, 20, { align: 'center' });

        doc.setFontSize(7);
        doc.text('Manuel Rodríguez #1064', 163, 15);
        doc.text('Los Andes, Valparaíso', 163, 18);
        doc.text('Teléfono: (342) 402858', 163, 22);
        doc.text('www.colegioandeschile.cl', 163, 26);

        // Agregar detalles de la factura
        doc.setFontSize(12);
        doc.text(`Comprobante de págo: 001-2024`, 15, 40);
        doc.text(`Fecha Documento: ${format(new Date(), 'dd/MM/yyyy')}`, 15, 45);
        doc.text(`Nombre Apoderado: ${apoderadoName}`, 15, 50);

        // Tabla de descripciones
        const body = [
            ['Colegiatura', '$' + formatNumber(data.amount) || 'sin datos'],
            ['Orden de Compra', data.buy_order || 'sin datos'],
            ['Código de Autorización', data.authorization_code || 'sin datos'],
            ['Tipo de Pago Realizado', getPaymentTypeDescription(data.payment_type_code) || 'sin datos'],
            ['Fecha de Transacción', formatDate(data.transaction_date) || 'sin datos'],
            ['4 Últimos Digitos de la Tarjeta', data.card_detail?.card_number || 'sin datos'],
        ];

        doc.autoTable({
            startY: 60,
            head: [['Descripción', 'Detalle']],
            body: body,
            theme: 'grid',
            pageBreak: 'auto'
        });

        let finalY = doc.lastAutoTable.finalY;

        if (apoderado) {
            doc.setFontSize(12);
            doc.text(`Detalle Apoderado`, 15, finalY + 10);

            const apoderadoBody = [
                ['Apoderado', apoderadoName],
                ['RUT Apoderado', `${apoderado.rut}-${apoderado.dv}`],
                ['Teléfono Apoderado', `+569 ${apoderado.telefono}`],
                ['Correo Apoderado', apoderado.correo_electronico]
            ];

            doc.autoTable({
                startY: finalY + 15,
                head: [['Campo', 'Detalle']],
                body: apoderadoBody,
                theme: 'grid',
                pageBreak: 'auto'
            });

            finalY = doc.lastAutoTable.finalY;
        }

        // Agregar tablas de boletas
        boletas.forEach((boleta, index) => {
            const estudiante = estudiantes[boleta.rut_estudiante];
            const estudianteName = estudiante ? `${estudiante.primer_nombre} ${estudiante.segundo_nombre} ${estudiante.primer_apellido} ${estudiante.segundo_apellido}`.trim() : 'sin datos';
            const estudianteRut = estudiante ? `${estudiante.rut}-${estudiante.dv}` : 'sin datos';
            const curso = estudiante ? estudiante.curso.nombre : 'sin datos';
            const cursoDescripcion = estudiante ? estudiante.curso.descripcion : 'sin datos';

            if (index === 1) {
                doc.addPage();
                finalY = 10;
            }

            doc.setFontSize(12);
            doc.text(`Detalle N° ${index + 1}`, 15, finalY + 10);

            const boletaBody = [
                ['Detalle', boleta.detalle],
                ['Pago ID', boleta.pago_id],
                ['Total', '$' + formatNumber(parseFloat(boleta.total))],
                ['Estudiante', estudianteName],
                ['RUT Estudiante', estudianteRut],
                ['Curso', curso],
                ['Descripción Curso', cursoDescripcion]
            ];

            doc.autoTable({
                startY: finalY + 15,
                head: [['Campo', 'Detalle']],
                body: boletaBody,
                theme: 'grid',
                pageBreak: 'auto'
            });

            finalY = doc.lastAutoTable.finalY;
        });

        // Guardar el PDF
        doc.save('comprobante_pago.pdf');
    };

    return (
        <>
            <Card className='cardStyle shadow' style={{ backgroundColor: '#D4EDDA' }}>
                <Card.Header>
                    <Card.Title>Transacción Exitosa</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle><b>Monto:</b></Card.Subtitle>
                    <Card.Text><b>${formatNumber(data.amount)}</b></Card.Text>
                    <hr />

                    <Card.Subtitle><b>Orden de Compra:</b></Card.Subtitle>
                    <Card.Text><b>{data.buy_order}</b></Card.Text>
                    <hr />

                    <Card.Subtitle><b>Código de Autorización:</b></Card.Subtitle>
                    <Card.Text><b>{data.authorization_code}</b></Card.Text>
                    <hr />

                    <Card.Subtitle><b>Tipo de pago realizado:</b></Card.Subtitle>
                    <Card.Text><b>{getPaymentTypeDescription(data.payment_type_code)}</b></Card.Text>
                    <hr />

                    <Card.Subtitle><b>Fecha de Transacción:</b></Card.Subtitle>
                    <Card.Text><b>{formatDate(data.transaction_date)}</b></Card.Text>
                    <hr />

                    <Card.Subtitle><b>4 últimos dígitos de la tarjeta:</b></Card.Subtitle>
                    <Card.Text><b>{data.card_detail?.card_number}</b></Card.Text>
                    <hr />
                </Card.Body>
            </Card>
            <Container className='text-center mt-3'>
                <Button className='buttonAnimated' onClick={generatePdf}>Descargar PDF</Button>
            </Container>
        </>
    );
}

export default TransactionSuccess;
