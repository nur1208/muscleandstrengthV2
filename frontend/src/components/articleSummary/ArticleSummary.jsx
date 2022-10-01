import React from "react";
import { MainWrapper } from "./articleSummary.styles";

export const ArticleSummary = () => {
  return (
    <MainWrapper>
      <div class="node-summary-content">
        <div class="field field-name-field-summary field-type-text-long field-label-hidden">
          <div class="field-items">
            <div class="field-item even">
              This workout is designed to increase your muscle
              mass as much as possible in 10 weeks. Works each
              muscle group hard once per week using mostly heavy
              compound exercises.
            </div>
          </div>
        </div>{" "}
      </div>
    </MainWrapper>
  );
};
