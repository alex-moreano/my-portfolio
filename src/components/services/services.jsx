import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import './services.css';
import Card from '../card/card';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';


const Services  = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="services">
        {/*left side */}
        <div className="s-leftside">
            <span style={{color:darkmode? 'white':''}}>Yo te</span>
            <span>Ofrezco</span>
            <spane>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt illum ab 
                <br />
                veniam quis quibusdam!
            </spane>
            <a href="https://www.google.com" className="button s-button" target="_blank" rel="noreferrer">Descarga mi CV</a>
            <div className="r-blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/*right side */}
        <div className="s-rightside">
            <div style={{left:'14rem'}}>
                <Card 
                    image={Heart}
                    header={'Design'}
                    detail={'Figma, Sketch, Photoshop, Canva'}
                />
            </div>
            <div style={{top:'12rem', left:'-4rem'}}>
                <Card 
                    image={Glasses}
                    header={'Developer'}
                    detail={'Html, Css, Javascript, React'}
                />
            </div>
            <div style={{top:'25rem', left:'20rem'}}>
                <Card 
                    image={Humble}
                    header={'UI/UX'}
                    detail={'Cualquier texto que vaya aqui va en la card'}
                />
            </div>
            <div className="r-blur s-blurtwo" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
};

export default Services;
