import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper } from "./perksFooter.styles";

export const PerksFooter = () => {
  return (
    <MainWrapper>
      <div class="max-wrap">
        <div class="main-text">
          The{" "}
          <span class="logo">
            {getIconById(ICONS_ID.IconLogoBlue, {
              width: "1.5em",
              height: "1.5em",
              marginBottom: "-.45em",
              marginLeft: "-.1em",
              marginRight: "-.1em",
            })}
          </span>{" "}
          Difference
        </div>
        <div class="text-block-wrap">
          <a
            rel="nofollow"
            href="/store/promos.html"
            class="text-block b1"
          >
            <div class="icon">
              {getIconById(ICONS_ID.IconDeal, {
                width: ".8em",
                height: ".8em",
                marginTop: ".2em",
                marginBottom: ".1em",
              })}
            </div>
            <div class="title">
              Unbeatable
              <br />
              Deals &amp; Prices
            </div>
            <div class="text">
              The best deals and discounts on over 8k products!
            </div>
          </a>
          <a
            rel="nofollow"
            href="/store/rewards"
            class="text-block b2"
          >
            <div class="icon">
              {getIconById(ICONS_ID.IconMnsRewards, {
                width: ".9em",
                height: ".9em",
                marginBottom: ".1em",
                marginTop: ".1em",
              })}
            </div>
            <div class="title">
              Earn Rewards <br />
              On Everything
            </div>
            <div class="text">
              Earn rewards that you can use on free gear and
              discounts!
            </div>
          </a>
          <a
            rel="nofollow"
            href="https://support.muscleandstrength.com/hc/en-us/articles/4410324037527"
            class="text-block b3"
          >
            <div class="icon">
              {getIconById(ICONS_ID.IconLike, {
                width: "1em",
                height: "1em",
                marginBottom: ".1em",
              })}
            </div>
            <div class="title">
              Satisfaction
              <br />
              Guarantee
            </div>
            <div class="text">
              If you're not 100% satisfied we'll give your money
              back!
            </div>
          </a>
          <a
            rel="nofollow"
            href="https://support.muscleandstrength.com"
            class="text-block b4"
          >
            <div class="icon">
              {getIconById(ICONS_ID.IconCustomerSupport, {
                width: "1em",
                height: "1em",
                marginBottom: ".1em",
              })}
            </div>
            <div class="title">
              7 Day
              <br />
              Customer Support
            </div>
            <div class="text">
              Our team of fitness experts is standing by 7 days a
              week!
            </div>
          </a>
        </div>
      </div>
    </MainWrapper>
  );
};
