import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { Button } from "../button/Button";
import { RatingBox } from "../ratingBox/RatingBox";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { MainWrapper } from "./reviewsOverall.styles";

export const ReviewsOverall = () => {
  return (
    <MainWrapper>
      <SectionTitle title="Reviews" />
      <div class="section-inner-wrap">
        <div class="overall-rating-subsection">
          <div class="subsection-inner-wrap">
            <div class="subsection-title">Overall Rating</div>
            <div class="rate-stars">
              <RatingBox width={91} />
              {/* <div class="rating-box">
                <div class="star-overlay"></div>
                <div class="rating" style="width:91%;"></div>
              </div> */}
              <span class="overall-rating-label">
                4.6 out of 5 stars
              </span>
            </div>
            <div class="review-data-summary">
              <div class="item">
                <SvgWrapper childStyle="width:.9em;height:.9em; margin-bottom: -0.1em!important; margin-right:-.1em;">
                  {getIconById(ICONS_ID.IconCreateBlue)}
                </SvgWrapper>{" "}
                Reviews (181)
              </div>
              <div class="item">
                <SvgWrapper childStyle="width:.95em;height:.95em; margin-bottom: -0.1em!important; margin-right:-.1em;">
                  {getIconById(ICONS_ID.IconVerifiedBuyer)}
                </SvgWrapper>{" "}
                Verified Buyers (179)
              </div>
            </div>
          </div>
        </div>
        <div class="review-graph-subsection">
          <div class="subsection-inner-wrap">
            <div class="subsection-title">Review Graph</div>
            <ul class="bar-graph-wrap">
              <li>
                <div class="stars">
                  5 <span class="upper font-s-small">star</span>
                </div>
                <div class="bar-graph">
                  <div
                    class="bar"
                    style={{ width: "68%" }}
                  ></div>
                </div>
                <div class="percentage">68%</div>
              </li>
              <br />
              <li>
                <div class="stars">
                  4 <span class="upper font-s-small">star</span>
                </div>
                <div class="bar-graph">
                  <div class="bar"></div>
                </div>
                <div class="percentage">25%</div>
              </li>
              <br />
              <li>
                <div class="stars">
                  3 <span class="upper font-s-small">star</span>
                </div>
                <div class="bar-graph">
                  <div class="bar"></div>
                </div>
                <div class="percentage">5%</div>
              </li>
              <br />
              <li>
                <div class="stars">
                  2 <span class="upper font-s-small">star</span>
                </div>
                <div class="bar-graph">
                  <div class="bar"></div>
                </div>
                <div class="percentage">2%</div>
              </li>
              <br />
              <li>
                <div class="stars">
                  1 <span class="upper font-s-small">star</span>
                </div>
                <div class="bar-graph">
                  <div class="bar"></div>
                </div>
                <div class="percentage">0%</div>
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div class="top-rated-flavors-subsection">
          <div class="subsection-inner-wrap">
            <div class="subsection-title">Top Rated Flavors</div>
            <ul class="rating-item-wrap slist-3count slist-on">
              <li class="item ">
                <div class="rate-stars">
                  <RatingBox width={94} />
                  {/* <div class="rating-box">
                    <div class="star-overlay"></div>
                    <div class="rating" style="width:94%;"></div>
                  </div> */}
                </div>
                <span class="option-label">
                  Vanilla Ice Cream (4.7/5 )
                </span>
              </li>
              <li class="item ">
                <div class="rate-stars">
                  {/* <div class="rating-box">
                    <div class="star-overlay"></div>
                    <div class="rating" style="width:89%;"></div>
                  </div> */}
                </div>
                <span class="option-label">
                  Chocolate Ice Cream (4.5/5 )
                </span>
              </li>
              <li class="item ">
                <div class="rate-stars">
                  {/* <div class="rating-box">
                    <div class="star-overlay"></div>
                    <div class="rating" style="width:89%;"></div>
                  </div> */}
                </div>
                <span class="option-label">
                  Cookies 'n Cream Ice Cream (4.5/5 )
                </span>
              </li>
              <li class="item ">
                <div class="rate-stars">
                  {/* <div class="rating-box">
                    <div class="star-overlay"></div>
                    <div class="rating" style="width:89%;"></div>
                  </div> */}
                </div>
                <span class="option-label">
                  Chocolate Peanut Butter Ice Cream (4.5/5 )
                </span>
              </li>
              <li class="item ">
                <div class="rate-stars">
                  {/* <div class="rating-box">
                    <div class="star-overlay"></div>
                    <div class="rating" style="width:87%;"></div>
                  </div> */}
                </div>
                <span class="option-label">
                  Strawberry Ice Cream (4.4/5 )
                </span>
              </li>
              <div class="slist-more">Show More +</div>
              <div class="slist-less">Show Less -</div>
            </ul>
          </div>
        </div>
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
