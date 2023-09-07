// import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import carousel1 from '../../assets/img/carousel1.jpg'

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
                            <h3>Colegio Andes Chile</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={carousel1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Colegio Andes Chile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={carousel1}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Colegio Andes Chile</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default CarouselHome
