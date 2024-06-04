import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms} from '../utils/APIFunctions'
import Loader from '../layout/loader/Loader'
import {Link} from 'react-router-dom'
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap'

const RoomCarousel = () => {
    const [room, setRoom] = useState([{id: 0, photo: null, roomType: "", roomPrice: ""}]);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllRooms().then(data => {
            setRoom(data);
            setIsLoading(false);
        }).catch(error => {
            setErrorMessage(error.message);
            setIsLoading(false);
        })
    },[])   

    if(isLoading){
        return <Loader />
    }

    if(errorMessage){
        return <div className='text-danger mb-5 mt-5'>Error loading rooms : {errorMessage}</div>
    }

  return (
    <section className='bg-light shadow'>
        <Link to={"/browse-all-rooms"} className="hotel-color text-center">
            Browse all rooms
        </Link>
        <Container>
            <Carousel className='mt-3 mb-5 p-3 rounded'>
                {
                    [...Array(Math.ceil(room.length / 4))].map((_, index) => (
                        <Carousel.Item key={index}>
                            <Row>
                                {room.slice(index * 4, index * 4 + 4).map((room) => (
                                    <Col key={room.id} className='mb-4' xs={12} sm={6} md={4} lg={3}>
                                        <Card className='shadow'>
                                            <Link to={`/book-room/${room.id}`}>
                                                <Card.Img variant="top" 
                                                    src={`data:image/png;base64,${room.photo}`}  
                                                    alt={"Room photo"} 
                                                    className='w-100' 
                                                    style={{height: "200px"}}
                                                />
                                            </Link>
                                            <Card.Body>
                                                <Card.Title className='hotel-color'>{room.roomType}</Card.Title>
                                                <Card.Text className='room-price'>Price: ${room.roomPrice}</Card.Text>
                                                <div className='flex-shrink-0'>
                                                    <Link to={`/book-room/${room.id}`} 
                                                        className="btn btn-hotel btn-sm">   
                                                            Book Now
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </Container>
    </section>
  )
}

export default RoomCarousel
