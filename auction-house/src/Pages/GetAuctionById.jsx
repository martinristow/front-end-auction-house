import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AuctionDetails() {
    const { id } = useParams();  // Вземањето на ID-то од URL
    const [auction, setAuction] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");  // Вземи го токенот од localStorage

        // Правиме API повик за да ги земеме деталите за аукцијата
        axios.get(`http://localhost:8000/auctions/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,  // Додај го токенот во заглавието
            }
        })
            .then(response => {
                setAuction(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the auction!', error);
            });
    }, [id]);

    if (!auction) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{auction.title}</h1>
            <p><strong>Опис:</strong> {auction.description}</p>
            <p><strong>Почетна цена:</strong> {auction.starting_price} MKD</p>
            <p><strong>Датум на завршување:</strong> {new Date(auction.end_date).toLocaleDateString()}</p>
            <p><strong>Локација:</strong> {auction.location}</p>
            {/* Додадете други полиња кои ги сакате да се прикажуваат */}
        </div>
    );
}

export default AuctionDetails;
