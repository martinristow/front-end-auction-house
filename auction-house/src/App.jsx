// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation.jsx";
import FinishedAuctions from "./Pages/FinishedAuctions.jsx";
import ActiveAuctions from "./Pages/ActiveAuctions.jsx";
import GetAuctionById from "./Pages/GetAuctionById.jsx";
import PrivateRoute from './Components/PrivateRoute';
import CreateAuction from "./Pages/CreateAuction.jsx";
import AllAuctions from "./Pages/AllAuctions.jsx";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categories/all" element={<AllAuctions />} />
                <Route path="/categories/closed-auctions" element={<FinishedAuctions />} />
                <Route path="/categories/active-auctions" element={<ActiveAuctions />} />

                {/* Use PrivateRoute to wrap protected route */}
                <Route path="/auction/:id" element={<PrivateRoute><GetAuctionById /></PrivateRoute>} />
                <Route path="/auctions" element={<PrivateRoute><CreateAuction /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
