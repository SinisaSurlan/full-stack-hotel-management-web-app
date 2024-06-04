import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RoomCart = ({room}) => {
  return (
    <Col key={room.id}>   
      <Card.Body className='d-flex flex-wrap align-items-center shadow p-3 mb-3   bg-body rounded'>
        <div className='d-flex flex-shrink-0 mr-3 w-100'>
            <Card.Img variant="top" src={`data:image/png;base64,${room.photo}`}  alt={"Room photo"} style={{width: "100%", maxWidth: "200px", height: "auto"}}/>
            <div className='flex-grow-1 ml-3 px-5'>
                <Card.Title className='hotel-color'>{room.roomType}</Card.Title>
                <Card.Text className='room-price'>Price: ${room.roomPrice}</Card.Text>
                <Card.Text>Some room info goes here for the guest throughout their stay</Card.Text>
            </div>
            <div className='flex-shrink-0 mt-3 align-self-center'>
                <Link to={'bookings/' + room.id} className="btn btn-hotel btn-sm">Book Now</Link>
            </div>
        </div>
      </Card.Body>
    </Col>
  )
}

export default RoomCart
