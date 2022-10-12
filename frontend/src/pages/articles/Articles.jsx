import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Banner,
  CategoryStats,
  EmailSignUp,
  Footer,
  FrontHero,
  Header,
  MainPageCategory,
  TaxonomyHeading,
  Articles as ArticlesComp,
} from "../../components";
import {
  articleState,
  BANNER_BLOCK_12,
  categoryArticle,
} from "../../components/data";
import { FRONT_HERO_TYPE } from "../../components/frontHero/utils";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./articles.styles";

export const Articles = () => {
  const {
    data: { mostPopularArticles, newArticles },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(
      `type=Most Popular Articles&limit=6`,
      (data) => ({
        mostPopularArticles: data.doc,
      })
    );

    fetchArticles(`type=New Articles&limit=6`, (data) => ({
      newArticles: data.doc,
    }));

    // createdAt;
  }, []);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <FrontHero type={FRONT_HERO_TYPE.ARTICLE} />
      <CategoryStats stats={articleState} />
      <div id="main-wrap">
        <div className="main-content">
          <div className="content">
            <TaxonomyHeading
              heading="ARTICLE CATEGORIES"
              subheading="Choose a topic you're interested in learning about. If you need to know more be sure to post a comment and one of our experts will reply."
            />
            <MainPageCategory category={categoryArticle} />
            <ArticlesComp
              title="Most Popular Articles"
              subTitle="The most popular articles, expert guides and videos this week at Muscle & Strength."
              articles={mostPopularArticles}
            />
            <ArticlesComp
              title="New Articles"
              subTitle="Just posted on Muscle &amp; Strength. To keep up with new workouts, guides, tools, videos etc."
              articles={newArticles}
            />
          </div>
        </div>
      </div>

      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
