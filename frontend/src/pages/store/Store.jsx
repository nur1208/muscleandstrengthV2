import React from "react";
import { Banner, Header, NavbarInfo } from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./store.styles";

export const Store = () => {
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
    </MainWrapper>
  );
};
