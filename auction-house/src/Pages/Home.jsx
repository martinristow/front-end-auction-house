// src/Pages/Home.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../Components/LogoutButton";
import HomeImage from "../Components/HomeImage.jsx";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in to access this page.");
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            {/*<h1>Welcome to the Home Page!</h1>*/}
            <HomeImage />
        </div>
    );
};

export default Home;
