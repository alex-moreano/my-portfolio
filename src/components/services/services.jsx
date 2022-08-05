import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import Typical from 'react-typical';
import './services.css';
import Card from '../card/card';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';


const Services  = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  const transition = {duration: 2, type: 'spring'};
  return (
    <div className="services" id='Services'>
        {/*left side */}
        <div className="s-leftside">
            <span style={{color:darkmode? 'white':''}}>Yo te</span>
            <span>
                <Typical
                    loop={1}
                    wrapper='span'
                    steps={[
                        'ofrezco...',
                        1000
                    ]}
                />
            </span>
            <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt illum ab 
                <br />
                veniam quis quibusdam!
            </span>
            <a href="https://www.google.com" className="button s-button" target="_blank" rel="noreferrer">Descarga mi CV</a>
            <div className="r-blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/*right side */}
        <div className="s-rightside">
            <motion.div 
                style={{left:'14rem'}}
                initial={{left: '25%'}}
                whileInView={{left: '12rem'}}
                transition={transition}>
                <Card 
                    image={Heart}
                    header={'Design'}
                    detail={'Figma, Sketch, Photoshop, Canva'}
                />
            
            </motion.div>
            <motion.div 
                style={{top:'12rem', left:'-4rem'}}
                initial={{left: '25%'}}
                whileInView={{left: '-4rem'}}
                transition={transition}>
                <Card 
                    image={Glasses}
                    header={'Developer'}
                    detail={'Html, Css, Javascript, React'}
                />
            </motion.div>
            <motion.div 
                style={{top:'17rem', left:'20rem'}}
                initial={{left: '25%'}}
                whileInView={{left: '17rem'}}
                transition={transition}>
                <Card 
                    image={Humble}
                    header={'UI/UX'}
                    detail={'Cualquier texto que vaya aqui va en la card'}
                />
            </motion.div>
            <div className="r-blur s-blurtwo" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
};

export default Services;
