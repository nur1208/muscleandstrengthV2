import React from "react";
import {
  AccountNav,
  AddressBox,
  Banner,
  EmailSignUp,
  Footer,
  Header,
  NavbarInfo,
  PerksFooter,
  SimpleAccountInfo,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { useUpdateCustomNavInfo } from "../../hooks";
import { MainWrapper } from "./account.styles";

export const Account = () => {
  useUpdateCustomNavInfo("> Store > My account");
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
        <div className="main-content">
          <h1>Account Dashboard</h1>
          <div className="dashboard clearfix">
            <SimpleAccountInfo />
            <AddressBox />
          </div>
        </div>
      </div>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
