import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button/Button";
import { MainWrapper } from "./articleBody.styles";
import { BenchPressCal } from "./BenchPressCal";
import { BmrCalculator } from "./BmrCalculator";
import { IdealBMCal } from "./IdealBMCal";

export const ArticleBody = () => {
  const {
    data: { article },
  } = useSelector((state) => state.article_store);

  return (
    <MainWrapper>
      {article.hasBenchPressCal && <BenchPressCal />}
      {article.hasBmrCalculator && <BmrCalculator />}
      {article.hasIdealBMCal && <IdealBMCal />}

      <div
        dangerouslySetInnerHTML={{
          __html: article.body
            ?.replaceAll("\n", "")
            ?.replaceAll("data-src", "src"),
        }}
      ></div>
    </MainWrapper>
  );
};
