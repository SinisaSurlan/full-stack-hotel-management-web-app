import React from 'react'
import { Container } from 'react-bootstrap'

const Parallax = () => {
  return (
    <div className='parallax mb-5'>
      <div className='overlay'></div>
      <Container className='text-center px-5 py-5 justify-content-center overlay-content'>
        <div className='animated-text bounceIn'>
            <h1>Welcome to <span className='hotel-color'>Lake Side Hotel</span></h1>
            <h3>We offer the best services for all your needs</h3>
        </div>
      </Container>
    </div>
  )
}

export default Parallax 
