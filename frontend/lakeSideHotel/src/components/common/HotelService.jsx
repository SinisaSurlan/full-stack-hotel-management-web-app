import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from './Header'
import { FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi } from 'react-icons/fa'

const HotelService = () => {
  return (
    <>
        <Container className='mb-2'>
            <Header title={"Hotel Services"}/>
            <Row>
                <h4 className='text-center'>
                    Services at <span className='hotel-color'>Lake Side Hotel</span>
                    <span className='gap-2'>
                        <FaClock /> 24-Hour Front Desk
                    </span>
                </h4>
            </Row>
            <hr />
            <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaWifi />
                                Wifi
                            </Card.Title>
                            <Card.Text>
                                Stay connected with the best Wi-Fi internet access.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaUtensils />
                                Breakfast
                            </Card.Title>
                            <Card.Text>
                                Star
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaTshirt />
                                Laundary
                            </Card.Title>
                            <Card.Text>
                                Keep your clothes clean and fresh with our laundary.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaCocktail />
                                Mini-bar
                            </Card.Title>
                            <Card.Text>
                                Enjoy a drink in our mini-bar.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaParking />
                                Parking
                            </Card.Title>
                            <Card.Text>
                                Park your vehicle in our parking lot.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaSnowflake />
                                Air conditioning
                            </Card.Title>
                            <Card.Text>
                                Stay comfortable with our air conditioning.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default HotelService
