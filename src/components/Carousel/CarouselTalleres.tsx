// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import foto5 from '../../assets/img/imagenes carrusel/12.png';
import foto6 from '../../assets/img/imagenes carrusel/13.png';
import foto8 from '../../assets/img/imagenes carrusel/8.png';


function CarouselTalleres() {

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel className="my-carousel container" >
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
                            src={foto6}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={foto8}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default CarouselTalleres
