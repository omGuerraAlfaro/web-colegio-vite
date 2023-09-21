import { Accordion } from 'react-bootstrap';
import './Acordeon.css';

function AcordeonPAE() {
    return (
        <>
            <h1 className='tituloAcordion'>Puente de Apoyo Educativo</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Click me!</Accordion.Header>
                    <Accordion.Body>Hello! I'm the body of the first section.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Click me!</Accordion.Header>
                    <Accordion.Body>Hello! I'm the body of the second section.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Click me!</Accordion.Header>
                    <Accordion.Body>Hello! I'm the body of the second section.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Click me!</Accordion.Header>
                    <Accordion.Body>Hello! I'm the body of the second section.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default AcordeonPAE;
