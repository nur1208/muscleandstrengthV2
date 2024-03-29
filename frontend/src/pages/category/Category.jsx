import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import {
  AjaxErrors,
  Banner,
  EmailSignUp,
  Footer,
  Header,
  LayeredNavigation,
  MobileTabs,
  NavbarInfo,
  PageTitle,
  PerksFooter,
  ProductsWrapper,
  SearchInfoBar,
  StoreSectionSwiper,
  SubCategories,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useReduxActions } from "../../hooks";
import { capitalizeFirstLetter } from "../../utils";
import { MainWrapper } from "./category.styles";
import {
  proteinCategories,
  preWorkoutCategories,
  generalHealthCategories,
  clothingCategories,
  functionalFoodsCategories,
  fatLossCategories,
  accessoriesCategory,
  bcaasCategory,
} from "./data";

export const Category = () => {
  const { type, subType } = useParams();
  const { data, loading } = useSelector(
    (state) => state.product_store
  );
  const isNotPC = useMediaQuery({ minWidth: 840 });
  const { fetchProducts } = useReduxActions();
  const [currentPage, setCurrentPage] = useState(1);
  const trendingProps = {
    title: "Trending Products",
    products: data?.trendingProducts,
  };
  const subCategory =
    subType &&
    subType
      .replace("-", " ")
      .split(" ")
      .map((item) => capitalizeFirstLetter(item))
      .join(" ");
  useEffect(() => {
    if (subType) {
      fetchProducts(
        `subCategory=${subType.replace("&", "%26")}&limit=20`,
        (data) => ({
          categoryProducts: data.doc,
        })
      );
      fetchProducts(
        `subCategory=${subType.replace("&", "%26")}`,
        (data) => ({
          categoryProductsCount: data.count,
        }),
        true
      );
    } else {
      fetchProducts(`category=${type}&limit=20`, (data) => ({
        categoryProducts: data.doc,
      }));
      fetchProducts(
        `category=${type}`,
        (data) => ({
          categoryProductsCount: data.count,
        }),
        true
      );
    }
  }, [type, subType]);

  const getCategoriesData = (type) => {
    switch (type) {
      case "pre-workout":
        return preWorkoutCategories;
      case "general-health":
        return generalHealthCategories;
      case "clothing":
        return clothingCategories;
      case "functional-foods":
        return functionalFoodsCategories;
      case "fat-loss":
        return fatLossCategories;
      case "accessories":
        return accessoriesCategory;
      case "bcaas":
        return bcaasCategory;
      default:
        return proteinCategories;
    }
  };

  const handleShowNext = () => {
    if (!loading) {
      fetchProducts(
        `${
          subType ? "subCategory" : "category"
        }=${type}&limit=20&page=${currentPage + 1}`,
        (dataNew) => ({
          categoryProducts: [
            ...data.categoryProducts,
            ...dataNew.doc,
          ],
        })
      );
      setCurrentPage(currentPage + 1);
    }
  };
  const categoriesData = getCategoriesData(type);
  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo noMarginBottom />
      <PageTitle
        title={
          subType
            ? capitalizeFirstLetter(subCategory)
            : capitalizeFirstLetter(
                `${type.replace("-", " ")} category`
              )
        }
      />
      <main id="main-wrapper">
        <article className="before-content">
          {!subType && categoriesData.bannerData && (
            <section>
              <Banner
                noImageDownloaded
                {...categoriesData.bannerData}
              />
            </section>
          )}
          {!subType && (
            <section>
              <SubCategories
                category={type}
                categories={categoriesData.subCategories.map(
                  ({ title }) => title
                )}
              />
            </section>
          )}

          <section>
            <StoreSectionSwiper {...trendingProps} />
          </section>
          {isNotPC && (
            <section>
              <h2 class="blue-stripe show-for-medium all-products">
                All Products
              </h2>
            </section>
          )}
        </article>
        <article className="col2-container">
          <aside className="left-aside">
            <div>
              <LayeredNavigation />
            </div>
          </aside>
          <section className="content">
            <div className="result-content-wrap">
              <SearchInfoBar
                hasSort
                showNum={data.categoryProducts.length}
                countStore={data.categoryProductsCount}
              />
              {false && <AjaxErrors />}
              <ProductsWrapper
                hasAddCardBtn
                showNext={20}
                handleShowNext={handleShowNext}
                count={data.categoryProductsCount}
                products={data.categoryProducts}
                loading={loading}
              />
            </div>
          </section>
        </article>
      </main>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
