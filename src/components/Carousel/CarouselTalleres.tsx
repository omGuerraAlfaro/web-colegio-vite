// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import hall from '../../assets/img/fotoHall.png'
import foto5 from '../../assets/img/imagenes carrusel/5.png';


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
                            src={hall}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: "100%", height: "100%" }}
                            src={hall}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default CarouselTalleres
