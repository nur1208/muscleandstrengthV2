import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./article.styles";

export const Article = () => {
  const { id } = useParams();

  const { fetchSingleArticle } = useReduxActions();
  useEffect(() => {
    fetchSingleArticle(id);

    // createdAt;
  }, [id]);

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
