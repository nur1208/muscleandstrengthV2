import React, { useState } from "react";
import { RatingBox } from "../ratingBox/RatingBox";

export const Item = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <dl id="category-list-id" class="narrow-by-list">
      <dt
        class={isOpen ? "filter-item--active" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <span class="caret-down"></span>
      </dt>
      <dd style={{ display: !isOpen ? "none" : "block" }}>
        <ul
          class={`short-list-on show-five-mobile ${
            isShowMore ? "active" : ""
          }`}
        >
          {label.toLocaleLowerCase() !== "average rating"
            ? items &&
              items.map((item, index) => {
                const key = `index-${index}`;
                if (label.toLocaleLowerCase() === "price")
                  return (
                    <li key={key}>
                      <a
                        href="https://www.muscleandstrength.com/store/search?___store=us&amp;price=0-10&amp;q=Perfect+Sports+"
                        class=""
                      >
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
                          class=""
                        />
                        {index === 0 ? (
                          <>
                            Less than{" "}
                            <span class="price">
                              {item.price}
                            </span>
                            {item.num}
                          </>
                        ) : (
                          <>
                            <span class="price">
                              {item.price}
                            </span>{" "}
                            -{" "}
                            <span class="price">
                              {item.price2}
                            </span>{" "}
                            ({item.num})
                          </>
                        )}
                      </a>
                    </li>
                  );
                return (
                  <li key={key}>
                    <a href="#">
                      <label for="solr_cat_9" class="is-hidden">
                        Checkbox for option{" "}
                      </label>
                      <input
                        id="solr_cat_9"
                        type="checkbox"
                        name=""
                        value=""
                        onchange=""
                      />
                      {item}
                    </a>
                  </li>
                );
              })
            : Array(4)
                .fill(true)
                .map((_, index) => (
                  <li
                    key={`index-${index}`}
                    class="rating-filter-item ratings detailed"
                  >
                    <a
                      class="rating-filter-item-wrap"
                      href="https://www.muscleandstrength.com/store/search?___store=us&amp;q=Perfect+Sports+&amp;review_rating_summary=4-0"
                    >
                      <RatingBox width={80 - 20 * index} />
                      <span class="rating-filter-item-text">
                        &amp; up (24)
                      </span>
                    </a>
                  </li>
                ))}

          <button
            class="show-more cta"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? "Show Less -" : "Show More +"}
          </button>
        </ul>
      </dd>
    </dl>
  );
};
