import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { Button } from "../button/Button";
import { FormRating } from "../formRating/FormRating";
import { FlavorForm } from "./FlavorForm";
import { MainWrapperWrite } from "./reviewsOverall.styles";

export const WriteReview = ({ ratedFlavors }) => {
  const {
    userData: {
      firstName,
      lastName,
      reviewingAs: reviewingAsRedux,
    },
    loading,
    success,
  } = useSelector((state) => state.user_store);

  const { updateUserInfo } = useReduxActions();

  const [reviewingAs, setReviewingAs] = useState(
    reviewingAsRedux
      ? reviewingAsRedux
      : `${firstName} ${
          lastName.length !== 0 ? lastName[0] : ""
        }`
  );
  const [overallRating, setOverallRating] = useState(0);
  const [isEditMemberName, setIsEditMemberName] =
    useState(false);

  useEffect(() => {
    if (success) setIsEditMemberName(false);
  }, [success]);

  const handleChangeReviewAs = () => {
    updateUserInfo({ reviewingAs });
  };

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
            value={reviewingAs}
            maxlength="20"
            onChange={(e) => setReviewingAs(e.target.value)}
          />
          <Button
            initText="Done"
            onClick={handleChangeReviewAs}
            loading={loading}
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
            <div class="name change-member-name">
              {reviewingAs}
            </div>
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
