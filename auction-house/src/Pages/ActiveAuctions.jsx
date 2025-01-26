import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Footer from "./../Components/Footer.jsx"
import "./../Components/ActiveAuctions.css"

const ActiveAuctions = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await axios.get("http://localhost:8000/categories/active-auctions"); // Замени ја со точниот URL од бекендот
                setAuctions(response.data);
                setLoading(false);
            } catch (err) {
                setError("Could not fetch auctions. Please try again later.");
                setLoading(false);
            }
        };

        fetchAuctions();
    }, []);

    if (loading) {
        return <h2>Loading active auctions...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Активни Аукции</h1>
                <Row className="justify-content-center">
                    {auctions.map((auction) => (
                        <Col md={4} key={auction.id} className="mb-4">
                            <Card>
                                <Card.Body>
                                    {auction.img && (
                                        <div className="active-auction-image">
                                            <img src={auction.img} alt={auction.title} />
                                        </div>
                                    )}
                                    <Card.Title>{auction.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Опис:</strong> {auction.description.length > 30
                                        ? `${auction.description.slice(0, 30)}...`
                                        : auction.description} <br />
                                        <strong>Почетна цена:</strong> {auction.starting_price} MKD <br />
                                        <strong>Датум на завршување:</strong> {new Date(auction.end_date).toLocaleDateString()}
                                    </Card.Text>
                                    <Link to={`/auction/${auction.id}`}>
                                        <Button variant="primary"><b>Понуди сега</b></Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Footer />
        </>
    );
};

export default ActiveAuctions;
