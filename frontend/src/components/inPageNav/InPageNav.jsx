import React from "react";
import { getIconById } from "../../icons";
import { InPageNavData } from "./data";
import { MainWrapper } from "./inPageNav.styles";

export const InPageNav = () => {
  return (
    <MainWrapper>
      <div class="inner">
        <div class="grid-x">
          {InPageNavData.map(({ title, href, iconId }) => (
            <div class="cell small-2 bp600-2 text-center">
              <a href={href}>
                {getIconById(iconId)}
                {title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};
