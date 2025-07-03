// src/pages/FinishedAuctionPage.js
import React from "react";
import ActiveAuctions from "../Components/FinishedAuctions.jsx";
import Footer from "../Components/Footer.jsx";

const FinishedAuctionPage = () => {
    return (
        <div>
            <ActiveAuctions />
            <Footer />
        </div>
    );
};

export default FinishedAuctionPage;
