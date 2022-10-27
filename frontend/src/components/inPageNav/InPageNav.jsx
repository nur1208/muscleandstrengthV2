import React from "react";
import { Link } from "react-router-dom";
import { getIconById } from "../../icons";
import { InPageNavData } from "./data";
import { MainWrapper } from "./inPageNav.styles";

export const InPageNav = ({ bgc }) => {
  return (
    <MainWrapper bgc={bgc}>
      <div class="inner">
        <div class="grid-x">
          {InPageNavData.map(({ title, href, iconId }) => (
            <div class="cell small-2 bp600-2 text-center">
              <Link to={href}>
                {getIconById(iconId)}
                {title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};
