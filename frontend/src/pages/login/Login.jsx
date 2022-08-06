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
  loginFields,
} from "../../components/data";
import { MainWrapper } from "./login.styles";

export const Login = () => {
  const formProps = {
    title: "Login to Your Account",
    type: FORM_TYPES.LOGIN,
    sideInfoTitle: "Don't Have an Account?",
    fields: loginFields,
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
