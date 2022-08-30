import React from "react";
import { useState } from "react";
import { Button } from "../button/Button";
import { FormRating } from "../formRating/FormRating";
import { FlavorForm } from "./FlavorForm";
import { MainWrapperWrite } from "./reviewsOverall.styles";

export const WriteReview = ({ ratedFlavors }) => {
  const [overallRating, setOverallRating] = useState(0);
  const [isEditMemberName, setIsEditMemberName] =
    useState(false);
  return (
    <MainWrapperWrite>
      <div class="member-form-wrap">
        <div
          id="membername-edit"
          style={{
            display: isEditMemberName ? "block" : "none",
          }}
        >
          <div class="message red" style={{ display: "none" }}>
            Please enter a valid display name (4-20 alphanumeric
            characters, - and _).
          </div>
          <input
            type="text"
            placeholder="Display Name"
            value="md n"
            maxlength="20"
          />
          <Button
            initText="Done"
            onClick={() => setIsEditMemberName(false)}
            loading={false}
            loadingText="Changing"
          />
        </div>
        <div
          id="membername-view"
          style={{
            display: isEditMemberName ? "none" : "block",
          }}
        >
          <div class="info-wrap">
            <div class="text">Reviewing as:</div>
            <img
              class="member-image lazyloaded"
              src="https://www.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/user-img.jpg"
            />
            <div class="name change-member-name">md n</div>
            <Button
              text="change"
              onClick={() => setIsEditMemberName(true)}
            />
          </div>
        </div>
      </div>
      <div
        class={`review-form-wrap ${
          overallRating ? "active" : ""
        } `}
        id="review-form-6825"
        data-product-id="6825"
        data-form-key="tUFaKo1vtihPxrLt"
      >
        <div class="notice">
          <div class="notice-text">
            Your product review is posted!
          </div>
          <div>
            <button class="clear-button">clear</button>
            <button class="edit-button">edit</button>
          </div>
        </div>
        <div class="section overall-review open">
          <div class="inner-wrap">
            <div class="text">
              How many stars would you give Nitro-Tech?
            </div>
            <FormRating getSelectedStart={setOverallRating} />
          </div>
        </div>
        <div class="form-loading-message">
          <img
            class=" ls-is-cached lazyloaded"
            src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/ajax-loader.gif"
            data-src="https://cdn.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/ajax-loader.gif"
            alt="Loading"
          />
        </div>
        <div class="section flavor-review open">
          <div class="inner-wrap">
            <div class="text">
              Select the flavor(s) you tried.
            </div>
            <FlavorForm ratedFlavors={ratedFlavors} />
          </div>
        </div>
        <div class="section written-review open">
          <div class="inner-wrap">
            <div class="text">
              Tell us what you liked/disliked about Nitro-Tech.
            </div>
            <div class="expandingArea text-area active">
              <pre>
                <span></span>
                <br />
              </pre>
              <textarea placeholder="Write your review..."></textarea>
            </div>
            <div class="count">
              <span class="gray" id="char_count">
                -30
              </span>
            </div>
            <Button isDisabled text="Post Review" />

            <input
              type="hidden"
              id="current-review-id-6825"
              name="current-review-id"
              value="302808"
            />
          </div>
        </div>
      </div>
    </MainWrapperWrite>
  );
};
