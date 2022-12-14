import React from "react";
import Toggle from '../toggle/Toggle';
import './navbar.css';
import ESP from '../../img/espana.png';
import FRA from '../../img/francia.png';
import ENG from '../../img/reino-unido.png';
import { Link } from 'react-scroll';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import ReactTooltip from "react-tooltip";

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    return (
        <div className="n-wrapper" style={{color: darkmode? 'white':'', background:darkmode? 'black':''}}>
            <div className="n-left">
                <div className="n-name" style={{color: darkmode? 'white':''}}>Alex Moreano</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                    <Link spy={false} to='Intro' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Inicio</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Servicios</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Experiencia</li>
                    </Link>
                    <Link spy={true} to='Enterprises' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Empresas</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Proyectos</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Testimonios</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true} activeClass="activeClass" className="link">
                        <li style={{color: darkmode? 'white':''}}>Contacto</li>
                    </Link>
                    </ul>
                </div>
                <div className="n-languageselector">
                        <img src={ENG} alt="england" data-tip data-for='eng-tooltip'/>
                        <ReactTooltip
                            id='eng-tooltip'
                            place="bottom"
                            className="tooltip"
                        >
                            Translation to English
                        </ReactTooltip>
                        <img src={ESP} alt="spain" data-tip data-for='esp-tooltip'/>
                        <ReactTooltip
                            id='esp-tooltip'
                            place="bottom"
                            className="tooltip"
                        >
                            Traducir al Espa??ol
                        </ReactTooltip>
                        <img src={FRA} alt="france" data-tip data-for='fra-tooltip'/>
                        <ReactTooltip
                            id='fra-tooltip'
                            place="bottom"
                            className="tooltip"
                        >
                            Traduire au Fran??ais
                        </ReactTooltip>
                </div>
            </div>
        </div>
    )
};

export default Navbar;