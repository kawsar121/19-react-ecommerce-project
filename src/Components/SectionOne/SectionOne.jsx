import { Link } from "react-router-dom";
import Swipers from "../Swiper/Swipers";
import Swipers2 from "../Swiper/Swipers2";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import banner1 from "../../assets/home/05.png";
import banner2 from "../../assets/home/06.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const SectionOne = () => {
  return (
    <div className="flex max-w-7xl mx-auto gap-4  p-2 rounded-lg w-full">
      <div className="hidden lg:block shadow-custom">
        <ul className=" p-5 shadow-xl ">
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Beef Nehari
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Home Pet and applience
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Chicken Jhal Fry
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              The White Canary Cafe
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Beef Kolija Bhuna
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Belgian Waffle with Fruits
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Beauty Healt hair
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Strawberry Classic French Toast
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Funghi Sausage Omelette
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">Latte</Link>
          </li>
          <li className=" text-center">
            <Link className="whitespace-nowrap text-base text-blue-500">
              View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Side Bar */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        <div class="md:col-span-2 flex flex-col gap-2">
          {/* Top */}
          <div className="w-full">
            <Swipers></Swipers>
          </div>
          {/* Bottom */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={banner1}
              alt=""
              srcset=""
            />

            <img
              className="w-full h-auto object-cover rounded-lg"
              src={banner2}
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* Side */}
        <div className="hidden lg:block w-full h-full">
          <div className="w-full h-full max-h-[600px] rounded-lg overflow-hidden">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              loop={true}
              speed={1200}
              className="w-full h-full"
            >
              <SwiperSlide>
                <img src={slide1} className="w-full h-full object-cover" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={slide2} className="w-full h-full object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
