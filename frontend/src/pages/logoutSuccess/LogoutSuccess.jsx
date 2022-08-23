import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  Button,
  EmailSignUp,
  Footer,
  Header,
  InPageNav,
  NavbarInfo,
  PerksFooter,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle";
import { useUpdateCustomNavInfo } from "../../hooks";
import { MainWrapper } from "./logoutSuccess.styles";

export const LogoutSuccess = () => {
  useUpdateCustomNavInfo("> Store");
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <NavbarInfo />
      <main id="main-wrapper">
        <article className="content">
          <div className="logout-container">
            <section class="logout-message text-center">
              <h1 class="page-title">You're Logged Out</h1>
              <p>
                <Button
                  text="Log back in"
                  isSmall
                  onClick={() =>
                    navigate("/store/customer/account/login")
                  }
                />
              </p>
            </section>
            <section class="more-on-mns">
              <SectionTitle title="Looking For More?" />
              <InPageNav bgc="#fff" />
            </section>
          </div>
        </article>
      </main>
      <PerksFooter />
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
