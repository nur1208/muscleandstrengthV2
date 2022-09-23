import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReduxActions } from "../../hooks";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { Button } from "../button/Button";
import { MainWrapper } from "./topProducts.styles";

export const TopProducts = () => {
  const { fetchProducts } = useReduxActions();
  const { data } = useSelector((state) => state.product_store);
  useEffect(() => {
    fetchProducts(`rank[gte]=1&limit=50&sort=rank`, (data) => ({
      top50Products: data.doc,
    }));
  }, []);
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <ol class="reviewProductList">
        {data.top50Products.map((product, index) => {
          const buyOption =
            product.buyingOptions &&
            product.buyingOptions.length !== 0 &&
            // select fist buying option with deal,
            // If all buying options without deal than select the first option
            (product.buyingOptions.find(({ deal }) => deal) ||
              product.buyingOptions[0]);

          const handleClick = () => {
            navigate(
              `/store/product/${product.name.replaceAll(
                " ",
                "-"
              )}/${product._id}`.replace("%", ""),
              {
                state: { id: product._id, productData: product },
              }
            );
          };

          return (
            <li key={`product-${index}`}>
              <div class="prodRank">
                <span class="rank">{1 + index}</span>
              </div>
              <div class="prodImg">
                <a onClick={handleClick}>
                  <img
                    class=" lazyloaded"
                    data-src="https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/combat_protein_powder_4lbs_chocolate_milk_2.jpg"
                    src={product.imgUrl[400]?.split(" ")[0]}
                    alt={product.title}
                  />
                </a>
              </div>
              <h4 class="product-title">
                <a
                  style={{ color: "#333" }}
                  onClick={handleClick}
                >
                  {`${product?.brand?.title} ${product?.name}`}
                </a>
              </h4>
              {/* <div class="brand">
                <a
                  class="brand-img"
                  href="https://www.muscleandstrength.com/store/brands/musclepharm"
                >
                  <img
                    class=" lazyloaded"
                    data-src="https://cdn.muscleandstrength.com/store/media/aitmanufacturers/logo/95.jpg"
                    alt="MusclePharm Supplements: Lowest Price at Muscle &amp; Strength!"
                    src="https://cdn.muscleandstrength.com/store/media/aitmanufacturers/logo/95.jpg"
                  />
                </a>
                <div class="deal-count">
                  <div class="count-box">10</div>
                  <span class="label-title">Deals</span>
                  <span class="label-dsc">running</span>
                </div>
                <div class="prod-count">
                  <div class="count-box">25</div>
                  <span class="label-title">Products</span>
                  <span class="label-dsc">available</span>
                </div>
                <Button text="View Brand" isSmall isBlue />
              </div> */}
              <div class="prodData">
                <div class="font-s-small brand-label">
                  By:{" "}
                  <a href="https://www.muscleandstrength.com/store/brands/musclepharm">
                    {product?.brand?.title}
                  </a>
                </div>
                <div class="tagline">{product?.tagline}</div>
                {buyOption.deal && (
                  <a
                    class="promo-label label success"
                    href="/store/combat-powder.html"
                    title="LIMITED TIME PRICE CUT"
                  >
                    <SvgWrapper childStyle="width: 1em; height: 1em; margin-bottom: -0.1em; margin-right: 0.2em;">
                      {getIconById(ICONS_ID.IconDealWhite)}
                    </SvgWrapper>
                    {/* <svg style=>
                    <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-deal-white"></use>
                  </svg> */}
                    {buyOption.deal}{" "}
                  </a>
                )}
                <Button
                  text="View Product"
                  isSmall
                  isBlue
                  onClick={handleClick}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </MainWrapper>
  );
};
