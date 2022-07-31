import React from "react";
import { MainWrapper } from "./banner.styles";

export const Banner = ({
  href,
  widthSource,
  heightSource,
  src,
  widthImg,
  heightImg,
  alt,
  media,
  isSale,
  backgroundColor,
  srcset,
}) => {
  return (
    <MainWrapper>
      <a
        href={href}
        class={isSale ? "sale-banner" : ""}
        style={
          backgroundColor
            ? { backgroundColor: backgroundColor }
            : {}
        }
      >
        <picture>
          <source
            width={widthSource}
            height={heightSource}
            srcset={`./images/${srcset}`}
            media={media}
          />
          <img
            width={widthImg}
            height={heightImg}
            src={`./images/${src}`}
            alt={alt}
          />
        </picture>
      </a>
    </MainWrapper>
  );
};
