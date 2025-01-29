import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuctionDetail.css';

function AuctionDetails() {
    const { id } = useParams(); // go zimame id-to od URL-to
    const navigate = useNavigate();
    const [auction, setAuction] = useState(null);
    const [remainingTime, setRemainingTime] = useState(0);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found!");
            return;
        }

        try {
            const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            setCurrentUserId(decodedToken.user_id);
        } catch (error) {
            console.error("Invalid token format:", error);
        }

        axios.get(`http://localhost:8000/auctions/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => setAuction(response.data))
            .catch(error => console.error('Error fetching auction:', error));
    }, [id]);

    useEffect(() => {
        if (!auction) return;

        const interval = setInterval(() => {
            const endDate = new Date(auction.end_date);
            const timeLeft = Math.max(endDate - new Date(), 0);
            setRemainingTime(timeLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, [auction]);


    if (!auction) {
        return <div className="no-auction"><h1>Аукцијата не постои!</h1></div>;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    const deleteAuction = () => {
        const confirmation = window.confirm("Дали сте сигурни дека сакате да ја избришете аукцијата?");
        if (confirmation) {
            const token = localStorage.getItem("token");
            axios.delete(`http://localhost:8000/auctions/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(() => {
                    alert("Аукцијата е успешно избришана!");
                    navigate("/categories/all");
                })
                .catch(error => {
                    console.error("Error deleting auction:", error);
                    alert("Неуспешно бришење на аукцијата!");
                });
        } else {
            alert("Аукцијата не е избришана.");
        }
    };

    return (
        <div className="auction-container">
            <h1 className="auction-title">{auction.title}</h1>
            <br/>
            <div className="auction-details">
                {auction.img && (
                    <div className="detail-auction-image">
                        <img src={auction.img} alt={auction.title} />
                    </div>
                )}
                <br/><hr/>

                <h5><b>Детални информации</b></h5><br/>
                <p><strong>Опис:</strong> {auction.description}</p>
                <p><strong>Почетна цена:</strong> {auction.starting_price} MKD</p>
                <p><strong>Датум на завршување:</strong> {new Date(auction.end_date).toLocaleDateString()}</p>
                <p><strong>Останато време:</strong> {days} дена {hours} часа {minutes} минути {seconds} секунди</p><br/>
                <hr/>
                <h5><b>Контакт информации за сопственикот</b></h5><br/>
                <p><strong>Сопственик:</strong> {auction.owner.username}</p>
                <p><strong>Контакт:</strong> {auction.owner.email}</p>
                {Number(auction?.owner_id) === Number(currentUserId) && (
                    <button className="delete-button" onClick={deleteAuction}>
                        Избриши ја аукцијата
                    </button>
                )}

            </div>
        </div>
    );
}

export default AuctionDetails;
