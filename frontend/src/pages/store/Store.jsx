import React from "react";
import { Banner, Header, NavbarInfo } from "../../components";
import {
  BANNER_BLOCK_12,
  STORE_TOP_BANNER,
} from "../../components/data";
import { MainWrapper } from "./store.styles";

export const Store = () => {
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
      <main id="main-wrapper">
        <article className="content">
          <section id="top-banner">
            <Banner noImageDownloaded {...STORE_TOP_BANNER[1]} />
          </section>
        </article>
      </main>
    </MainWrapper>
  );
};
