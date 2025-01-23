import React, { useState } from 'react';
import './../Components/Navigation.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoutButton from "./LogoutButton.jsx";
import { Link } from 'react-router-dom';

function Navigation() {
    // State to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Toggle login status (you can replace this logic with actual login/authentication handling)
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Auction House</Navbar.Brand> {/* Use Link for routing */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {!isLoggedIn && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                        {!isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {isLoggedIn && (
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link> // Show profile link when logged in
                        )}
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Active Categories</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Finished Categories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        {isLoggedIn && <LogoutButton />} {/* Show Logout button only if logged in */}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
