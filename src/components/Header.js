import React from "react";

export default function Header() {
    return(
        <header className="header">
            <img 
                src="img/TrollFace.png" 
                alt="trollface"
                className="header-img"
            />
            <h2 className="header-title">Meme Generator</h2>
            <h3 className="header-course">React Course - Project 3</h3>
        </header>
    )
}