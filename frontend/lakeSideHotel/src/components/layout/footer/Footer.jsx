import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    let today = new Date();
    let year = today.getFullYear();
  return (
    <footer className='bg-dark text-white py-3 footer mt-5'>
        <Container>
            <Row>
                <Col xs={12} md={12} className='text-center'>
                    <p>Copyright &copy; {year} Lake Side Hotel</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
