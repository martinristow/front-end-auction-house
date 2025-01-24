// src/Pages/CreateAuctions.jsx
import React from "react";
import CreateAuctionForm from "../Components/CreateAuctionForm"; // Importujte komponentu
import Footer from "../Components/Footer";
const CreateAuctions = () => {
    return (
        <div>
            <CreateAuctionForm />
            <Footer/>
        </div>
    );
};

export default CreateAuctions;
