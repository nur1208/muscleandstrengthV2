import React from "react";
import { MainWrapper } from "./storeSectionSwiper.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Product } from "../index";
import "swiper/css";

SwiperCore.use([Navigation]);

export const StoreSectionSwiper = ({
  sectionId,
  title,
  items,
}) => {
  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push(
      <SwiperSlide className="">
        <Product />
      </SwiperSlide>
    );
  }
  return (
    <MainWrapper>
      {" "}
      <h2 className="grey-stripe">
        {title || "Top Rated Products"}
      </h2>
      <Swiper
        id="main"
        className="mns-carousel"
        slidesPerView={2}
        // wrapperClass="grid-products-wrapper grid-x grid-margin-x medium-up-6"
        freeMode={true}
        // enabled={false}
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
        {slides.map((slide) => slide)}
        {/* {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="height-setter">
              <div
                className="dynamic-height"
                style={{ paddingBottom: 106 }}
              >
                <Link
                  className="product-link"
                  to={
                    item.href ||
                    "/store/60ad403adb4ee72f0c5b3bec"
                  }
                >
                  <div className="image-wrap">
                    <img
                      className="product-image lazyloaded"
                      src={item.image}
                      alt="Primeval Labs EAA MAX, 30 Servings"
                    />
                  </div>
                  <div className="product-name">{item.name}</div>
                </Link>
              </div>
              <div className="product-info">
                <span className="mns-label lbl-deal">
                  {item.deal || "Buy 1 Get 1 FREE"}
                </span>
                <div className="price-box">
                  <span className="price">€{item.price}</span>
                </div>
                <div className="button-wrap">
                  <Link
                    to={
                      item.href ||
                      "/store/60ad403adb4ee72f0c5b3bec"
                    }
                    className="btn btn-blue btn-sm btn-addtocart"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </MainWrapper>
  );
};
