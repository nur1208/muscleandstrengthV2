import React from "react";
import { getIconById, SvgWrapper } from "../../icons";
import { MainWrapper } from "./button.styles";

export const Button = ({
  text,
  // icon: { id, style },
  icon,
  hasLoader,
  ...otherProps
}) => {
  return (
    <MainWrapper {...otherProps}>
      {icon && (
        <SvgWrapper childStyle={icon.style}>
          {getIconById(icon.id)}
        </SvgWrapper>
      )}{" "}
      {text}
      {hasLoader && (
        <span class="css-loader-block">
          <span class="css-loader"></span>
        </span>
      )}
    </MainWrapper>
  );
};
