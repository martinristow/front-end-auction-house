import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DesignAllAuctions.css"

const FinishedAuctions = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/categories/closed-auctions`); // backend ruta za zavrseni aukcii
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
        return <h2>Loading auctions...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center">Затворени Аукции</h1>
            <Row className="justify-content-center">
                {auctions.map((auction) => (
                    <Col md={4} key={auction.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                {auction.img && (
                                    <div className="all-auction-image">
                                        <img src={auction.img} alt={auction.title} />
                                    </div>
                                )}
                                <Card.Title>{auction.title}</Card.Title>
                                <Card.Text>
                                    <strong>Опис:</strong> {auction.description.length > 30
                                    ? `${auction.description.slice(0, 30)}...`
                                    : auction.description} <br />
                                    <strong>Цена:</strong> {auction.starting_price} MKD <br />
                                    <strong>Завршена на:</strong> {new Date(auction.end_date).toLocaleDateString('mk-MK', { day: '2-digit', month: '2-digit' }).replace(',', '')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FinishedAuctions;
