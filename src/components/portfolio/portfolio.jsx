import React from 'react';
import { themeContext } from '../toggle/toggleContext';
import { useContext } from 'react';
import './portfolio.css';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="portfolio" id='Projects'>
        {/*Header */}
        <span style={{color:darkmode? 'white':''}}>Proyectos recientes de </span>
        <span>mi portafolio:</span>
        {/*Slider*/}
        <Swiper
            breakpoints={{
               1280:{
                   slidePerView:1,
                   grabCursor:true,
                },
                480:{
                    slidePerView:6,
                    grabCursor:true,
                    direction:'horizontal',
                },
            }}
            observer={'true'}
            spaceBetween={10}
            className='portfolio-slider'
            >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
};

export default Portfolio;