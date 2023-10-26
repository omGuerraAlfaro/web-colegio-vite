import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PhotoGallery.css';

function bufferToBase64(buffer: number[]): string {
    const binaryString = buffer.map(byte => String.fromCharCode(byte)).join('');
    return btoa(binaryString);
}

function getFormattedBase64Image(imageObject: any): string {
    const prefix = 'data:image/jpeg;base64,';

    // Verifica si el objeto tiene la estructura esperada
    if (imageObject && imageObject.image_data && Array.isArray(imageObject.image_data.data)) {
        // Convierte el buffer a base64
        const base64String = bufferToBase64(imageObject.image_data.data);
        return prefix + base64String;
    } else {
        console.warn('Unexpected image data format:', imageObject);
        return '';
    }
}

function PhotoGallery({ photos }: { photos: any }) {
    const [likes, setLikes] = useState(new Array(photos.length).fill(0));
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 6;

    const handleLike = (index: any) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const totalPages = Math.ceil(photos.length / photosPerPage);

    return (
        <div className="gallery">
            <Row>
                {currentPhotos.map((photo: any, index: any) => (
                    <Col xs={12} sm={6} md={4} className="mb-4" key={indexOfFirstPhoto + index}>
                        <Card className='shadow-sm'>
                            <Card.Img variant="top" src={getFormattedBase64Image(photo.images[0])} />
                            <Card.Body>
                                <h5 className='d-flex justify-content-start'>{photo.titulo}</h5>
                                <small className='d-flex justify-content-end'>{photo.fecha}</small>
                                <Card.Text>{photo.description}</Card.Text>
                                <Button variant="secondary" onClick={() => handleLike(indexOfFirstPhoto + index)}>
                                    <FontAwesomeIcon icon={faThumbsUp} /> Me gusta {likes[indexOfFirstPhoto + index]}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Pagination className="justify-content-center mt-4 custom-pagination">
                {[...Array(totalPages).keys()].map((page) => (
                    <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => setCurrentPage(page + 1)}>
                        {page + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
}

export default PhotoGallery;

