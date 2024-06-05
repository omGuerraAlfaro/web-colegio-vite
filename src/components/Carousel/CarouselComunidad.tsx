// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import foto6 from '../../assets/img/imagenes carrusel/13.png';
import foto7 from '../../assets/img/imagenes carrusel/15.png';
import foto1 from '../../assets/img/imagenes carrusel/9.png';
function CarouselComunidad() {

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel className="my-carousel container" >
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto6}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto7}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default CarouselComunidad
