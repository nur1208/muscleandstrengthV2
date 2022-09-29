import React from "react";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";
import { MainWrapper } from "./taxonomyFeatured.styles";

export const TaxonomyFeatured = () => {
  return (
    <MainWrapper>
      <h2>What's New</h2>
      <div class="featured-taxonomy-content">
        <GridX>
          <div class="grid-x grid-margin-x grid-margin-y">
            {Array(3)
              .fill(1)
              .map((_, index) => (
                <div
                  class="cell small-12 bp600-4"
                  key={`cell-${index}`}
                >
                  <a href="/workouts/8-week-hypertrophy-workout">
                    <img
                      //   data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj"
                      class=" lazyloaded"
                      width="800"
                      height="500"
                      alt="Frontal shot of a muscular man wearing a black tank top doing chest workout on cable machine"
                      src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj"
                    />
                  </a>
                  <a href="/workouts/8-week-hypertrophy-workout">
                    <h5>
                      8 Week Mass Building Hypertrophy Workout
                    </h5>
                  </a>
                  <p>
                    This 4-day program will help intermediate and
                    advanced trainees gain size and strength.
                    Rest-pause set, drop sets, and negatives will
                    kick your muscle gains into high gear!
                  </p>
                  <Button text="View Workout" isBlue />
                </div>
              ))}
          </div>
        </GridX>
      </div>
    </MainWrapper>
  );
};
