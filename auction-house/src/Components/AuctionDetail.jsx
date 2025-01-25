import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AuctionDetail.css';

function AuctionDetails() {
    const { id } = useParams();
    const [auction, setAuction] = useState(null);
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");

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

    useEffect(() => {
        if (auction) {
            // Функција која ќе се обновува секој втор
            const interval = setInterval(() => {
                const endDate = new Date(auction.end_date);
                const timeLeft = Math.max(endDate - new Date(), 0);
                setRemainingTime(timeLeft);
            }, 1000);

            // Очисти интервал кога компонентата ќе се демонтра
            return () => clearInterval(interval);
        }
    }, [auction]);

    if (!auction) {
        return <div className="no-auction"><h1>Аукцијата не постои!</h1></div>;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    return (
        <div className="auction-container">
            <h1 className="auction-title">{auction.title}</h1>
            <div className="auction-details">
                <br/>
                <p><h5><b>Подетални информации</b></h5></p>
                <p><strong>Опис:</strong> {auction.description}</p>
                <p><strong>Почетна цена:</strong> {auction.starting_price} MKD</p>
                <p><strong>Датум на завршување:</strong> {new Date(auction.end_date).toLocaleDateString()}</p>
                <p><strong>Останато време:</strong> {days} дена {hours} часа {minutes} минути {seconds} секунди</p>
                <br/>
                <hr/><br/>
                <p><h5><b>Контакт информации за сопственикот</b></h5></p>
                <p><strong>Сопственик:</strong> {auction.owner.username}</p>
                <p><strong>Контакт:</strong> {auction.owner.email}</p>
            </div>
        </div>
    );
}

export default AuctionDetails;
