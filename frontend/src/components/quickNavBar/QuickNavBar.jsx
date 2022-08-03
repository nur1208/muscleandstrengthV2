import React from "react";
import { quickNavbarData } from "./data";
import { MainWrapper } from "./quickNavBar.styles";
import { Link } from "react-router-dom";
export const QuickNavBar = () => {
  return (
    <MainWrapper>
      <div class="css-carousel-container">
        {quickNavbarData.map(({ href, iconStyle, title }) => (
          <Link to={href} class="quick-link-container slide">
            <span class={`icon ${iconStyle}`}></span>
            <div class="quick-link-title">{title}</div>
          </Link>
        ))}
      </div>
    </MainWrapper>
  );
};
