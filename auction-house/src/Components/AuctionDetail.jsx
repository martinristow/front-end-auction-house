import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AuctionDetail.css'; // Вклучи ја CSS датотеката

function AuctionDetails() {
    const { id } = useParams(); // Вземање на ID-то од URL
    const [auction, setAuction] = useState(null); // Податоци за аукцијата

    useEffect(() => {
        const token = localStorage.getItem("token");

        // API повик за деталите за аукцијата
        axios.get(`http://localhost:8000/auctions/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setAuction(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the auction!', error);
            });
    }, [id]);

    if (!auction) {
        return <div className="no-auction"><h1>Аукцијата не постои!</h1></div>;
    }

    return (
        <div className="auction-container">
            <h1 className="auction-title">{auction.title}</h1>
            <div className="auction-details">
                <p><strong>Опис:</strong> {auction.description}</p>
                <p><strong>Почетна цена:</strong> {auction.starting_price} MKD</p>
                <p><strong>Датум на завршување:</strong> {new Date(auction.end_date).toLocaleDateString()}</p>
                <p><strong>Локација:</strong> {auction.location}</p>
            </div>
        </div>
    );
}

export default AuctionDetails;
