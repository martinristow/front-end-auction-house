import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spinner, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

const WhiskyHunter = () => {
    const [auctionsData, setAuctionsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuctionsData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get("https://api.allorigins.win/raw?url=https://whiskyhunter.net/api/auctions_data/?format=json", {
                    headers: {
                        accept: "application/json",  // This ensures we are getting JSON format
                    },
                });
                setAuctionsData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAuctionsData();
    }, []);

    if (loading) return <Spinner animation="border" />;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="container">
                <h1>Аукции за виски</h1>
                {Array.isArray(auctionsData) && auctionsData.length > 0 ? (
                    <Row>
                        {auctionsData.slice(0, 9).map((auction, index) => (
                            <Col key={index} sm={12} md={4} lg={4} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{auction.auction_name}</Card.Title>
                                        <Card.Text>
                                            <strong>Датум:</strong> {auction.dt}<br />
                                            <strong>Макс. понуда:</strong> {auction.winning_bid_max}<br />
                                            <strong>Мин. понуда:</strong> {auction.winning_bid_min}<br />
                                            <strong>Просечна понуда:</strong> {auction.winning_bid_mean}<br />
                                            <strong>Вредност на аукцијата:</strong> {auction.auction_trading_volume}<br />
                                            <strong>Број на аукциски предмети:</strong> {auction.auction_lots_count}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div>Нема податоци за аукции</div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default WhiskyHunter;
