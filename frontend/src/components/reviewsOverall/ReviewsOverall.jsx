import React, { useState } from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { Button } from "../button/Button";
import { RatingBox } from "../ratingBox/RatingBox";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { MainWrapper } from "./reviewsOverall.styles";

export const ReviewsOverall = ({
  overallRating,
  reviews,
  verifiedBuyers,
  graphBar,
  ratedFlavors,
  hasTitleSection,
  customStyle,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <MainWrapper
      customStyle={customStyle}
      isShowMore={isShowMore}
    >
      {hasTitleSection && <SectionTitle title="Reviews" />}
      <div class="section-inner-wrap">
        <div class="overall-rating-subsection">
          <div class="subsection-inner-wrap">
            <div class="subsection-title">Overall Rating</div>
            <div class="rate-stars">
              <RatingBox width={overallRating.width} />
              <span class="overall-rating-label">
                {overallRating.parentage} out of 5 stars
              </span>
            </div>
            <div class="review-data-summary">
              <div class="item">
                <SvgWrapper childStyle="width:.9em;height:.9em; margin-bottom: -0.1em!important; margin-right:-.1em;">
                  {getIconById(ICONS_ID.IconCreateBlue)}
                </SvgWrapper>{" "}
                Reviews ({reviews})
              </div>
              <div class="item">
                <SvgWrapper childStyle="width:.95em;height:.95em; margin-bottom: -0.1em!important; margin-right:-.1em;">
                  {getIconById(ICONS_ID.IconVerifiedBuyer)}
                </SvgWrapper>{" "}
                Verified Buyers ({verifiedBuyers})
              </div>
            </div>
          </div>
        </div>
        <div class="review-graph-subsection">
          <div class="subsection-inner-wrap">
            <div class="subsection-title">Review Graph</div>
            <ul class="bar-graph-wrap">
              {graphBar.map(({ title, percentage }) => (
                <>
                  <li>
                    <div class="stars">
                      {title}{" "}
                      <span class="upper font-s-small">
                        star
                      </span>
                    </div>
                    <div class="bar-graph">
                      <div
                        class="bar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div class="percentage">{percentage}%</div>
                  </li>
                  <br />
                </>
              ))}
            </ul>
          </div>
        </div>
        {ratedFlavors.length !== 0 && (
          <div class="top-rated-flavors-subsection">
            <div class="subsection-inner-wrap">
              <div class="subsection-title">
                Top Rated Flavors
              </div>
              <ul class="rating-item-wrap slist-3count slist-on">
                {ratedFlavors.map(({ title, percentage }) => (
                  <li class="item ">
                    <div class="rate-stars">
                      <RatingBox width={percentage} />
                    </div>
                    <span class="option-label">{title}</span>
                  </li>
                ))}

                <div
                  class="slist-more"
                  onClick={() => setIsShowMore(!isShowMore)}
                >
                  {isShowMore ? "Show Less -" : "Show More +"}
                </div>
                {/* <div class="slist-less">Show Less -</div> */}
              </ul>
            </div>
          </div>
        )}

        <div class="review-utility-bar">
          <Button
            text="Write Review"
            icon={{
              id: ICONS_ID.IconCreate,
              style:
                "width:1em;height:1em;margin-bottom: -0.2em!important;",
            }}
            isLarge
            isBlue
          />
        </div>
      </div>
    </MainWrapper>
  );
};
