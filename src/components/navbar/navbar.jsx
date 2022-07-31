import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Alex Moreano</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Inicio</li>
                        <li>Servicios</li>
                        <li>Experiencia</li>
                        <li>Proyectos</li>
                        <li>Testimonios</li>
                    </ul>
                </div>
                <button className="button n-button">
                        Contacto
                    </button>
            </div>
        </div>
    )
};

export default Navbar;