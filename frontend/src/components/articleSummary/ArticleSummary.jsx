import React from "react";
import { useSelector } from "react-redux";
import { MainWrapper } from "./articleSummary.styles";

export const ArticleSummary = () => {
  const {
    data: { article },
  } = useSelector((state) => state.article_store);

  return (
    <MainWrapper>
      <div class="node-summary-content">
        <div class="field field-name-field-summary field-type-text-long field-label-hidden">
          <div class="field-items">
            <div class="field-item even">
              {article.shortSummary}{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    </MainWrapper>
  );
};
