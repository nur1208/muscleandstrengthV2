import React from "react";
import { Button } from "../button/Button";
import { Radio } from "./Radio";
import { MainWrapper } from "./sortingFiltering.styles";
import { StarFilter } from "./StarFilter";

// for (let index = 0; index <= 5; index++) {
//     console.log("start" + index,index * 20);for (let indexIN = (index * 3)  + 3; indexIN >= (index * 3) + 1; indexIN--) {
//       console.log(indexIN,(indexIN +index) * 5)
//     }
// }
export const SortingFiltering = () => {
  return (
    <MainWrapper>
      <div class="mobile-header">
        <Button text="Sort &amp; Filter" isBlue />

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
