import React from "react";
import "./HomeImage.css";
import Slika from "./../assets/slika.png";

function FluidExample() {
    return (
        <div className="full-screen-container">
            <img src={Slika} alt="Home" className="full-screen-image" />
            <div className="image-overlay">
                <h1 className="patot-do-sovrsenata-ponuda">Патот до совршена понуда!</h1>
                <p className="tekst">Создадете, следете и освојувајте аукции со леснотија и сигурност. Нашата платформа ви овозможува едноставен пристап до различни аукции, каде што можете да ги следите вашите понуди во реално време и да бидете уверени дека секој чекор е безбеден и сигурен.</p>
                <button className="cta-button">Започнете сега</button>
            </div>
        </div>
    );
}



export default FluidExample;
