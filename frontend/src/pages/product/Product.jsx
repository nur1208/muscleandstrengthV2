import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
  const {
    state: { id },
  } = useLocation();

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

  useEffect(() => {
    fetchStoreSingleProduct(id);
    fetchReviews(id);
  }, [id]);

  if (loading || !productSingle.imgUrl)
    return <div>loading...</div>;

  return (
    <>
      <MainWrapper>
        <div id="page">
          <Banner {...BANNER_BLOCK_12} />
          <Header />
          <NavbarInfo />
          <div id="main-wrap">
            <div className="main-content">
              <ProductHeader {...productSingle} />
              <FeaturesList />
              <Deals
                deals={productSingle?.productDetail?.deals}
              />
            </div>
            <div class="aside aside-after">
              <BuyingOptions
                options={productSingle.buyingOptions}
              />
              <div class="product-aside"></div>
              <Nutrition
                nutrition={
                  productSingle?.productDetail?.nutrition
                }
              />
            </div>
            <div class="main-content continued">
              <ProductInfo
                productInfo={
                  productSingle?.productDetail?.productInfo
                }
              />
              <ReviewsOverall
                {...productSingle?.productDetail?.reviewsOverall}
              />
              <Reviews reviews={reviews} />
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
