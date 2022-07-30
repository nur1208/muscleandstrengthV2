import React from "react";
import { useSelector } from "react-redux";

import { Header, SitewideBanner } from "../../components";
import { OPENED_TYPES } from "../../redux/constants";
import { MainWrapper } from "./home.styles";

export const Home = () => {
  const { isOpen, openedType } = useSelector(
    (state) => state.navbar_store
  );
  return (
    <MainWrapper>
      <div>
        <div>
          <SitewideBanner />
          <Header />
        </div>
        {isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR && (
          <div class="menu-mask"></div>
        )}
      </div>
    </MainWrapper>
  );
};
