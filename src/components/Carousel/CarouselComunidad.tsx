import Carousel from 'react-bootstrap/Carousel';
import './Carousel2.css';
import foto6 from '../../assets/img/imagenes carrusel/13.png';
import foto7 from '../../assets/img/imagenes carrusel/15.png';
import foto1 from '../../assets/img/imagenes carrusel/9.png';

function CarouselComunidad() {
  const slides = [foto6, foto7, foto1];

  return (
    <div className="carousel-wrapper">
      <Carousel className="my-carousel container">
        {slides.map((src, idx) => (
          <Carousel.Item key={idx}>
            {/* Usamos sólo width:100% y height auto para respetar la proporción */}
            <img
              className="d-block w-100"
              src={src}
              alt={`Slide ${idx + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComunidad;
