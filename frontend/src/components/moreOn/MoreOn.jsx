import React from "react";
import { moreOnData } from "./data";
import { MainWrapper } from "./moreOn.styles";

export const MoreOn = () => {
  return (
    <MainWrapper>
      <h2 class="blue-stripe">More On M&amp;S</h2>

      <div class="grid-x grid-margin-x">
        {moreOnData.map(
          ({ href, imgAlt, imgUrl, title, content }) => (
            <a href={href} class="cell small-12 bp740-6 large-3">
              <div class="intrinsic-wrapper">
                <img
                  alt={imgAlt}
                  class="cms-grid-image lazyloaded"
                  src={imgUrl}
                />
              </div>
              <div class="info-block">
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            </a>
          )
        )}
      </div>
    </MainWrapper>
  );
};
