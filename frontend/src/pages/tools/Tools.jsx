import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Articles,
  Banner,
  EmailSignUp,
  Footer,
  FrontHero,
  Header,
} from "../../components";
import { BANNER_BLOCK_12 } from "../../components/data";
import { FRONT_HERO_TYPE } from "../../components/frontHero/utils";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./tools.styles";

export const Tools = () => {
  const {
    data: { fitnessToolsArticles },
  } = useSelector((state) => state.article_store);

  const { fetchArticles } = useReduxActions();
  useEffect(() => {
    fetchArticles(`type=Fitness Tools&limit=5`, (data) => ({
      fitnessToolsArticles: data.doc,
    }));
  }, []);

  return (
    <MainWrapper>
      <Banner {...BANNER_BLOCK_12} />
      <Header />
      <FrontHero type={FRONT_HERO_TYPE.TOOLS} />
      <div id="main-wrap">
        <div className="main-content">
          <div className="content">
            <Articles
              title="Fitness Tools"
              subTitle="Our fitness tools are designed to make it easy to calculate calorie requiements, macros, body fat percentage and strength goals. "
              articles={fitnessToolsArticles}
            />
          </div>
        </div>
      </div>

      <EmailSignUp />
      <Footer />
    </MainWrapper>
  );
};
