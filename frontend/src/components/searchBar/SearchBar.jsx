import React, { useState } from "react";
import { IconCloseX, IconSearchRightBold } from "../../icons";
import { MainWrapper } from "./searchBar.styles";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <MainWrapper>
      <div class="search-bar mobile-search">
        <form
          id="search_mini_form--mobile"
          class="search_mini_form"
          action="/store/search/"
          method="get"
        >
          <div class="search-form-wrapper">
            <label class="visually-hidden" for="search--mobile">
              Search terms
            </label>
            <input
              id="search--mobile"
              type="search"
              name="q"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search products, brands, workouts..."
              autocomplete="off"
            />

            <span
              class="search-input-cleaner"
              style={{ display: searchValue ? "block" : "none" }}
            >
              <IconCloseX
                style={{
                  width: "1em",
                  height: "1em",
                  marginTop: "-.5em",
                }}
              />
            </span>
            <button class="search-button" type="submit">
              <span class="visually-hidden">Submit</span>
              <IconSearchRightBold />
            </button>
          </div>
        </form>
      </div>
    </MainWrapper>
  );
};
