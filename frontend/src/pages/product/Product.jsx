import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  Banner,
  BuyingOptions,
  Deals,
  EmailSignUp,
  FeatherLight,
  FeaturesList,
  Footer,
  Header,
  NavbarInfo,
  Nutrition,
  PerksFooter,
  ProductHeader,
  ProductInfo,
  Reviews,
  ReviewsOverall,
  SecureTransaction,
} from "../../components";
import {
  BANNER_BLOCK_12,
  PRODUCT_DATA,
  PRODUCT_DATA_2,
} from "../../components/data";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./product.styles";

export const Product = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const {
    product_store: {
      data: { productSingle },
      loading,
    },
    review_store: {
      data: { reviews },
    },
  } = useSelector((state) => state);

  const { fetchStoreSingleProduct, fetchReviews } =
    useReduxActions();
  let mainData;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchStoreSingleProduct(id);
    fetchReviews(id);
  }, [id]);

  if (state?.productData?.name) mainData = state.productData;
  else mainData = productSingle;

  if (!mainData.name) return <div>loading...</div>;
  return (
    <>
      <MainWrapper>
        <div id="page">
          <Banner {...BANNER_BLOCK_12} />
          <Header />
          <NavbarInfo />
          <div id="main-wrap">
            <div className="main-content">
              <ProductHeader {...mainData} />
              <FeaturesList />
              {productSingle?.productDetail?.deals &&
                productSingle?.productDetail?.deals.length !==
                  0 && (
                  <Deals
                    deals={
                      productSingle?.productDetail?.deals || []
                    }
                  />
                )}
            </div>
            <div class="aside aside-after">
              <BuyingOptions
                options={mainData.buyingOptions || []}
              />
              <div class="product-aside"></div>

              {!loading && productSingle.imgUrl && (
                <Nutrition
                  nutrition={
                    productSingle?.productDetail?.nutrition
                  }
                />
              )}
            </div>
            <div class="main-content continued">
              <ProductInfo
                productInfo={
                  productSingle?.productDetail?.productInfo || []
                }
              />
              {productSingle?.productDetail?.reviewsOverall && (
                <ReviewsOverall
                  {...productSingle?.productDetail
                    ?.reviewsOverall}
                  hasTitleSection
                  customHandleWriteReview={() =>
                    window.open(
                      `/store/reviews/brands/${productSingle?.brand?.title.replaceAll(
                        " ",
                        "-"
                      )}/${productSingle?.name.replaceAll(
                        " ",
                        "-"
                      )}/${productSingle._id}`
                    )
                  }
                />
              )}
              <Reviews
                reviews={reviews}
                viewMorePer={10}
                hasViewAllBtn
              />
              <div id="results-disclaimer">
                {" "}
                * Muscle &amp; Strength does not imply any
                medical claims from this review. There are no
                guarantees of specific results and results may
                vary.
              </div>
            </div>
            <div class="main-content end">
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

      <FeatherLight />
      <SecureTransaction />
    </>
  );
};
