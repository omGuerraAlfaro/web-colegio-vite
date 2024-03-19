// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import foto2 from '../../assets/img/imagenes carrusel/2.png';
import foto4 from '../../assets/img/imagenes carrusel/4.png';
import foto5 from '../../assets/img/imagenes carrusel/5.png';


function CarouselSimce() {

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel className="my-carousel container" >
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto2}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto5}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto4}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default CarouselSimce
