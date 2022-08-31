import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { Button } from "../button/Button";
import { Item } from "./Item";
import { MainWrapper } from "./layeredNavigation.styles";

export const LayeredNavigation = () => {
  return (
    <MainWrapper>
      <div class="block block-layered-nav">
        <div class="block-content">
          <div class="block-subtitle">
            <div class="text">
              Showing results for 'Perfect Sports'{" "}
            </div>
            <div class="btn-tab-container">
              <h2 class="blue-stripe btn-tab">All Products</h2>
              <Button
                isSmall
                isLightBlue
                text="Sort &amp; Filter"
              />
              {/* <div class="btn btn-sm btn-light-blue btn-tab">
                
              </div> */}
            </div>
          </div>
          <div
            class="block-content__filters refine-search-wrap"
            style={{ display: "block" }}
          >
            <div class="sorting-bar a-promo-sort-bar">
              <div class="option-wrap">
                <div class="option">
                  <a
                    href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=asc&amp;order=sales_ranking&amp;q=Perfect+Sports+"
                    class="inner-wrap"
                  >
                    Most Popular
                  </a>
                </div>
                <div class="option">
                  <a
                    href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=asc&amp;order=price&amp;q=Perfect+Sports+"
                    class="inner-wrap"
                  >
                    Price
                  </a>
                </div>
                <div class="option">
                  <a
                    href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=asc&amp;order=name&amp;q=Perfect+Sports+"
                    class="inner-wrap"
                  >
                    Name
                  </a>
                </div>
              </div>
              <div class="option option-toggle">
                <div class="inner">
                  <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;dir=desc&amp;order=position&amp;q=Perfect+Sports+">
                    ASC {getIconById(ICONS_ID.IconAsc)}
                  </a>
                </div>
              </div>
            </div>
            <Item />
            <dl id="brand-list-id" class="narrow-by-list">
              <dt class="filter-item--active">
                Brand <span class="caret-down"></span>
              </dt>
              <dd>
                <ul class="short-list-on only-five">
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=553&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_553"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_553"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Perfect Sports (39)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=120&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_120"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_120"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      MusclePharm (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=471&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_471"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_471"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Muscle &amp; Strength (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=30&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_30"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_30"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      AllMax Nutrition (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=81&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_81"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_81"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      NOW Foods (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=383&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_383"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_383"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      USN (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=42&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_42"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_42"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      BPI Sports (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=67&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_67"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_67"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      MAN Sports (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=82&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_82"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_82"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Nutrex (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=200&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_200"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_200"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Force Factor (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=267&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_267"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_267"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      FitMiss (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;manufacturer=562&amp;q=Perfect+Sports+">
                      <label
                        for="solr_manufacturer_562"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_manufacturer_562"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Obvi (1)
                    </a>
                  </li>
                  <button class="show-more cta">
                    Show More +
                  </button>
                  <button class="show-less cta">
                    Show Less -
                  </button>
                </ul>
              </dd>
            </dl>
            <dl id="price-list-id" class="narrow-by-list">
              <dt class="filter-item--active">
                Price <span class="caret-down"></span>
              </dt>
              <dd>
                <ul class="short-list-on only-five">
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=0-10&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_0-10"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_0-10"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Less than <span class="price">$10.00</span>{" "}
                      (4)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=10-20&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_10-20"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_10-20"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$10.00</span> -{" "}
                      <span class="price">$20.00</span> (7)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=20-30&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_20-30"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_20-30"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$20.00</span> -{" "}
                      <span class="price">$30.00</span> (7)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=30-40&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_30-40"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_30-40"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$30.00</span> -{" "}
                      <span class="price">$40.00</span> (6)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=40-50&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_40-50"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_40-50"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$40.00</span> -{" "}
                      <span class="price">$50.00</span> (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=50-60&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_50-60"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_50-60"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$50.00</span> -{" "}
                      <span class="price">$60.00</span> (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=60-70&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_60-70"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_60-70"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$60.00</span> -{" "}
                      <span class="price">$70.00</span> (5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=70-80&amp;q=Perfect+Sports+">
                      <label
                        for="solr_price_70-80"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_price_70-80"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      <span class="price">$70.00</span> -{" "}
                      <span class="price">$80.00</span> (4)
                    </a>
                  </li>
                  <button class="show-more cta">
                    Show More +
                  </button>
                  <button class="show-less cta">
                    Show Less -
                  </button>
                </ul>
              </dd>
            </dl>
            <dl
              id="average-rating-list-id"
              class="narrow-by-list"
            >
              <dt class="filter-item--active">
                Average Rating <span class="caret-down"></span>
              </dt>
              <dd>
                <ul class="rating-filter">
                  <li class="rating-filter-item ratings detailed">
                    <a
                      class="rating-filter-item-wrap"
                      href="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+&amp;review_rating_summary=4-0"
                    >
                      <div class="rating-filter-item-stars rating-box">
                        <div class="star-overlay"></div>
                        <div
                          class="rating"
                          //   style="width:80%;"
                        ></div>
                      </div>
                      <span class="rating-filter-item-text">
                        &amp; up (24)
                      </span>
                    </a>
                  </li>
                  <li class="rating-filter-item ratings detailed">
                    <a
                      class="rating-filter-item-wrap"
                      href="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+&amp;review_rating_summary=3-0"
                    >
                      <div class="rating-filter-item-stars rating-box">
                        <div class="star-overlay"></div>
                        <div
                          class="rating"
                          //   style="width:60%;"
                        ></div>
                      </div>
                      <span class="rating-filter-item-text">
                        &amp; up (24)
                      </span>
                    </a>
                  </li>
                  <li class="rating-filter-item ratings detailed">
                    <a
                      class="rating-filter-item-wrap"
                      href="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+&amp;review_rating_summary=2-0"
                    >
                      <div class="rating-filter-item-stars rating-box">
                        <div class="star-overlay"></div>
                        <div
                          class="rating"
                          //   style="width:40%;"
                        ></div>
                      </div>
                      <span class="rating-filter-item-text">
                        &amp; up (24)
                      </span>
                    </a>
                  </li>
                  <li class="rating-filter-item ratings detailed">
                    <a
                      class="rating-filter-item-wrap"
                      href="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+&amp;review_rating_summary=1-0"
                    >
                      <div class="rating-filter-item-stars rating-box">
                        <div class="star-overlay"></div>
                        <div
                          class="rating"
                          //   style="width:20%;"
                        ></div>
                      </div>
                      <span class="rating-filter-item-text">
                        &amp; up (24)
                      </span>
                    </a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl
              id="product-flavor-list-id"
              class="narrow-by-list"
            >
              <dt class="filter-item--active">
                Product Flavor <span class="caret-down"></span>
              </dt>
              <dd>
                <ul class="short-list-on only-five">
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Fruit+Punch&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Fruit Punch"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Fruit Punch"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Fruit Punch (6)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Vanilla+Ice+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Vanilla Ice Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Vanilla Ice Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Vanilla Ice Cream (6)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Ice+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Ice Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Ice Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Ice Cream (5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Peanut+Butter+Ice+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Peanut Butter Ice Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Peanut Butter Ice Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Peanut Butter Ice Cream (5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Cookies+%27n+Cream+Ice+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Cookies 'n Cream Ice Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Cookies 'n Cream Ice Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Cookies 'n Cream Ice Cream (5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Orange+Gummy+Bears&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Orange Gummy Bears"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Orange Gummy Bears"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Orange Gummy Bears (5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Strawberry+Ice+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Strawberry Ice Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Strawberry Ice Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Strawberry Ice Cream (5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Banana&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Banana"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Banana"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Banana (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Blue+Raspberry&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Blue Raspberry"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Blue Raspberry"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Blue Raspberry (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Wafer+Crisp&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Wafer Crisp"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Wafer Crisp"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Wafer Crisp (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Cookies+%27n+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Cookies 'n Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Cookies 'n Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Cookies 'n Cream (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=French+Vanilla&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_French Vanilla"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_French Vanilla"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      French Vanilla (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Pineapple+Mango&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Pineapple Mango"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Pineapple Mango"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Pineapple Mango (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Triple+Rich+Dark+Chocolate&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Triple Rich Dark Chocolate"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Triple Rich Dark Chocolate"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Triple Rich Dark Chocolate (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Unflavored&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Unflavored"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Unflavored"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Unflavored (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Candy+Cane+Ice+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Candy Cane Ice Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Candy Cane Ice Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Candy Cane Ice Cream (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Monkey&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Monkey"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Monkey"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Monkey (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Peanut+Butter&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Peanut Butter"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Peanut Butter"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Peanut Butter (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Intense+Hawaiian+Pineapple+Candy&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Intense Hawaiian Pineapple Candy"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Intense Hawaiian Pineapple Candy"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Intense Hawaiian Pineapple Candy (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Intense+Peach+Rings+Candy&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Intense Peach Rings Candy"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Intense Peach Rings Candy"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Intense Peach Rings Candy (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Intense+Watermelon+Candy&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Intense Watermelon Candy"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Intense Watermelon Candy"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Intense Watermelon Candy (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Marshmallow+Hot+Chocolate&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Marshmallow Hot Chocolate"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Marshmallow Hot Chocolate"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Marshmallow Hot Chocolate (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Milk+Chocolate&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Milk Chocolate"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Milk Chocolate"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Milk Chocolate (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Pumpkin+Spice+Latte&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Pumpkin Spice Latte"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Pumpkin Spice Latte"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Pumpkin Spice Latte (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Salted+Caramel&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Salted Caramel"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Salted Caramel"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Salted Caramel (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Ultra+Orange&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Ultra Orange"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Ultra Orange"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Ultra Orange (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Candy+Tarts&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Candy Tarts"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Candy Tarts"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Candy Tarts (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Delight&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Delight"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Delight"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Delight (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Fudge+Brownie&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Fudge Brownie"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Fudge Brownie"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Fudge Brownie (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Ice+Dream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Ice Dream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Ice Dream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Ice Dream (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Milk&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Milk"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Milk"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Milk (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Chocolate+Peanut+Candy&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Chocolate Peanut Candy"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Chocolate Peanut Candy"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Chocolate Peanut Candy (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Cookies+N%27+Cream&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Cookies N' Cream"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Cookies N' Cream"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Cookies N' Cream (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Grape&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Grape"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Grape"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Grape (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Green+Apple&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Green Apple"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Green Apple"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Green Apple (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Intense+Blue+Raspberry&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Intense Blue Raspberry"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Intense Blue Raspberry"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Intense Blue Raspberry (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Lemon+Drop&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Lemon Drop"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Lemon Drop"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Lemon Drop (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Lemon+Lime&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Lemon Lime"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Lemon Lime"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Lemon Lime (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Mango&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Mango"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Mango"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Mango (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Orange+Mango&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Orange Mango"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Orange Mango"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Orange Mango (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Peach+Bellini&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Peach Bellini"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Peach Bellini"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Peach Bellini (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Peach+Rings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Peach Rings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Peach Rings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Peach Rings (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Puck+%27n+Sour+Watermelon+Candy&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Puck 'n Sour Watermelon Candy"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Puck 'n Sour Watermelon Candy"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Puck 'n Sour Watermelon Candy (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Rainbow+Sherbet&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Rainbow Sherbet"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Rainbow Sherbet"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Rainbow Sherbet (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Sour+Cherry&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Sour Cherry"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Sour Cherry"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Sour Cherry (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Southern+Sweet+Tea&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Southern Sweet Tea"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Southern Sweet Tea"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Southern Sweet Tea (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Strawberry&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Strawberry"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Strawberry"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Strawberry (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Strawberry+Daiquiri&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Strawberry Daiquiri"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Strawberry Daiquiri"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Strawberry Daiquiri (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Swedish+Sharks+Candy&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Swedish Sharks Candy"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Swedish Sharks Candy"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Swedish Sharks Candy (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Vanilla&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Vanilla"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Vanilla"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Vanilla (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Vanilla+Chai&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Vanilla Chai"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Vanilla Chai"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Vanilla Chai (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Vanilla+Cupcake&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Vanilla Cupcake"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Vanilla Cupcake"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Vanilla Cupcake (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_flavor=Watermelon&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_flavor_Watermelon"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_flavor_Watermelon"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Watermelon (1)
                    </a>
                  </li>
                  <button class="show-more cta">
                    Show More +
                  </button>
                  <button class="show-less cta">
                    Show Less -
                  </button>
                </ul>
              </dd>
            </dl>
            <dl id="product-size-list-id" class="narrow-by-list">
              <dt class="filter-item--active">
                Product Size <span class="caret-down"></span>
              </dt>
              <dd>
                <ul class="short-list-on only-five">
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=30+Servings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_30 Servings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_30 Servings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      30 Servings (10)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=5lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_5lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_5lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      5lbs (7)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=1lb&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_1lb"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_1lb"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      1lb (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=4.4lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_4.4lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_4.4lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      4.4lbs (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=60+Capsules&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_60 Capsules"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_60 Capsules"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      60 Capsules (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=1+Size&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_1 Size"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_1 Size"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      1 Size (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=1.6lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_1.6lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_1.6lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      1.6lbs (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=120+Capsules&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_120 Capsules"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_120 Capsules"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      120 Capsules (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=2lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_2lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_2lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      2lbs (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=60+Tablets&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_60 Tablets"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_60 Tablets"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      60 Tablets (2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=1+Shaker&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_1 Shaker"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_1 Shaker"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      1 Shaker (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=1%2C000g&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_1,000g"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_1,000g"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      1,000g (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=1.5lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_1.5lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_1.5lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      1.5lbs (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=100+Tablets&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_100 Tablets"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_100 Tablets"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      100 Tablets (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=10lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_10lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_10lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      10lbs (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=30+Capsules&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_30 Capsules"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_30 Capsules"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      30 Capsules (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=300+Servings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_300 Servings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_300 Servings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      300 Servings (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=31+Servings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_31 Servings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_31 Servings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      31 Servings (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=350g&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_350g"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_350g"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      350g (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=36+Servings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_36 Servings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_36 Servings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      36 Servings (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=3lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_3lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_3lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      3lbs (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=40+Servings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_40 Servings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_40 Servings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      40 Servings (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=400g&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_400g"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_400g"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      400g (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=4lbs&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_4lbs"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_4lbs"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      4lbs (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=50+Servings&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_50 Servings"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_50 Servings"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      50 Servings (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=5mg+60+VCaps&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_5mg 60 VCaps"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_5mg 60 VCaps"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      5mg 60 VCaps (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=700mL&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_700mL"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_700mL"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      700mL (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=75+Capsules&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_75 Capsules"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_75 Capsules"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      75 Capsules (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=90+Capsules&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_90 Capsules"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_90 Capsules"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      90 Capsules (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=90+Softgels&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_90 Softgels"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_90 Softgels"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      90 Softgels (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;product_size=96+Capsules+%28Exp.+04%2F22%29&amp;q=Perfect+Sports+">
                      <label
                        for="solr_product_size_96 Capsules (Exp. 04/22)"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_product_size_96 Capsules (Exp. 04/22)"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      96 Capsules (Exp. 04/22) (1)
                    </a>
                  </li>
                  <button class="show-more cta">
                    Show More +
                  </button>
                  <button class="show-less cta">
                    Show Less -
                  </button>
                </ul>
              </dd>
            </dl>
            <dl id="form-factor-list-id" class="narrow-by-list">
              <dt class="filter-item--active">
                Form Factor <span class="caret-down"></span>
              </dt>
              <dd>
                <ul class="short-list-on only-five">
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;form_factor=458&amp;q=Perfect+Sports+">
                      <label
                        for="solr_form_factor_458"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_form_factor_458"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Powder (33)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;form_factor=452&amp;q=Perfect+Sports+">
                      <label
                        for="solr_form_factor_452"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_form_factor_452"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Capsule (6)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;form_factor=461&amp;q=Perfect+Sports+">
                      <label
                        for="solr_form_factor_461"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_form_factor_461"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Tablet (3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;form_factor=455&amp;q=Perfect+Sports+">
                      <label
                        for="solr_form_factor_455"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_form_factor_455"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Liquid (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;form_factor=460&amp;q=Perfect+Sports+">
                      <label
                        for="solr_form_factor_460"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_form_factor_460"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Softgel (1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;form_factor=467&amp;q=Perfect+Sports+">
                      <label
                        for="solr_form_factor_467"
                        class="is-hidden"
                      >
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_form_factor_467"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      Vegetarian Capsule (1)
                    </a>
                  </li>
                  <button class="show-more cta">
                    Show More +
                  </button>
                  <button class="show-less cta">
                    Show Less -
                  </button>
                </ul>
              </dd>
            </dl>
            <div class="filter-process button-row">
              <Button isSmall isBlue text="Apply Filters" />
              {/* <button
                id="layered-navigation-apply"
                class="filters-done btn btn-blue btn-sm"
              ></button> */}
              <Button isSmall text="Reset" />
              {/* 
              <button
                data-clear="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+"
                class="clear-filters btn btn-sm"
              >
                Reset
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
