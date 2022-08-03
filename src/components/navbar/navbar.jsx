import React from "react";
import Toggle from '../toggle/Toggle';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Alex Moreano</div>
                <Toggle/>
                <span>langsect</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Inicio</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                        <li>Servicios</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} activeClass="activeClass">
                        <li>Experiencia</li>
                    </Link>
                    <Link spy={true} to='Enterprises' smooth={true} activeClass="activeClass">
                        <li>Empresas</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass="activeClass">
                        <li>Proyectos</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass">
                        <li>Testimonios</li>
                    </Link>
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