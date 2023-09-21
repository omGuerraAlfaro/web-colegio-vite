// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import carousel1 from '../../assets/img/carousel1.jpg'
import { Button } from 'react-bootstrap';

function CarouselHome() {

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
                            <h2>¡Únete a nuestra comunidad educativa!</h2>
                            <Button href='/admision' variant="outline-primary" className="buttonAnimated mx-3">Admisión 2024</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={carousel1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2>¡Puente de apoyo educativo!</h2>
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
                            <h2>¡Nuestra comunidad educativa!</h2>
                            <Button href='/admision' variant="outline-primary" className="buttonAnimated mx-3">Comunidad educativa</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default CarouselHome
