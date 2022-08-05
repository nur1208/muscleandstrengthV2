import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { perksFooterData } from "./data";
import { IconWrapper, MainWrapper } from "./perksFooter.styles";

export const PerksFooter = () => {
  return (
    <MainWrapper>
      <div class="max-wrap">
        <div class="main-text">
          The{" "}
          <span class="logo">
            {getIconById(ICONS_ID.IconLogoBlue, {
              width: "1.5em",
              height: "1.5em",
              marginBottom: "-.45em",
              marginLeft: "-.1em",
              marginRight: "-.1em",
            })}
          </span>{" "}
          Difference
        </div>
        <div class="text-block-wrap">
          {perksFooterData.map(
            ({ href, styleChild, iconId, title, text }) => (
              <a
                rel="nofollow"
                href={href}
                class="text-block b1"
              >
                <div class="icon">
                  <IconWrapper styleChild={styleChild}>
                    {getIconById(iconId)}
                  </IconWrapper>
                </div>
                <div class="title">
                  {title[0]}
                  <br />
                  {title[1]}
                </div>
                <div class="text">{text}</div>
              </a>
            )
          )}
        </div>
      </div>
    </MainWrapper>
  );
};
