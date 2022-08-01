import React from "react";
import { Article } from "../article/Article";
import { MainWrapper } from "./articles.styels";

export const Articles = ({ title, articles }) => {
  return (
    <MainWrapper>
      <h2 className="taxonomy-heading">{title}</h2>
      <div className="base-content-grid">
        <div className="grid-x grid-margin-x grid-margin-y small-up-1 medium-up-3">
          {articles.map((article) => (
            <div className="cell">
              <Article {...article} />
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};
