import React from "react";
import { MainWrapper } from "./sitewideBanner.styles";

export const SitewideBanner = () => {
  return (
    <MainWrapper>
      <a
        href="/store/landing/jul25twin"
        class="sale-banner"
        style={{ backgroundColor: "#272727" }}
      >
        <picture>
          <source
            width="600"
            height="70"
            srcset="./images/mobile_9.jpg 600w"
            media="(max-width: 800px)"
          />
          <img
            width="1300"
            height="40"
            src="./images/desktop_9.jpg"
            alt="Double The Savings! Stack your savings when you shop our latest twin pack deals! Over 400 deals to choose from."
          />
        </picture>
      </a>
    </MainWrapper>
  );
};
