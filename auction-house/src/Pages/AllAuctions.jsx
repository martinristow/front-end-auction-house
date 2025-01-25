import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import AuctionCard from "../Components/AllAuctions.jsx"; // Правилно именување на компонентата
import Footer from "./../Components/Footer.jsx";

const AllAuctions = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await axios.get("http://localhost:8000/categories/all");
                console.log(response.data); // Log the auction data here
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
        return <h2>Loading all auctions...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Сите Аукции</h1>
                <Row className="justify-content-center">
                    {auctions.map((auction) => (
                        <AuctionCard key={auction.id} auction={auction} />
                    ))}
                </Row>
            </div>
            <Footer />
        </>
    );
};

export default AllAuctions;
