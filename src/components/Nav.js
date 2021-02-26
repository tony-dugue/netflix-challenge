import React, { useState, useEffect } from 'react';

import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            (window.scrollY > 100) ? handleShow(true) : handleShow(false);
        });
        return () => window.removeEventListener("scroll");
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>

            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/800px-Logo_Netflix.png"
                alt="Netflix Logo"
            />

            <img className="nav__avatar" src="/avatar.png" alt="Avatar" />

        </div>
    )
}

export default Nav;

