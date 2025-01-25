import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AuctionCard = ({ auction }) => {
    // Check if the auction is active based only on is_active
    const isAuctionActive = auction.is_active; // Samo proverka na is_active
    console.log(auction);
    return (
        <Col md={4} key={auction.id} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>{auction.title}</Card.Title>
                    <Card.Text>
                        <strong>Опис:</strong> {auction.description} <br />
                        <strong>Почетна цена:</strong> {auction.starting_price} MKD <br />
                        <strong>Датум на завршување:</strong> {new Date(auction.end_date).toLocaleDateString()}
                    </Card.Text>

                    {/* Conditional rendering of the button or message */}
                    {isAuctionActive ? (
                        <Link to={`/auction/${auction.id}`}>
                            <Button variant="primary"><b>Понуди сега</b></Button>
                        </Link>
                    ) : (
                        <p><i>Аукцијата е завршена.</i></p>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AuctionCard;
