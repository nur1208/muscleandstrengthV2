import React from "react";
import { MainWrapper } from "./quickNavBar.styles";

export const QuickNavBar = () => {
  return (
    <MainWrapper>
      <div class="css-carousel-container">
        <a
          href="/store/promos.html"
          class="quick-link-container slide"
        >
          <span class="icon specials"></span>
          <div class="quick-link-title">Deals &amp; Coupons</div>
        </a>
        <a
          href="/store/category.html"
          class="quick-link-container slide"
        >
          <span class="icon categories"></span>
          <div class="quick-link-title">Shop By Category</div>
        </a>
        <a
          href="/store/brands"
          class="quick-link-container slide"
        >
          <span class="icon brands"></span>
          <div class="quick-link-title">Shop By Brand</div>
        </a>
        <a
          href="/store/top-sellers"
          class="quick-link-container slide"
        >
          <span class="icon top-fifty"></span>
          <div class="quick-link-title">Top 50 Products</div>
        </a>
        <a
          href="/store/category/clearance.html"
          class="quick-link-container slide"
        >
          <span class="icon clearance"></span>
          <div class="quick-link-title">Clearance</div>
        </a>
        <a
          href="/store/rewards/catalog"
          class="quick-link-container slide"
        >
          <span class="rewards-catalog"></span>
          <div class="quick-link-title">Rewards Catalog</div>
        </a>
      </div>
    </MainWrapper>
  );
};
