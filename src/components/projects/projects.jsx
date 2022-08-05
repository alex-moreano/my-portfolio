import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';
import Typical from 'react-typical';
import './projects.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Projects = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  const transition = {duration: 3, type: 'spring'};
  return (
    <div className="projects" id='Enterprises'>
         <div className="s-leftside">
            <span style={{color:darkmode? 'white':''}}>He trabajado con</span>
            <span>
                <Typical
                    loop={1}
                    wrapper='span'
                    steps={[
                        'proyectos en :',
                        1000
                    ]}
                />
            </span>
            <spane>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt illum ab 
                <br />
                veniam quis quibusdam!
                <br />
                veniam quis quibusdam!
                <br />
                veniam quis quibusdam!
            </spane>
            <Link spy={true} to='Contact' smooth={true} activeClass="activeClass" className="i-button">
                <button className="button i-button">Contratame!</button>
            </Link>
            <div className="r-blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/*right side */}
        <div className="p-right">
            <motion.div className="p-mainCircle"
                 initial={{rotate: 45}}
                 whileInView={{rotate: 0}}
                 viewport={{margin:'-40px'}}
                 transition={transition}
            >
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
            </motion.div>
            {/*BACK circles */}
            <div className="p-backCircle blueCircle"></div>
            <div className="p-backCircle yellowCircle"></div>
        </div>
    </div>
  )
};

export default Projects;