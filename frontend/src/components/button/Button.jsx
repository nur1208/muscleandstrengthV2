import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MainWrapper } from "./button.styles";

export const Button = ({
  text,
  // icon: { id, style },
  icon,
  hasLoader,
  loading,
  initText,
  loadingText,
  ...otherProps
}) => {
  return (
    <MainWrapper
      isLoadingBlue={loading && loadingText}
      {...otherProps}
    >
      {icon && (
        <SvgWrapper childStyle={icon.style}>
          {getIconById(icon.id)}
        </SvgWrapper>
      )}{" "}
      {initText && !loading ? (
        <span class="init">{initText}</span>
      ) : (
        text
      )}
      {loading &&
        (loadingText ? (
          <span class="loading">
            <span class="svg-wrap" style={{ lineHeight: "1em" }}>
              {getIconById(ICONS_ID.IconUpdateWhite)}
            </span>{" "}
            {loadingText}...
          </span>
        ) : (
          <span class="css-loader-block">
            <span class="css-loader"></span>
          </span>
        ))}
    </MainWrapper>
  );
};
