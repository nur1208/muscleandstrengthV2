import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getIconById, ICONS_ID } from "../../icons";
import { capitalizeFirstLetter } from "../../utils";
import { MainWrapper } from "./navbarInfo.styles";

export const NavbarInfo = () => {
  const { pathname } = useLocation();
  const { customNavInfo } = useSelector(
    (state) => state.navbar_store
  );

  return (
    <MainWrapper>
      <div class="nav-block--inner">
        <div class="breadcrumb">
          <Link
            to="https://www.muscleandstrength.com/"
            title="Home"
            id="bc-home"
            class="breadcrumb-0"
          >
            Home
          </Link>{" "}
          {customNavInfo
            ? customNavInfo
            : pathname
                .split("/")
                .slice(1)
                .map(
                  (path) => `> ${capitalizeFirstLetter(path)} `
                )}
        </div>
        <div class="free-shipping-block">
          <div class="international">
            <span class="icon">
              {getIconById(ICONS_ID.IconAirplane, {
                width: "1em",
                height: "1em",
              })}
            </span>
            <span class="base-text">
              We Ship To Hong Kong SAR China
            </span>
            <span class="text"> View Details</span>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
