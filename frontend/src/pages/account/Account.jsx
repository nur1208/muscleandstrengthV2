import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  AccountNav,
  AddEditAddress,
  Banner,
  EmailSignUp,
  Footer,
  Header,
  MyPoints,
  MyReferrals,
  NavbarInfo,
  PerksFooter,
  SavedCards,
  UpdateProfile,
} from "../../components";
import {
  ACCOUNT_NAV_OPTIONS,
  BANNER_BLOCK_12,
} from "../../components/data";
import { useUpdateCustomNavInfo } from "../../hooks";
import { MainWrapper } from "./account.styles";
import { DashboardHome } from "./DashboardHome";
import { OrderHistory } from "./OrderHistory";

export const Account = () => {
  useUpdateCustomNavInfo("> Store > My account");

  const { navItem } = useParams();
  const renderNavContent = () => {
    switch (navItem) {
      case ACCOUNT_NAV_OPTIONS.DASHBOARD_HOME:
        return <DashboardHome />;

      case ACCOUNT_NAV_OPTIONS.ORDER_HISTORY:
        return <OrderHistory />;

      case ACCOUNT_NAV_OPTIONS.POINTS_REWARD:
        return <MyPoints />;

      case ACCOUNT_NAV_OPTIONS.MY_REFERRALS:
        return <MyReferrals />;

      case ACCOUNT_NAV_OPTIONS.SAVED_CREDIT_CARDS:
        return <SavedCards />;

      case ACCOUNT_NAV_OPTIONS.ADDRESS_BOOK:
        return <AddEditAddress />;

      case ACCOUNT_NAV_OPTIONS.UPDATE_PROFILE:
        return <UpdateProfile />;

      default:
        return undefined;
    }
  };
  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
      <div id="main-wrap">
        <div className="aside">
          <AccountNav />
        </div>
        <div className="main-content">{renderNavContent()}</div>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
