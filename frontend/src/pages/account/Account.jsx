import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  AccountNav,
  Banner,
  EmailSignUp,
  Footer,
  Header,
  NavbarInfo,
  PerksFooter,
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
