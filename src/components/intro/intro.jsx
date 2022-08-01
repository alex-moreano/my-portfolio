import React from 'react';
import './intro.css';
import FloatingDiv from '../floatingdiv/FloatingDivComponent';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Alex from '../../img/alex.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesemoji from '../../img/glassesimoji.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hola! Soy</span>
                <span>Alex Moreano</span>
                <span>Fullstack Developer Jr, con ganas de
                    desarrollar proyectos web desafiantes para
                    seguir creciendo en mi carrera!
                </span>
            </div>
            <button className="button i-button">Contratame!</button>
            <div className="i-icons">
                <a href='https://github.com/alex-moreano' target='_blank' rel="noreferrer"><img src={Github} alt="git" /></a>
                <a href='https://ec.linkedin.com/in/alex-moreano-b84574188' target='_blank' rel="noreferrer"><img src={Linkedin} alt="linkedin" /></a>
                <a href='https://www.instagram.com/alexmoreanom/' target='_blank' rel="noreferrer"><img src={Instagram} alt="instagram" /></a>       
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="vector1" />
            <img src={Vector2} alt="vector2" />
            <img src={Alex} alt="foto-alexmoreano" />
            <img src={Glassesemoji} alt="emoji" />
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txttit='Web' txtsub='Developer'/>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={Thumbup} txttit='Texto2' txtsub='Texto2'/>
            </div>
            {/*Blur divss*/}
            <div className="r-blur"></div>
            <div className="l-blur"></div>
        </div>
    </div>
  )
}

export default Intro;