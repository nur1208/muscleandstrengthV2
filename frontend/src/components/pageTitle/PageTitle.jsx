import React from "react";
import { MainWrapper } from "./pageTitle.styles";

export const PageTitle = ({ title }) => {
  return (
    <MainWrapper>
      <h1 class="page-title center-align box-title grid-cell">
        {title}
      </h1>
    </MainWrapper>
  );
};
