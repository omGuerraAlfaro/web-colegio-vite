import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row, Modal, Carousel } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Cookies from 'js-cookie';
import './PhotoGallery.css';

type Noticia = {
    noticiaId: number;
    titulo: string;
    fecha: string;
    description: string;
    likes_count: number;
    images: any[];  // puedes detallar más este tipo si es necesario
    // ... otras propiedades que puedan existir
};

function bufferToBase64(buffer: number[]): string {
    const binaryString = buffer.map(byte => String.fromCharCode(byte)).join('');
    return btoa(binaryString);
}

function getFormattedBase64Image(imageObject: any): string {
    const prefix = 'data:image/jpeg;base64,';
    if (imageObject && imageObject.image_data && Array.isArray(imageObject.image_data.data)) {
        const base64String = bufferToBase64(imageObject.image_data.data);
        return prefix + base64String;
    } else {
        console.warn('Unexpected image data format:', imageObject);
        return '';
    }
}

type PhotoGalleryProps = {
    photos: any[];  // Puedes reemplazar `any` con un tipo más específico si lo tienes
};

function PhotoGallery({ photos }: PhotoGalleryProps) {
    const [/* photos2 */, setPhotos] = useState<Noticia[]>([]);
    const [likes, setLikes] = useState<number[]>([]);
    const [likedPhotos, setLikedPhotos] = useState<string[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 4;

    const [showModal, setShowModal] = useState(false);
    const [selectedPhotoImages, setSelectedPhotoImages] = useState([]);
    const [selectedPhotoTitle, setSelectedPhotoTitle] = useState('');
    const [selectedPhotoText, setSelectedPhotoText] = useState('');

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const response = await axios.get('https://colegio-backend.onrender.com/noticias/');
                let fetchedPhotos = response.data;

                // Ordenar las noticias por noticiaId en orden descendente
                fetchedPhotos.sort((a: any, b: any) => b.noticiaId - a.noticiaId);

                setPhotos(fetchedPhotos);
                setLikes(fetchedPhotos.map((photo: any) => photo.likes_count));
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        loadPhotos();
    }, []);

    useEffect(() => {
        const likedPhotoIds: string[] = photos.map(p => p.noticiaId)
            .reverse()
            .filter(id => Cookies.get(`like-photo-${id}`))
            .map(id => id.toString());

        setLikedPhotos(likedPhotoIds);
    }, [photos]);

    const likePhoto = async (photoId: number) => {
        try {
            const response = await axios.post(`https://colegio-backend.onrender.com/noticias/${photoId}/like`);
            // Encuentra el índice basado en noticiaId
            const index = photos.findIndex(photo => photo.noticiaId === photoId);
            if (index !== -1) { // Asegúrate de que se encontró el índice
                const newLikes = [...likes];
                newLikes[index] = response.data.likes_count; // Actualiza los likes con el índice correcto
                setLikes(newLikes);
            }
        } catch (error) {
            console.error('Failed to like photo:', error);
        }
    };


    const handleLike = (photoId: number) => {
        if (Cookies.get(`like-photo-${photoId}`)) {
            console.log('Ya has dado me gusta a esta noticia.');
            return;
        }

        likePhoto(photoId);

        Cookies.set(`like-photo-${photoId}`, 'true', { expires: 7 });
        // Añade la noticia a likedPhotos
        setLikedPhotos(prevLiked => [...prevLiked, photoId.toString()]);
    };



    const handleViewPhotos = (photo: any) => {
        setSelectedPhotoImages(photo.images);
        setSelectedPhotoTitle(photo.titulo);
        setSelectedPhotoText(photo.description);
        setShowModal(true);
    };

    const reversedPhotos = [...photos].reverse();
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = reversedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    const totalPages = Math.ceil(photos.length / photosPerPage);

    // Identificar la foto más reciente por noticiaId
    const mostRecentPhotoId = Math.max(...photos.map(photo => photo.noticiaId));

    return (
        <div className="gallery">
            <Row>
                {currentPhotos.map((photo, index) => {
                    const isMostRecent = photo.noticiaId === mostRecentPhotoId;
                    // Comprobamos si es la foto más reciente por su ID
                    const isFirstChild = index === 0 && isMostRecent;

                    return (
                        <Col xs={12} sm={isFirstChild ? 12 : 6} md={isFirstChild ? 12 : 4} className="mb-4" key={photo.noticiaId}>
                            <Card className='shadow-sm'>
                                {isFirstChild ? (
                                    <Row>
                                        <Col md={7}>
                                            <Card.Img variant="top" src={getFormattedBase64Image(photo.images[0])}
                                                className="img-fluid"
                                                style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </Col>
                                        <Col md={5}>
                                            <Card.Body>
                                                <small className='d-flex justify-content-start my-2'>{photo.fecha}</small>
                                                <h5 className='d-flex justify-content-start'>{photo.titulo}</h5>
                                                <Card.Text>
                                                    {photo.description.length > 1000 ? photo.description.substring(0, 500) + '...' : photo.description}
                                                </Card.Text>

                                                <Button
                                                    variant="primary"
                                                    onClick={() => handleLike(photo.noticiaId)} // Actualizado para usar noticiaId
                                                    disabled={likedPhotos.includes(photo.noticiaId.toString())}>
                                                    <FontAwesomeIcon icon={faThumbsUp} /> Me gusta {likes[index]}
                                                </Button>

                                                <Button variant="secondary mx-1" onClick={() => handleViewPhotos(photo)}>
                                                    <FontAwesomeIcon icon={faEye} /> Ver Fotografías
                                                </Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                ) : (
                                    // Diseño para las demás cards
                                    <>
                                        <Card.Img variant="top" src={getFormattedBase64Image(photo.images[0])} />
                                        <Card.Body>
                                            <small className='d-flex justify-content-start my-2'>{photo.fecha}</small>
                                            <h5 className='d-flex justify-content-start'>{photo.titulo}</h5>
                                            <Card.Text>
                                                {photo.description.length > 200 ? photo.description.substring(0, 350) + '...' : photo.description}
                                            </Card.Text>

                                            <Button
                                                variant="primary"
                                                onClick={() => handleLike(photo.noticiaId)} // Actualizado para usar noticiaId
                                                disabled={likedPhotos.includes(photo.noticiaId.toString())}>
                                                <FontAwesomeIcon icon={faThumbsUp} /> Me gusta {likes[index]}
                                            </Button>

                                            <Button variant="secondary mx-1" onClick={() => handleViewPhotos(photo)}>
                                                <FontAwesomeIcon icon={faEye} /> Ver Fotografías
                                            </Button>
                                        </Card.Body>
                                    </>
                                )}
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            <Pagination className="justify-content-center mt-4 custom-pagination">
                {[...Array(totalPages).keys()].map((page) => (
                    <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => setCurrentPage(page + 1)}>
                        {page + 1}
                    </Pagination.Item>
                ))}
            </Pagination>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" centered className='aaaaa'>
                <Modal.Header closeButton className='text-center'>
                    <Modal.Title>{selectedPhotoTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={8}>
                            <Carousel>
                                {selectedPhotoImages.map((image, idx) => (
                                    <Carousel.Item key={idx}>
                                        <img
                                            className="d-block w-100"
                                            src={getFormattedBase64Image(image)}
                                            alt={`Imagen ${idx}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                {selectedPhotoText}
                            </Card.Text>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PhotoGallery;
