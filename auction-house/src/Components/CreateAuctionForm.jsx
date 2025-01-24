// src/Components/CreateAuctionForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CreateAuctionForm.css'; // Importiraj CSS fajl

const CreateAuctionForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startingPrice, setStartingPrice] = useState("");
    const [endDate, setEndDate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const auctionData = {
            title: title,
            description: description,
            starting_price: startingPrice,
            end_date: endDate,
        };

        try {
            const response = await axios.post("http://localhost:8000/auctions", auctionData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            navigate("/categories/active-auctions");
        } catch (error) {
            console.error("Error creating auction:", error);

            if (error.response && error.response.status === 401) {
                setErrorMessage("You must be an admin to create an auction.");
            } else {
                setErrorMessage("An error occurred while creating the auction.");
            }
        }
    };

    return (
        <div className="create-auction-form">
            <h2>Create Auction</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Starting Price:</label>
                    <input
                        type="number"
                        value={startingPrice}
                        onChange={(e) => setStartingPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Auction</button>
            </form>
        </div>
    );
};

export default CreateAuctionForm;
