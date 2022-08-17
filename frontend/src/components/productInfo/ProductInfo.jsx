import React from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { YoutubeVideo } from "../youtubeVideo/YoutubeVideo";
import { MainWrapper } from "./productInfo.styles";

export const ProductInfo = ({ productInfo }) => {
  const setMainStyle = (mainStyle) =>
    mainStyle ? mainStyle : undefined;

  const getImgElement = (child) => (
    <img
      class={`${
        child.isFullWidthMobile ? "full-width-mobile " : ""
      }lazyloaded`}
      alt={child.alt}
      src={child.imgUrl}
    />
  );
  return (
    <MainWrapper
      additionalStyle={
        productInfo[0].type === "style" && productInfo[0].style
      }
    >
      <SectionTitle title="Product Information" />
      <div class="section-inner-wrap">
        <div class="std">
          {productInfo.map(
            ({
              type,
              hasChildren,
              text,
              child,
              mainStyle,
              videId,
              imgUrl,
              alt,
              isFullWidthMobile,
            }) =>
              type === "p" ? (
                <p class={setMainStyle(mainStyle)}>
                  {hasChildren && child.type === "img"
                    ? getImgElement(child)
                    : text}
                </p>
              ) : type === "ul" ? (
                <ul class={setMainStyle(mainStyle)}>
                  {hasChildren && child.type === "li"
                    ? child.lis.map((li) => <li>{li}</li>)
                    : text}
                </ul>
              ) : type === "h3" ? (
                <h3 class={setMainStyle(mainStyle)}>{text}</h3>
              ) : type === "h4" ? (
                <h4 class={setMainStyle(mainStyle)}>{text}</h4>
              ) : type === "video" ? (
                <YoutubeVideo videoId={videId} />
              ) : type === "img" ? (
                getImgElement({ imgUrl, alt, isFullWidthMobile })
              ) : (
                <></>
              )
          )}
        </div>
      </div>
    </MainWrapper>
  );
};
