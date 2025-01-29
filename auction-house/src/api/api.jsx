import axios from "axios";

const API = axios.create({ // kreirame instanca na axios so baseURL: localhost:8000
    baseURL: "http://localhost:8000", // site baranja napraveni preku API ke se prakjaat do lokalniot server na porta 8000
});

// Dodavanje na Bearer Token
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token"); // pred da se isprati sekoe baranje go proveruvam localStorage za token
    if (token) { // dokolku ima zacuvan token go dodadame zaglavieto na baranjeto kako Bearer Token
        req.headers.Authorization = `Bearer ${token}`; // vazno e za avtentikacija, t.e serverot kje znae koj korisnik isprakja baranje
    }
    return req;
});

// Dodavanje globalna obrabotka na greski
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) { // ako serverot vrati error response se proveruva error response status i ako e 401 se brise tokenot
            localStorage.removeItem("token");
            window.location = "/login"; // go prenasocuvame na login rutata
        }
        return Promise.reject(error); // znaci deka funkcijata sto go povikala baranjeto ke mora da ja obraboti greskata
    }
);

export default API;
