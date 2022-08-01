import React from "react";
import { MainWrapper } from "./button.styles";

export const Button = ({ text, hasLoader, ...otherProps }) => {
  return (
    <MainWrapper {...otherProps}>
      {text}
      {hasLoader && (
        <span class="css-loader-block">
          <span class="css-loader"></span>
        </span>
      )}
    </MainWrapper>
  );
};
