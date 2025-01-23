import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000", // nasata localhost ruta
});

// Dodavanje na Bearer Token
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// Dodavanje globalna obrabotka na greski
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            window.location = "/login";
        }
        return Promise.reject(error);
    }
);

export default API;
