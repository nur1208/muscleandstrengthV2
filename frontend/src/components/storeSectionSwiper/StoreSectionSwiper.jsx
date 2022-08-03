import React from "react";
import { MainWrapper } from "./storeSectionSwiper.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Product } from "../index";
import { useMediaQuery } from "react-responsive";

import "swiper/css";

SwiperCore.use([Navigation]);

export const StoreSectionSwiper = ({ title, products }) => {
  const isPC = useMediaQuery({ minWidth: 1028 });

  return (
    <MainWrapper>
      <h2 className="grey-stripe">
        {title || "Top Rated Products"}
      </h2>
      <Swiper
        id="main"
        className="mns-carousel"
        slidesPerView={2}
        // slidesPerGroup={4}
        freeMode={true}
        spaceBetween={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // enabled
        breakpoints={{
          950: { slidesPerView: 6 },
          850: { slidesPerView: 5 },
          650: { slidesPerView: 4 },
          450: { slidesPerView: 3 },
        }}
        disabledClass="swiper-button-disabled"
      >
        {products.map((product) => (
          <SwiperSlide>
            <Product {...product} />
          </SwiperSlide>
        ))}
        {isPC && (
          <>
            <div
              class="swiper-button-next swiper-button-black"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-disabled="false"
            ></div>
            <div
              class="swiper-button-prev swiper-button-black "
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-disabled="true"
            ></div>
          </>
        )}
      </Swiper>
    </MainWrapper>
  );
};
