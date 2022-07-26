import styled from "styled-components";
import { FRONT_HERO_TYPE } from "./utils";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 450px;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  /* background-image: url(/images/front-800.jpg); */
  background-image: ${({ type }) =>
    type === FRONT_HERO_TYPE.HOME
      ? "url(/images/front-800.jpg)"
      : type === FRONT_HERO_TYPE.WORKOUT
      ? "url(/images/front-workouts-800.jpg)"
      : type === FRONT_HERO_TYPE.ARTICLE
      ? "url(/images/front-articles-800.jpg)"
      : type === FRONT_HERO_TYPE.DIET
      ? "url(/images/mealplans-800.jpg)"
      : type === FRONT_HERO_TYPE.EXERCISE
      ? "url(/images/exercises-800.jpg)"
      : type === FRONT_HERO_TYPE.RECIPES
      ? "url(/images/recipes-800.jpg)"
      : type === FRONT_HERO_TYPE.TOOLS
      ? "url(/images/tools-800.jpg)"
      : ""};

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    /* background: rgba(0, 0, 0, 0.25); */
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
  }

  h1 {
    max-width: 1000px;
    font-size: 50px;
    letter-spacing: 0;
    margin-bottom: 25px;
    text-align: center;
  }

  p {
    margin: 0 auto;
    padding: 0 20px;
    /* max-width: 900px; */
    font-size: 20px;
    font-family: roboto-medium, sans-serif;
    text-align: center;
    max-width: 600px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 37.5em) {
    background-image: ${({ type }) =>
      type === FRONT_HERO_TYPE.HOME
        ? "url(/images/front.jpg)"
        : type === FRONT_HERO_TYPE.WORKOUT
        ? "url(/images/front-workouts.jpg)"
        : type === FRONT_HERO_TYPE.ARTICLE
        ? "url(/images/front-articles.jpg)"
        : type === FRONT_HERO_TYPE.DIET
        ? "url(/images/mealplans.jpg)"
        : type === FRONT_HERO_TYPE.EXERCISE
        ? "url(/images/exercises.jpg)"
        : type === FRONT_HERO_TYPE.RECIPES
        ? "url(/images/recipes.jpg)"
        : type === FRONT_HERO_TYPE.TOOLS
        ? "url(/images/tools.jpg)"
        : ""};
    /* tools.jpg */
    min-height: 600px;

    .overlay {
      padding: 0;
    }

    h1 {
      font-size: 70px;
    }

    p {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 52.5em) {
    p {
      padding: 0;
    }
  }
`;
