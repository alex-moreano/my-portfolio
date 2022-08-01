import React from 'react';
import './portfolio.css';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

const portfolio = () => {
  return (
    <div className="portfolio">
        {/*Header */}
        <span>Proyectos recientes de </span>
        <span>mi portafolio:</span>
        {/*Slider*/}
        <Swiper
            spaceBetween={-890}
            slidePerView={3}
            grabCursor={true}
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

export default portfolio;