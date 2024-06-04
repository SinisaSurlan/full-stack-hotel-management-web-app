import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './../../../index.css'

function MyNavbar() {
    const[showAccount, setShowAccount] = useState(false);

  const handleShowAccount = () => {
    setShowAccount(!showAccount);
  };

  return (
    <Navbar bg="body-tertiary" expand="lg" className="px-5 shadow sticky-top">
      {Link ? (
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none nav-link">
            <span className="hotel-color me-2">Lake Side Hotel</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
              {Nav.Link ? (
                <>
                  <Nav.Link as={Link} to="/browse-all-rooms" className="nav-link ms-3 nav-item">
                    Browse all rooms
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="ms-md-3 nav-item">
                    Admin
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
            <Nav className="d-flex navbar-nav">
              {Nav.Link ? (
                <Nav.Link as={Link} to="/find-booking" className="nav-item">
                  Find My Booking
                </Nav.Link>
              ) : null}
              {NavDropdown ? (
                <NavDropdown title="Account"
                    onClick={handleShowAccount} 
                    className={`nav-item ${showAccount ? 'show' : ''}`} id="basic-nav-dropdown">
                  {NavDropdown.Item ? (
                    <>
                      <NavDropdown.Item as={Link} to="/login">
                        Login
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/profile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} className="mt-2 border-top" to="/logout">
                        Logout
                      </NavDropdown.Item>
                    </>
                  ) : null}
                </NavDropdown>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </div>
      ) : null}
    </Navbar>
  );
}

export default MyNavbar;
