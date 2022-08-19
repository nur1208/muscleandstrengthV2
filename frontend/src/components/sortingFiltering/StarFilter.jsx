import React, { useRef, useState } from "react";
import { useStartFilter } from "../../hooks";

export const StarFilter = () => {
  const [
    { selectStar, ref },
    { getLabelLeftWidth, handleOnClick, renderSmallPoll },
  ] = useStartFilter();
  return (
    <div class="star-filter section">
      <div class="wrap">
        <span class="irs irs--flat js-irs-0  irs-with-grid">
          <span class="irs">
            <span
              class="irs-line"
              tabindex="0"
              onClick={handleOnClick}
              ref={ref}
            ></span>
            <span class="irs-min">all Stars</span>
            <span class="irs-max">5 Stars</span>
            <span
              class="irs-from"
              style={{ visibility: "hidden" }}
            >
              0
            </span>
            <span
              class="irs-to"
              style={{ visibility: "hidden" }}
            >
              0
            </span>
            <span
              class="irs-single"
              style={{ left: `${getLabelLeftWidth()}%` }}
            >
              {selectStar} Stars
            </span>
          </span>
          <span
            class="irs-grid"
            sstyle="width: 100%; left: -0.1%;"
          >
            {Array(6)
              .fill(true)
              .map((_, index) => (
                <>
                  <span
                    class="irs-grid-pol"
                    style={{ left: `${index * 20}%` }}
                  ></span>
                  <span
                    class="irs-grid-text js-grid-text-0"
                    style={{
                      left: `${index * 20}%`,
                      marginLeft: "-1.68712%",
                    }}
                  >
                    {index === 0 ? "all" : index}
                  </span>
                  {renderSmallPoll(index)}
                </>
              ))}
          </span>
          <span
            class="irs-bar irs-bar--single"
            sstyle="left: 0px; width: 0%;"
          ></span>
          <span
            class="irs-shadow shadow-single"
            sstyle="display: none;"
          ></span>
          <span class="irs-handle single" sstyle="left: 0%;">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </span>
        <input
          type="text"
          id="star-slider"
          name="star-slider"
          value=""
          class="irs-hidden-input"
          tabindex="-1"
          readonly=""
        />
      </div>
    </div>
  );
};
