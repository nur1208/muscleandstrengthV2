import React from "react";
import { MainWrapper } from "./topSellersAside.styles";

export const TopSellersAside = () => {
  return (
    <MainWrapper>
      <div className="topFiftyButton">
        <div className="h4">Top 50 Products</div>
        <a href="/store/top-sellers">
          <img
            style={{
              maxWidth: "98%",
              width: "230px",
              marginTop: "8px",
            }}
            className=" lazyloaded"
            data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/top-50-sidebar.jpg"
            alt="Top 50 Supplements"
            src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/top-50-sidebar.jpg"
          />
        </a>
      </div>
      <div className="byCategory clearfix">
        <div className="h4">Top Products By Category</div>
        <div className="wrap">
          <a href="/store/best-protein-supplements">
            Best Protein Powders
          </a>
          <a href="/store/best-fat-burners">Best Fat Burners</a>
          <a href="/store/best-pre-workouts">
            Best Pre-Workouts
          </a>
          <a href="/store/best-protein-bars">
            Best Protein Bars
          </a>
          <a href="/store/best-bcaas">Best BCAAs</a>
          <a href="/store/best-creatine">Best Creatine</a>
          <a href="/store/best-multivitamins">
            Best Multivitamins
          </a>
          <a href="/store/best-test-boosters">
            Best Test Boosters
          </a>
          <a href="/store/best-clothing">
            Best Fitness Clothing
          </a>
          <a href="/store/best-weight-gainers">
            Best Weight Gainers
          </a>
          <a href="/store/best-womens">Best Women's Products</a>
          <a href="/store/best-accessories">Best Gym Gear</a>
        </div>
      </div>
    </MainWrapper>
  );
};
