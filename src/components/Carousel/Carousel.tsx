import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import carousel1 from '../../assets/img/carru.jpg';
// import carousel2 from '../../assets/img/carru2.png';
import carousel3 from '../../assets/img/carru3.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CarouselHome() {
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
        <div>
            <Carousel className="my-carousel container-fluid">
                <Carousel.Item>
                    <img className="d-block" src={carousel1} alt="First slide" />
                    <Carousel.Caption>
                        <h2 className='tituloCarrusel'>¡Inscripciones 2026, Abiertas!</h2>
                        <h2 className='tituloCarrusel'>¡Únete a nuestra comunidad educativa!</h2>
                        <Button href='/admision' variant="outline-primary" className="buttonAnimated mx-3">Admisión 2026</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img className="d-block" src={carousel2} alt="Second slide" />
                    <Carousel.Caption>
                        <h2 className='tituloCarrusel'>¡Puente de apoyo educativo!</h2>
                        <Button href='/pae' variant="outline-primary" className="buttonAnimated mx-3">Conocer PAE</Button>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img className="d-block" src={carousel3} alt="Third slide" />
                    <Carousel.Caption>
                        <h2 className='tituloCarrusel'>¡Nuestra comunidad educativa!</h2>
                        <Button onClick={handleNavClick} variant="outline-primary" className="buttonAnimated mx-3">Comunidad educativa</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselHome;
