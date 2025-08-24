import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../src/App.css';

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
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36ce9b0038.webp&w=1920&q=75"
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide>
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36ce9b0038.webp&w=1920&q=75"
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide>
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36ce9b0038.webp&w=1920&q=75"
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide>
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36ce9b0038.webp&w=1920&q=75"
            className="w-full"
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
export default Swipers;
