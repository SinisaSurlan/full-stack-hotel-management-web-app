import React from 'react'

const MainHeader = () => {
  return (
    <header className='header-banner mb-5 d-flex align-items-center justify-content-center'>
        <div className='overlay'>
        </div>
        <div className='animated-text ovarlay-content text-center header-title'>
            <h1>Welcome to <span className='hotel-color'>Lake Side Hotel</span></h1>
            <h4>Best hotel in town</h4>
        </div>
    </header>
  )
}

export default MainHeader
