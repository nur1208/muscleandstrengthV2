import React from "react";
import { MainWrapper } from "./ajaxErrors.styles";

export const AjaxErrors = () => {
  return (
    <MainWrapper>
      <ul class="messages">
        <li class="error-msg">
          <ul>
            <li>
              <span>
                An error occurred, please try again later.
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </MainWrapper>
  );
};
