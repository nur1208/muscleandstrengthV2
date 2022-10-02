import React from "react";
import {
  ArticleBody,
  ArticleComments,
  ArticleFooter,
  ArticleHeader,
  ArticleSummary,
  Banner,
  EmailSignUp,
  Footer,
  Header,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { MainWrapper } from "./article.styles";

export const Article = () => {
  return (
    <MainWrapper>
      {" "}
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <div id="main-wrap">
        <div className="content">
          <ArticleHeader />
          <ArticleSummary />
          <ArticleBody />
          <ArticleFooter />
          <ArticleComments />
        </div>
      </div>
      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
