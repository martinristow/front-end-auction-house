import React, { useState, useEffect } from 'react';
import './../Components/Navigation.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoutButton from "./LogoutButton.jsx";
import { Link } from 'react-router-dom';
// import LogoImage from './../assets/logo1.png';
function Navigation() {

    const logo1 = "https://re1-s3-images.s3.eu-west-2.amazonaws.com/logo1.png"
    // State za korisnikot
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Proveri dali postoi token vo localStorage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (

        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="nav-brand-with-logo">
                    <img src={logo1} alt="Auction house Logo" className="logo" />
                    Аукциска Куќа
                </Navbar.Brand>
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
                            {/*<Nav.Link as={Link} to="/profile">Profile</Nav.Link>*/}
                            <Nav.Link as={Link} to="/auctions">Креирај Аукција</Nav.Link>
                            </>
                        )}
                        <NavDropdown title="Ауцкии" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/categories/all">Сите Аукции</NavDropdown.Item>
                            <NavDropdown.Item href="/categories/active-auctions">Активни Аукции</NavDropdown.Item>
                            <NavDropdown.Item href="/categories/closed-auctions">Завршени Аукции</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/whisky-auctions">Whisky</Nav.Link>
                        {!isLoggedIn && <Nav.Link as={Link} to="/login">Најави се</Nav.Link>}
                        {!isLoggedIn && <Nav.Link as={Link} to="/register">Регистрирај се</Nav.Link>}
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
