import React from "react";
import { MainWrapper } from "./storeSectionSwiper.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Product } from "../index";
import "swiper/css";

SwiperCore.use([Navigation]);

export const StoreSectionSwiper = ({ title, products }) => {
  return (
    <MainWrapper>
      <h2 className="grey-stripe">
        {title || "Top Rated Products"}
      </h2>
      <Swiper
        id="main"
        className="mns-carousel"
        slidesPerView={2}
        freeMode={true}
        spaceBetween={2}
        navigation={true}
        breakpoints={{
          950: { slidesPerView: 6 },
          850: { slidesPerView: 5 },
          650: { slidesPerView: 4 },
          450: { slidesPerView: 3 },
        }}
        // slidesPerGroup={4}
      >
        {products.map((product) => (
          <SwiperSlide>
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainWrapper>
  );
};
