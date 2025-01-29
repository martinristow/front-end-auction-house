import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CreateAuctionForm.css'; // Importiraj CSS fajl

const CreateAuctionForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startingPrice, setStartingPrice] = useState("");
    const [endDate, setEndDate] = useState("");
    const [imageFile, setImageFile] = useState(null); // Додадено за датотеката
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleFileChange = (event) => { // se koristi za obrabotka na prikacena slika od korisnik
        const file = event.target.files[0]; // ja zemame prvata izbranata datoteka(slika)
        if (file) {
            const reader = new FileReader(); // vgraden JavaScript Api koj se koristi za citanje na sodrzinata na fajlovite
            reader.onload = () => { // koga fajlot e celosno procitan(onload)
                setImageFile(reader.result); // Конвертирање на сликата во Base64
            };
            reader.readAsDataURL(file); // ja konvertira slikata vo Base64 format koj moze direktno da se prikaze vo <img src="slika.jpg" />
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // ova ja sprecuva standardnata akcija na formata, koja obicno bi bilo osvezuvanje na stranata ili prakjanje na baranje kon serverot
        const auctionData = {
            title: title,
            description: description,
            starting_price: startingPrice,
            end_date: endDate,
            img: imageFile, // Base64 string на сликата
        };

        try {
            const response = await axios.post("http://localhost:8000/auctions", auctionData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            navigate("/categories/active-auctions");
        } catch (error) {
            console.error("Error creating auction:", error);

            if (error.response && error.response.status === 401) {
                setErrorMessage("Мора да бидете админ за да креирате аукција.");
            } else {
                setErrorMessage("An error occurred while creating the auction.");
            }
        }
    };

    return (
        <div className="create-auction-form">
            <h2>Креирај аукција</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Наслов:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Опис:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Почетна цена:</label>
                    <input
                        type="number"
                        value={startingPrice}
                        onChange={(e) => setStartingPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Завршување на аукцијата:</label>
                    <input
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Слика:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Креирај аукција</button>
            </form>
        </div>
    );
};

export default CreateAuctionForm;
