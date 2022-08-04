import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import Typical from 'react-typical';
import './intro.css';
import FloatingDiv from '../floatingdiv/FloatingDivComponent';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Alex from '../../img/alex.gif';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesemoji from '../../img/meme.gif';

const Intro = () => {
  const transition = {duration: 2, type: 'spring'};
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="intro" id='Intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkmode? 'white':''}}>Hola! Soy</span>
                <span>
                    <Typical
                        loop={Infinity}
                        wrapper='span'
                        steps={[
                            'Alex Moreano',1000,
                            'Ingeniero en Sistemas',1000,
                            'Desarrollador fullstack Jr',1000,
                            'Diseniador',1000,
                            'Traductor',1000,
                        ]}
                    />
                </span>
                <span>
                    <Typical
                        loop={1}
                        wrapper='span'
                        steps={[
                            'Fullstack Developer Jr, con ganas de desarrollar proyectos web desafiantes para seguir creciendo en mi carrera!',
                            1000
                        ]}
                    />
                </span>
            </div>
            <button className="button i-button">Contratame!</button>
            <div className="i-icons">
                <a href='https://github.com/alex-moreano' target='_blank' rel="noreferrer"><img src={Github} alt="git"/></a>
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