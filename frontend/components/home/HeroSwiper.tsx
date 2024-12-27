"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button } from "../ui/button";
import { IconArrowRight } from "@tabler/icons-react";

const HeroSwiper: React.FC = () => {
  return (
    <div className="bg-black text-white px-24 ">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex items-center justify-between py-8">
            <div className="max-w-sm space-y-8">
              <p>
                <img src="images/hero_swiper_company.png" alt="" />
              </p>
              <p className="text-6xl font-bold">
                Up to 10% <br /> off Voucher
              </p>
              <p className="underline flex items-center ">
                Shop Now <IconArrowRight />
              </p>
            </div>
            <div>
              <img src="images/hero_swiper.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
