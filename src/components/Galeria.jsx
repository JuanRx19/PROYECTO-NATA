import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import "../assets/stylesheets/Fonts.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/images/galeria/6a45ce01-7891-4333-858b-d593303d8ebb.jpg';
import slide_image_2 from '../assets/images/galeria/820d0307-d25e-44a8-9e1f-8861bf4669dd.jpg';
import slide_image_3 from '../assets/images/galeria/a1233d41-71a5-436a-8a96-085374b3eec8.jpg';
import slide_image_4 from '../assets/images/galeria/IMG_0068.jpg';
import slide_image_5 from '../assets/images/galeria/IMG_0074.jpg';
import slide_image_6 from '../assets/images/galeria/IMG_0099.jpg';
import slide_image_7 from '../assets/images/galeria/IMG_0102.jpg';
import slide_image_8 from '../assets/images/galeria/IMG_0116.jpg';
import slide_image_9 from '../assets/images/galeria/IMG_8623.jpg';
import slide_image_10 from '../assets/images/galeria/IMG_8636.jpg';
import slide_image_11 from '../assets/images/galeria/IMG_8640.jpg';
import slide_image_12 from '../assets/images/galeria/IMG_8641.jpg';
import slide_image_13 from '../assets/images/galeria/IMG_8645.jpg';
import slide_image_14 from '../assets/images/galeria/IMG_8652.jpg';

function Galeria() {
  return (
    <div className="container" id='galeria'>
      <h1 className="heading">GALERÍA</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Galeria;
