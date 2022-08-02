import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import './projects.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Projects = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="projects">
         <div className="s-leftside">
            <span style={{color:darkmode? 'white':''}}>He trabajado con</span>
            <span>proyectos en:</span>
            <spane>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt illum ab 
                <br />
                veniam quis quibusdam!
                <br />
                veniam quis quibusdam!
                <br />
                veniam quis quibusdam!
            </spane>
            <button className="button i-button">Contratame!</button>
            <div className="r-blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/*right side */}
        <div className="p-right">
            <div className="p-mainCircle">
                <div className="p-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="p-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="p-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="p-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="p-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/*BACK circles */}
            <div className="p-backCircle blueCircle"></div>
            <div className="p-backCircle yellowCircle"></div>
        </div>
    </div>
  )
};

export default Projects;