import React from "react";
import { MainWrapper } from "./slider.styles";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);
export const Slider = ({ loop, children, hasNextBtn }) => {
  return (
    <MainWrapper>
      <Swiper
        id="main"
        // tag="section"
        // className={sliderStyle}
        wrapperTag="ul"
        navigation={{
          nextEl: hasNextBtn && ".swiper-button-next",
        }}
        loop={loop !== undefined ? loop : true}
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
        {/* {hasNextBtn && (
          <div class="deals-next arrow-next arrow-btn">›</div>
        )} */}
        {/* {slides.map((slide) => slide)} */}
      </Swiper>
    </MainWrapper>
  );
};
