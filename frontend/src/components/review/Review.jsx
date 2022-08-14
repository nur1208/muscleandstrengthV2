import React from "react";
import { getIconById, SvgWrapper } from "../../icons";
import { addDays, subtractDays, timeSince } from "../../utils";
import { RatingBox } from "../ratingBox/RatingBox";
import { MainWrapper } from "./review.styles";

export const Review = ({
  rating,
  imgUrl,
  name,
  badges,
  content,
  helpful,
  dateOfCreation,
}) => {
  return (
    <MainWrapper>
      <div class="review-rating-wrap">
        <div class="overall rating-wrap">
          <div class="rating-label-wrap">
            <span class="rating-label">Overall Rating</span>
          </div>
          <div class="rate-stars">
            <RatingBox width={rating} />
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
            alt="User sImage"
            src={imgUrl}
          />
        </div>
        <div class="user-name">{name}</div>
        <div class="user-badge-wrap">
          {badges.map(({ iconId, label }) => (
            <div class="user-badge">
              <div class="badge-icon">
                <SvgWrapper childStyle="width:1.5em;height:1.5em; margin-bottom: -0.3em!important;  ">
                  {getIconById(iconId)}
                </SvgWrapper>
              </div>
              <div class="badge-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div class="review-content-wrap">
        <div class="user-review">
          {content}&nbsp;<a href="#results-disclaimer">*</a>
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
        <div class="helpful-data">{helpful}</div>
      </div>
      <div class="review-meta-wrap">
        <abbr class="date timeago" title={dateOfCreation}>
          {new Date(dateOfCreation) >=
          subtractDays(new Date(), 30)
            ? timeSince(new Date(dateOfCreation))
            : dateOfCreation}
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
