import React from "react";
import { MainWrapper } from "./button.styles";

export const Button = ({ text, ...otherProps }) => {
  return <MainWrapper {...otherProps}>{text}</MainWrapper>;
};
