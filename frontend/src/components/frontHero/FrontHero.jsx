import React from "react";
import { Article } from "./Article";
import { Diet } from "./Diet";
import { MainWrapper } from "./frontHero.styles";
import { Home } from "./Home";
import { FRONT_HERO_TYPE } from "./utils";
import { Workout } from "./Workout";

export const FrontHero = ({ type }) => {
  return (
    <MainWrapper type={type}>
      <div class="overlay">
        {type === FRONT_HERO_TYPE.HOME ? (
          <Home />
        ) : type === FRONT_HERO_TYPE.WORKOUT ? (
          <Workout />
        ) : type === FRONT_HERO_TYPE.ARTICLE ? (
          <Article />
        ) : type === FRONT_HERO_TYPE.DIET ? (
          <Diet />
        ) : (
          <></>
        )}
      </div>
    </MainWrapper>
  );
};
