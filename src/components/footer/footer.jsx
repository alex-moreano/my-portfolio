import React from 'react';
import './footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
        <img className='wave' src={Wave} alt="" style={{width:'100%',height:'150%'}}/>
        <div className="f-content">
            <span>
            <a href="mailto:alxstaleycobain@gmail.com" style={{textDecoration:'none',color:'white'}}>
              alxstaleycobain@gmail.com
            </a>
            </span>
            <div className="f-icons">
                <Insta className="icons" color='white' size='3rem'/>
                <Linkedin className="icons" color='white' size='3rem'/>
                <Github className="icons" color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
};

export default Footer;