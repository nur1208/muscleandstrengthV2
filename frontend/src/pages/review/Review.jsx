import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Banner,
  EmailSignUp,
  Footer,
  Header,
  NavbarInfo,
  PerksFooter,
  Reviews,
  ReviewsOverall,
  SmallProduct,
  SortingFiltering,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useUpdateCustomNavInfo } from "../../hooks";
import { MainWrapper } from "./Review.styles";

export const Review = () => {
  const {
    product_store: {
      data: { productSingle },
    },
    review_store: {
      loading,
      data: { reviews },
    },
  } = useSelector((state) => state);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useUpdateCustomNavInfo(
    `> Store > Reviews > ${productSingle.name}`
  );
  return (
    <MainWrapper>
      <div id="page">
        <Banner {...BANNER_BLOCK_12} />
        <Header />
        <NavbarInfo />
        <div class="center-header">
          <h1 class="center-header-title">
            {productSingle?.brand?.title} {productSingle?.name}{" "}
            Reviews
          </h1>
        </div>
        <div id="main-wrap">
          <div className="aside aside-before">
            <SmallProduct />
          </div>
          <div className="main-content">
            <ReviewsOverall
              {...productSingle?.productDetail?.reviewsOverall}
              customStyle="
                  margin: 0 0;
                  background-color: #fff;
                  border: 1px solid #ddd;
                  margin-bottom: 1em;
                  font-size: 18px;"
            />
            <SortingFiltering />
            <Reviews reviews={reviews} />
            <div id="results-disclaimer">
              {" "}
              * Muscle &amp; Strength does not imply any medical
              claims from this review. There are no guarantees of
              specific results and results may vary.
            </div>
            <div class="fdaWarning font-s-small">
              * These statements have not been evaluated by the
              Food and Drug Administration. This product is not
              intended to diagnose, treat, cure, or prevent any
              disease.
            </div>
          </div>
        </div>
      </div>
      <div>
        <PerksFooter />
        <EmailSignUp />
        <Footer />
      </div>
    </MainWrapper>
  );
};
