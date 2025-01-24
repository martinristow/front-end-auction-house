import React, { useState, useEffect } from 'react';
import './../Components/Navigation.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoutButton from "./LogoutButton.jsx";
import { Link } from 'react-router-dom';

function Navigation() {
    // State za korisnikot
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Provjeri dali postoi token vo localStorage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (

        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Auction House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        {/*{!isLoggedIn && <Nav.Link as={Link} to="/register">Register</Nav.Link>}*/}
                        {/*{!isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}*/}
                        {isLoggedIn && (
                            <>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/auctions">Create Auctions</Nav.Link>
                            </>
                        )}
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/categories/active-auctions">Active Categories</NavDropdown.Item>
                            <NavDropdown.Item href="/categories/closed-auctions">Finished Categories</NavDropdown.Item>
                        </NavDropdown>
                        {!isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {!isLoggedIn && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                    </Nav>
                    <Form className="d-flex">

                        {isLoggedIn && <LogoutButton />}  {/* Show Logout button only if logged in */}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
