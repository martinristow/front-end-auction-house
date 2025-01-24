// src/Pages/Home.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../Components/LogoutButton";
import HomeImage from "../Components/HomeImage.jsx";
import Footer from "../Components/Footer.jsx";
import Mainfunctionalities from "../Components/Mainfunctionalities.jsx";

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
       <>
           <div>
               <HomeImage />
               {/*<h1>Zdr</h1>*/}
                <Mainfunctionalities/>
               <Footer />
               {/*<h1>Zdravo</h1>*/}
           </div>

       </>
    );
};

export default Home;
