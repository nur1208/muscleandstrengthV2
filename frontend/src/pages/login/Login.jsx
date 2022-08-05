import React from "react";
import {
  Banner,
  EmailSignUp,
  Footer,
  Form,
  Header,
  NavbarInfo,
  PerksFooter,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./login.styles";

export const Login = () => {
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
      <main id="main-wrapper">
        <article class="content">
          <Form />
        </article>
      </main>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
