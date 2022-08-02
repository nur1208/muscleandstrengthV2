import React from "react";
import { Banner, Header } from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./store.styles";

export const Store = () => {
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
    </MainWrapper>
  );
};
