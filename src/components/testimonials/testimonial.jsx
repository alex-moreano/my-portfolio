import React from 'react';
import './testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import Typical from 'react-typical';
import 'swiper/css/pagination';
import 'swiper/css';
import profilepic1 from '../../img/profile1.jpg';
import profilepic2 from '../../img/profile2.jpg';
import profilepic3 from '../../img/profile3.jpg';
import profilepic4 from '../../img/profile4.jpg';

const Testimonial = () => {
   const testimonials=[
    {
        img:profilepic1,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate? Alias explicabo, sit ducimus vitae repellat excepturi. Nemo, fuga beatae"
    },
    {
        img:profilepic2,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate? Alias explicabo, sit ducimus vitae repellat excepturi. Nemo, fuga beatae"
    },
    {
        img:profilepic3,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate? Alias explicabo, sit ducimus vitae repellat excepturi. Nemo, fuga beatae"
    },
    {
        img:profilepic4,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate? Alias explicabo, sit ducimus vitae repellat excepturi. Nemo, fuga beatae"
    }
   ]
    

  return (
    <div className="t-wrapper"  id='Testimonials'>
        <div className="t-header">
            <span>La gente que ha trabajado</span>
            <span> conmigo</span>
            <span> dice...</span>
            <div className="r-blur t-blur" style={{background:'var(--purple)'}}></div>
            <div className="r-blur t-blurtwo" style={{background:'skyblue'}}></div>
        </div>
        {/*slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
            {testimonials.map((testimonial, index) => { 
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonials">
                            <img src={testimonial.img} alt="" />
                            <span>
                                {testimonial.review}
                                <Typical
                                    loop={1}
                                    wrapper='span'
                                    steps={[
                                        `${testimonial.review}`,100,
                                    ]}
                                />
                            </span>
                        </div>
                    </SwiperSlide>
                )
            })};
        </Swiper>
    </div>
  )
};

export default Testimonial;