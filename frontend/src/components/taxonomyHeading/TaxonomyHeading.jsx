import React from "react";
import { MainWrapper } from "./taxonomyHeading.styles";

export const TaxonomyHeading = ({ heading, subheading }) => {
  return (
    <MainWrapper>
      <h2 class="taxonomy-heading">{heading}</h2>
      {subheading && (
        <p class="subheading-text">{subheading} </p>
      )}
    </MainWrapper>
  );
};
