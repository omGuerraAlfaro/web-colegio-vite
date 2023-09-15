// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import hall from '../../assets/img/fotoHall.png'

function CarouselComunidad() {

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel className="my-carousel container" >
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

export default CarouselComunidad
