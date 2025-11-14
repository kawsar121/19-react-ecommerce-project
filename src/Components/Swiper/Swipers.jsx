import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../src/App.css';
import banner1 from '../../assets/home/01.jpg'
import banner2 from '../../assets/home/02.jpg'
import banner3 from '../../assets/home/03.png'
import banner4 from '../../assets/home/04.jpg'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Swipers = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, // 2.5 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src={banner1}
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide>
          <img
            src={banner2}
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide>
          <img
            src={banner3}
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide>
          <img
            src={banner4}
            className="w-full"
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
export default Swipers;
