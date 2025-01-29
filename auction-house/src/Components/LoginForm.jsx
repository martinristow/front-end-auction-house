// src/Components/LoginForm.jsx
import React, { useState } from "react";
import API from "../api/api";

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(""); // Состојба за грешка

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    // ...formData ja obrabotuva sekoja promena vo formata, i ja azurira sostojbata formData
    // e.target.name -> ovoj atribut se koristi za da se odredi dali poleto sto se promenuva e pusername ili password za da moze da se obnovat ovie vrednosti.
    // e.target.value -> se primenuva novata vrednost na poleto, bez da se izgubat prethodno vnesenite podatoci (poradi spread operatorot ...formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // sprecuva osvezuvanje na stranicata
        const form = new FormData();
        form.append("username", formData.username);
        form.append("password", formData.password);

        try {
            const res = await API.post("/login", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            localStorage.setItem("token", res.data.access_token); // po uspesen login serverot go vrakja JWT token
            setErrorMessage(""); // Исчисти ја грешката ако е успешен логин
            // alert("Login successful!");
            if (onLogin) onLogin();
        } catch (err) {
            // console.error(err.response.data);
            // Постави пораката за грешка
            setErrorMessage("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email address</label>
                    <input
                        type="email"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Enter email"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <div className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {errorMessage && ( // Прикажи ја пораката за грешка ако постои
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
