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
  noImageDownloaded,
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
            srcset={
              noImageDownloaded ? srcset : `/images/${srcset}`
            }
            media={media}
          />
          <img
            width={widthImg}
            height={heightImg}
            src={noImageDownloaded ? src : `/images/${src}`}
            alt={alt}
          />
        </picture>
      </a>
    </MainWrapper>
  );
};
