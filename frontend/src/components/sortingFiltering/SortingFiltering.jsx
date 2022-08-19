import React from "react";
import { useState } from "react";
import { Button } from "../button/Button";
import { Radio } from "./Radio";
import { MainWrapper } from "./sortingFiltering.styles";
import { StarFilter } from "./StarFilter";

export const SortingFiltering = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MainWrapper isOpen={isOpen}>
      <div class="mobile-header">
        <Button
          text="Sort &amp; Filter"
          isBlue
          onClick={() => setIsOpen(!isOpen)}
        />

        <label class="heading"></label>
      </div>
      <div className="review-sorting-filtering">
        <div className="inner-wrap">
          <Radio options={["Most Recent", "Most Helpful"]} />
          <Radio
            options={[
              "All Reviews (48)",
              "Verified Buyers (47)",
            ]}
          />
          <StarFilter />
        </div>
        <div id="loadingmessage" class="loading-message">
          <img
            src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/ajax-loader.gif"
            alt="Loading"
          />
        </div>
      </div>
    </MainWrapper>
  );
};
