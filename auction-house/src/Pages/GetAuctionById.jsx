import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuctionDetails from './../Components/AuctionDetail.jsx';
import BidsDetail from './../Components/BidsDetail.jsx';
import CreateBid from "../Components/CreateBid.jsx";
import Footer from "../Components/Footer.jsx";

function AuctionPage() {
    const { id } = useParams();
    const [bids, setBids] = useState([]);

    const fetchBids = () => {
        const token = localStorage.getItem('token');
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/bids/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
                setBids(response.data);
            })
            .catch(error => console.error('Error fetching bids', error));
    };

    useEffect(() => {
        fetchBids();
    }, [id]);

    const updateBids = (newBid) => {
        setBids((prevBids) => [newBid, ...prevBids]);
    };

    return (
        <div>
            <AuctionDetails id={id} />
            <BidsDetail bids={bids} />
            <CreateBid auctionId={id} updateBids={updateBids} />
            <Footer />
        </div>
    );
}

export default AuctionPage;
