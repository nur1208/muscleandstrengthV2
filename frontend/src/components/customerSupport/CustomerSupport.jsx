import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper } from "./customerSupport.styles";

export const CustomerSupport = () => {
  return (
    <MainWrapper>
      <a
        class="title"
        href="https://support.muscleandstrength.com"
        alt="M&amp;S Help"
        rel="nofollow"
      >
        7 Day Customer Support
      </a>
      <div class="support-menu">
        <div class="grid-x">
          <div class="cell shrink">
            <span class="open-chat">
              <a href="https://support.muscleandstrength.com/hc/en-us/requests/new">
                {getIconById(ICONS_ID.IconInstaComments, {
                  width: "1em",
                  height: "1em",
                  position: "relative",
                  top: ".1em",
                })}
                Live Chat
              </a>
            </span>
          </div>
          <div class="cell auto text-right">
            {getIconById(ICONS_ID.IconSupportWhite, {
              width: "1em",
              height: "1em",
              position: "relative",
              top: ".1em",
            })}

            <span>1-800-537-9910</span>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
