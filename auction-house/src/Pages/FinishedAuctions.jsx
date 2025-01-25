// src/pages/FinishedAuctionPage.js
import React from "react";
import ActiveAuctions from "../components/FinishedAuctions.jsx";
import Footer from "../components/Footer.jsx";

const FinishedAuctionPage = () => {
    return (
        <div>
            <ActiveAuctions />
            <Footer />
        </div>
    );
};

export default FinishedAuctionPage;
