import React, { useState } from "react";
import API from "../api/api";

// forma za podatocite koj sto ke gi vnesuva korisnikot
const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        is_admin: false, // Додадено поле
    });
    // Gi azurira podatocite vo sostojbata koga korisnikot menuva nekoj od podatocite
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value, // За checkbox користи `checked`
        });
    };
    // Gi isprakja podatocite do serverot za registracija. Ako e uspesna ke se zacuva tokenot vo localStorage
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/register", formData, {
                headers: { "Content-Type": "application/json" },
            });
            localStorage.setItem("token", res.data.access_token);
            alert("Registration successful!");
            if (onRegister) onRegister();
        } catch (err) {
            console.error(err.response.data);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={formData.email}
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

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        id="is_admin"
                        name="is_admin"
                        className="form-check-input"
                        checked={formData.is_admin}
                        onChange={handleChange}
                    />
                    <label htmlFor="is_admin" className="form-check-label">
                        Register as Admin
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
