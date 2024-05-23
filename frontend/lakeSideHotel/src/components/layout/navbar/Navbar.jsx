import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './../../../index.css'

const navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light navbar-expand-lg px-5 shadow sticky-top'>
        <div className='container-fluid'>
            <Link to='/' className='navbar-brand'>
                <span className='hotel-color'>Lake Side Hotel</span>
            </Link>
            <button className='navbar-toggler' 
                type='button' data-bs-toggle='collapse' 
                data-bs-target='#navbarScrool' 
                aria-controls='#navbarScrool' 
                aria-expanded='false' 
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'>

                </span>
            </button>
            <div className='collapse navbar-collapse' id='navbarScrool'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scrool'>
                    <li className='nav-item'>
                        <NavLink to={'/browse-all-rooms'} className='nav-link' aria-current='page'>
                            Browse All Rooms
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/admin'} className='nav-link' aria-current='page'>
                            Admin
                        </NavLink>
                    </li>
                </ul>
                <ul className='d-flex navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to={'/find-booking'} className='nav-link' aria-current='page'>
                            Find My Booking
                        </NavLink>
                    </li>
                    <li className='nav-item-dropdown'>
                        <a></a>
                        <ul className='dropdown-menu'>
                            <li>
                                <Link to={'/login'} className='dropdown-item'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to={'/profile'} className='dropdown-item'>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to={'/logout'} className='dropdown-item'>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default navbar
