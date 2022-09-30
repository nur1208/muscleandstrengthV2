import React from "react";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./articleHeader.styles";

export const ArticleHeader = () => {
  return (
    <MainWrapper>
      <h1>10 Week Mass Building Program</h1>
      <div className="node-meta-wrapper">
        <GridX>
          <div className="grid-x grid-margin-x node-meta">
            <div className="cell small-12 bp600-4 bp960-4 large-4 author-info">
              <div className="grid-x">
                <div className="cell shrink">
                  <img
                    width="100"
                    height="100"
                    className="author-image ls-is-cached lazyloaded"
                    src="https://cdn.muscleandstrength.com/sites/default/files/styles/100x100/public/field/image/author/mns.jpg?itok=_9tNZRfe"
                    data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/100x100/public/field/image/author/mns.jpg?itok=_9tNZRfe"
                    alt="M&amp;S Writers"
                  />
                </div>
                <div className="cell auto author-meta">
                  Written By:{" "}
                  <a href="/authors/mands-writer.html">
                    M&amp;S Writers
                  </a>
                  <br />
                  September 27th, 2009 <br />
                  Updated: March 22nd, 2021{" "}
                </div>
              </div>
            </div>
            <div className="cell small-12 bp600-8 category-info">
              <div className="categories">
                Categories:
                <a
                  className="category-link"
                  href="/workout-routines"
                >
                  Workouts
                </a>
                <a
                  className="category-link"
                  href="/workouts/men"
                >
                  Workouts For Men
                </a>
                <a
                  className="category-link"
                  href="/workouts/muscle-building"
                >
                  Muscle Building
                </a>
              </div>
              <div className="count">19.1M Reads </div>
            </div>
          </div>
        </GridX>
      </div>

      <div className="feature-image">
        <picture>
          <source
            width="800"
            height="500"
            srcset="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/10_week_mass_building_program_-_1200x630.jpg?itok=l2JIA-mt 800w"
            media="(max-width: 800px)"
          />
          <img
            width="1200"
            height="630"
            src="https://cdn.muscleandstrength.com/sites/default/files/10_week_mass_building_program_-_1200x630.jpg"
            alt="10 Week Mass Building Program For Hardgainers"
          />
        </picture>
      </div>
    </MainWrapper>
  );
};
