import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { RatingBox } from "../ratingBox/RatingBox";
import { MainWrapper } from "./review.styles";

export const Review = () => {
  return (
    <MainWrapper>
      <div class="review-rating-wrap">
        <div class="overall rating-wrap">
          <div class="rating-label-wrap">
            <span class="rating-label">Overall Rating</span>
          </div>
          <div class="rate-stars">
            <RatingBox width={80} />
          </div>
        </div>
        <ul class="rating-item-wrap slist-on slist-3count ">
          <div class="slist-more">Show More +</div>
          <div class="slist-less">Show Less -</div>
        </ul>
      </div>
      <div class="review-user-wrap">
        <div class="user-image">
          <img
            width="300"
            height="300"
            class=" ls-is-cached lazyloaded"
            data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/user-img.jpg"
            alt="User sImage"
            src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/user-img.jpg"
          />
        </div>
        <div class="user-name">Mark K</div>
        <div class="user-badge-wrap">
          <div class="user-badge">
            <div class="badge-icon">
              <SvgWrapper childStyle="width:1.5em;height:1.5em; margin-bottom: -0.3em!important;  ">
                {getIconById(ICONS_ID.IconVerifiedBuyer)}
              </SvgWrapper>
            </div>
            <div class="badge-label">Verified Buyer</div>
          </div>
        </div>
      </div>
      <div class="review-content-wrap">
        <div class="user-review">
          Happy with the product:. Seems legit, but how can you
          tell.&nbsp;<a href="#results-disclaimer">*</a>
        </div>
      </div>
      <div class="helpful-wrap" id="review-helpful-301198">
        <div class="question">Was this helpful?</div>
        <div class="response-wrap">
          You found this <span class="not-helpful">not </span>
          helpful
        </div>
        <div class="form">
          <span
            class="choice"
            id="review-helpful-link-301198"
            onclick="reviews.helpfulReview(301198, 1); return false;"
          >
            Yes
          </span>
          <span
            class="choice"
            id="review-helpful-link-301198"
            onclick="reviews.helpfulReview(301198, 0); return false;"
          >
            No
          </span>
          <span
            class="response-wrap change"
            id="review-vote-undo-link-301198"
            onclick="reviews.undoReviewVote(301198); return false;"
          >
            Undo
          </span>
        </div>
        <div class="helpful-data">0 of 0 found this helpful</div>
      </div>
      <div class="review-meta-wrap">
        <abbr class="date timeago" title="2022-08-08 20:39:48Z">
          5 days ago
        </abbr>
        <div class="meta-button-wrap">
          <button
            class="report"
            id="review-report-link-301198"
            data-rid="301198"
          >
            Report
          </button>
        </div>
      </div>
    </MainWrapper>
  );
};
