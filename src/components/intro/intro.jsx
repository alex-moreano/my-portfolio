import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import {motion} from 'framer-motion';
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
  const transition = {duration: 2, type: 'spring'};
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="intro" id='Intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkmode? 'white':''}}>Hola! Soy</span>
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
            <motion.img 
                initial={{left: '-30%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={Glassesemoji} alt="emoji" />
            <motion.div 
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                style={{top:'-4%', left:'68%'}}
                className='floating-div'
                >
                    <FloatingDiv image={Crown} txttit='Web' txtsub='Developer'/>
            </motion.div>
            <motion.div 
                initial={{top: '18rem', left: '9rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                style={{top:'18rem', left:'0rem'}}
                className='floating-div'
                >
                    <FloatingDiv image={Thumbup} txttit='Texto2' txtsub='Texto2'/>
            </motion.div>
            {/*Blur divss*/}
            <div className="r-blur"></div>
            <div className="l-blur"></div>
        </div>
    </div>
  )
}

export default Intro;