// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import carousel1 from '../../assets/img/carousel1.jpg'
import pae from '../../assets/img/pae.png'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CarouselHome() {


    // Dentro de tu componente
    const navigate = useNavigate();

    const handleNavClick = () => {
        if (window.location.pathname !== '/') {
            navigate('/');
        }
        setTimeout(() => {
            const noticiasElement = document.getElementById('noticias');
            if (noticiasElement) {
                noticiasElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel className="my-carousel container" >
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className='tituloCarrusel'>¡Únete a nuestra comunidad educativa!</h2>
                            <Button href='/admision' variant="outline-primary" className="buttonAnimated mx-3">Admisión 2024</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={pae}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className='tituloCarrusel'>¡Puente de apoyo educativo!</h2>
                            <Button href='/pae' variant="outline-primary" className="buttonAnimated mx-3">Conocer PAE</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={carousel1}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className='tituloCarrusel'>¡Nuestra comunidad educativa!</h2>
                            <Button onClick={handleNavClick} variant="outline-primary" className="buttonAnimated mx-3">Comunidad educativa</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default CarouselHome
