import React, { useState } from "react";
import { MainWrapper } from "./formRating.styles";

export const FormRating = ({
  customStyle,
  getSelectedStart,
}) => {
  const [selectStart, setSelectStart] = useState(0);
  const [hoverStart, setHoverStart] = useState(0);
  return (
    <MainWrapper customStyle={customStyle}>
      <div class="select-wrap">
        {Array(5)
          .fill(true)
          .map((_, index) => (
            <div
              class="selector"
              key={`${index}-index`}
              onMouseOver={() => setHoverStart(index + 1)}
              onMouseOut={() => setHoverStart(0)}
              onClick={() => {
                getSelectedStart(index + 1);
                setSelectStart(index + 1);
              }}
            ></div>
          ))}
      </div>
      <div
        class="rating"
        style={{
          width: `${hoverStart * 20 || selectStart * 20}%`,
        }}
      ></div>
      <div class="star-overlay"></div>
      <input class="rating-amount" type="hidden" value="5" />
    </MainWrapper>
  );
};
