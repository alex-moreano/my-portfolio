import React from "react";
import Toggle from '../toggle/Toggle';
import './navbar.css';
import { Link } from 'react-scroll';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    return (
        <div className="n-wrapper" style={{color: darkmode? 'white':'', background:darkmode? 'black':''}}>
            <div className="n-left">
                <div className="n-name">Alex Moreano</div>
                <Toggle/>
                <span>langsect</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Intro' smooth={true} activeClass="activeClass" className="link">
                        <li>Inicio</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass" className="link">
                        <li>Servicios</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} activeClass="activeClass" className="link">
                        <li>Experiencia</li>
                    </Link>
                    <Link spy={true} to='Enterprises' smooth={true} activeClass="activeClass" className="link">
                        <li>Empresas</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass="activeClass" className="link">
                        <li>Proyectos</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass" className="link">
                        <li>Testimonios</li>
                    </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                    <button className="button n-button">
                        Contacto
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;