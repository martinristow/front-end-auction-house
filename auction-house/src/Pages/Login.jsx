// src/Pages/Login.jsx
import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
    const handleLogin = () => {
        window.location = "/";
    };

    return <LoginForm onLogin={handleLogin} />;
};

export default Login;
