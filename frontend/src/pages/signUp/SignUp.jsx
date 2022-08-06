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
import {
  BANNER_BLOCK_12,
  FORM_TYPES,
  signUpFields,
} from "../../components/data";
import { MainWrapper } from "./signUp.styles";

export const SignUp = () => {
  const formProps = {
    title: "Create an Account",
    type: FORM_TYPES.SIGN_UP,
    sideInfoTitle: "Join Over 500k M&S Members Who Get:",
    fields: signUpFields,
  };
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
      <main id="main-wrapper">
        <article class="content">
          <Form {...formProps} />
        </article>
      </main>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
