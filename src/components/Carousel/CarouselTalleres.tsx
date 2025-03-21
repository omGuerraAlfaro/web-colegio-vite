import Carousel from 'react-bootstrap/Carousel';
import './CarouselTalleres.css';
import foto5 from '../../assets/img/imagenes carrusel/12.png';
import foto6 from '../../assets/img/imagenes carrusel/13.png';
import foto8 from '../../assets/img/imagenes carrusel/8.png';

function CarouselTalleres() {
    return (
        <div className="carousel-talleres-wrapper">
            <Carousel className="carousel-talleres container" interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block carousel-talleres-img"
                        src={foto5}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-talleres-img"
                        src={foto6}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-talleres-img"
                        src={foto8}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselTalleres;
