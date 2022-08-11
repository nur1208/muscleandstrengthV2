import React from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { MainWrapper } from "./productInfo.styles";

export const ProductInfo = ({ productInfo }) => {
  return (
    <MainWrapper>
      <SectionTitle title="Product Information" />
      <div class="section-inner-wrap">
        <div class="std">
          {productInfo.map(
            ({ type, hasChildren, text, child }) =>
              type === "p" ? (
                <p>
                  {hasChildren && child.type === "img" ? (
                    <img
                      class={`${
                        child.isFullWidthMobile
                          ? "full-width-mobile "
                          : ""
                      }lazyloaded`}
                      alt={child.alt}
                      src={child.imgUrl}
                    />
                  ) : (
                    text
                  )}
                </p>
              ) : type === "h3" ? (
                <h3>{text}</h3>
              ) : type === "h4" ? (
                <h4>{text}</h4>
              ) : (
                <></>
              )
          )}
        </div>
      </div>
    </MainWrapper>
  );
};
