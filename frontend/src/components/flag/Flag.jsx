import React from "react";
import { MainWrapper } from "./flag.styles";

export const Flag = () => {
  return (
    <MainWrapper>
      <div
        class="flag"
        // style='background-image: url("/sites/all/themes/mnsnew/images/flags/svg/hk.svg");'
      ></div>
      <label class="currency">USD</label>
    </MainWrapper>
  );
};
