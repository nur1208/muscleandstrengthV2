import React from "react";
import collection, { TIconType } from "./collection";
import styles from "./Icon.styles";

const { StyledIconDiv } = styles;

const Icon = ({ fill = "inherit", size = 18, svg, style }) => {
  const getIcon = (fill, size, svg, style) => {
    const key = svg + "Icon";
    if (!collection[key])
      throw new Error(`no icon found: '${key}'`);
    return collection[key](fill, size, style);
  };

  return (
    <StyledIconDiv>
      {getIcon(fill, size, svg, style)}
    </StyledIconDiv>
  );
};

export default Icon;
