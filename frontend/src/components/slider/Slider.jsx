import React from "react";
import { MainWrapper } from "./slider.styles";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);
export const Slider = ({ children }) => {
  return (
    <MainWrapper>
      <Swiper
        id="main"
        // tag="section"
        // className={sliderStyle}
        wrapperTag="ul"
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={`slide-${index}`} tag="li">
            {child}
          </SwiperSlide>
        ))}
        {/* {slides.map((slide) => slide)} */}
      </Swiper>
    </MainWrapper>
  );
};
