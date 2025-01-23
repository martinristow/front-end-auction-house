// src/Pages/Register.jsx
import React from "react";
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
    const handleRegister = () => {
        window.location = "/";
    };

    return <RegisterForm onRegister={handleRegister} />;
};

export default Register;
