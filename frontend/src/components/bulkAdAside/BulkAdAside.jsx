import React from "react";
import { MainWrapper } from "./bulkAdAside.styles";

export const BulkAdAside = () => {
  return (
    <MainWrapper>
      <a href="/store/bulk-buy-coupons">
        <img
          class=" lazyloaded"
          style={{ maxWidth: "100%" }}
          data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/bulkcoupons.jpg"
          alt="Bulk Buy Coupons"
          src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/bulkcoupons.jpg"
        />
      </a>
    </MainWrapper>
  );
};
