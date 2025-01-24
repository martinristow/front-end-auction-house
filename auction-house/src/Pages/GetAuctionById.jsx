import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuctionDetails from './../Components/AuctionDetail.jsx';
import BidsDetail from './../Components/BidsDetail.jsx';
import CreateBid from "../Components/CreateBid.jsx";

function AuctionPage() {
    const { id } = useParams(); // Auction ID од URL
    const [bids, setBids] = useState([]); // Држиме понуди

    // Функција за вчитување на понудите од серверот
    const fetchBids = () => {
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:8000/bids/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
                setBids(response.data); // Сортирање од најново кон најстаро
            })
            .catch(error => console.error('Error fetching bids', error));
    };

    // Освежување при прво вчитување или промена на ID
    useEffect(() => {
        fetchBids();
    }, [id]);

    // Функција за локално додавање на нова понуда
    const updateBids = (newBid) => {
        setBids((prevBids) => [newBid, ...prevBids]); // Додавање на врвот
    };

    return (
        <div>
            <AuctionDetails id={id} />
            <BidsDetail bids={bids} /> {/* Пропси со понуди */}
            <CreateBid auctionId={id} updateBids={updateBids} /> {/* Ажурирање на понудите */}
        </div>
    );
}

export default AuctionPage;
