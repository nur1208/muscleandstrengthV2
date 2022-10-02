import React from "react";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";
import { MainWrapper } from "./articleFooter.styles";

export const ArticleFooter = () => {
  return (
    <MainWrapper>
      <div className="node-footer-content">
        <div class="node-email-subscribe">
          <div class="wrap">
            <p>
              Join over 500k subscribers who get a{" "}
              <strong>free weekly email</strong> with the latest
              workouts, expert advice, videos and deals from
              Muscle &amp; Strength.
            </p>
            <GridX>
              <form
                method="post"
                name="icpsignup"
                id="icpsignup6636_node"
                accept-charset="UTF-8"
                class="newsletter-signup-form grid-x grid-margin-x"
              >
                <div class="cell small-12 bp960-6">
                  <label
                    for="fields_fname_node"
                    class="visually-hidden"
                  >
                    First Name
                  </label>
                  <input
                    class="node-form-input"
                    type="text"
                    name="fields_fname"
                    id="fields_fname_node"
                    placeholder="First Name"
                    required=""
                  />
                  <label
                    for="contact_me_by_fax_only_node"
                    class="visually-hidden"
                  >
                    Contact Me By Fax Only. Yes or No?
                  </label>
                  <input
                    type="checkbox"
                    name="contact_me_by_fax_only"
                    id="contact_me_by_fax_only_node"
                    value="1"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>
                <div class="cell small-12 bp960-6">
                  <input
                    class="node-form-input"
                    type="email"
                    name="fields_email"
                    placeholder="Email"
                    title="The domain portion of the email address is invalid (the portion after the @)."
                    pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    required=""
                  />
                </div>
                <div class="cell small-12 bp960-6">
                  <label
                    for="fields_goal_node"
                    class="visually-hidden"
                  >
                    Select your fitness goal
                  </label>
                  <select
                    class="half node-form-select"
                    name="fields_goal"
                    id="fields_goal_node"
                    required=""
                  >
                    <option
                      selected="selected"
                      disabled="disabled"
                      value=""
                    >
                      Choose Your Goal
                    </option>
                    <option value="Build Muscle">
                      Build Muscle
                    </option>
                    <option value="Lose Fat">Lose Fat</option>
                    <option value="Increase Strength">
                      Increase Strength
                    </option>
                    <option value="Improve Sport">
                      Improve Sports Performance
                    </option>
                    <option value="Healthy Lifestyle">
                      Healthy Lifestyle
                    </option>
                  </select>
                </div>
                <div class="cell small-12 bp960-6">
                  <Button
                    isExpanded
                    text="Subscribe Free"
                    isBlue
                  />
                </div>
              </form>
            </GridX>
          </div>
        </div>
        <div class="relatedContent">
          <div class="related-content">
            <h4 class="text-center">Recommended For You</h4>
            <GridX>
              <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell small-6 bp600-4">
                  <div class="related-image">
                    <a href="/workouts/8-week-hypertrophy-workout">
                      <img
                        class=" ls-is-cached lazyloaded"
                        typeof="foaf:Image"
                        data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/muscular-guy-doing-cable-flys.jpg?itok=e5mNX4vR"
                        alt="8 Week Mass Building Hypertrophy Workout"
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/muscular-guy-doing-cable-flys.jpg?itok=e5mNX4vR"
                      />
                    </a>
                  </div>
                  <div class="related-title">
                    <a href="/workouts/8-week-hypertrophy-workout">
                      8 Week Mass Building Hypertrophy Workout
                    </a>
                  </div>
                </div>
                <div class="cell small-6 bp600-4">
                  <div class="related-image">
                    <a href="/workouts/build-wider-back">
                      <img
                        class=" ls-is-cached lazyloaded"
                        typeof="foaf:Image"
                        data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/2-back-feature.jpg?itok=VhIG1jME"
                        alt="RP-21 Muscle Building Workout Program (Back Focus)"
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/2-back-feature.jpg?itok=VhIG1jME"
                      />
                    </a>
                  </div>
                  <div class="related-title">
                    <a href="/workouts/build-wider-back">
                      RP-21 Muscle Building Workout Program (Back
                      Focus)
                    </a>
                  </div>
                </div>
                <div class="cell small-6 bp600-4">
                  <div class="related-image">
                    <a href="/workouts/6-week-workout-program-to-build-lean-muscle">
                      <img
                        class=" ls-is-cached lazyloaded"
                        typeof="foaf:Image"
                        data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/lean_mass_-_1200x630.jpg?itok=5HQBgJ9-"
                        alt="Lean Mass: 6 Week Workout Program to Build Lean Muscle"
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/lean_mass_-_1200x630.jpg?itok=5HQBgJ9-"
                      />
                    </a>
                  </div>
                  <div class="related-title">
                    <a href="/workouts/6-week-workout-program-to-build-lean-muscle">
                      Lean Mass: 6 Week Workout Program to Build
                      Lean Muscle
                    </a>
                  </div>
                </div>
                <div class="cell small-6 bp600-4">
                  <div class="related-image">
                    <a href="/workouts/4-day-workout-build-serious-mass">
                      <img
                        class=" ls-is-cached lazyloaded"
                        typeof="foaf:Image"
                        data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/4-day-serious-mass-thumb.jpg?itok=lIMV-AP3"
                        alt="4 Day Workout Program to Build Serious Mass"
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/4-day-serious-mass-thumb.jpg?itok=lIMV-AP3"
                      />
                    </a>
                  </div>
                  <div class="related-title">
                    <a href="/workouts/4-day-workout-build-serious-mass">
                      4 Day Workout Program to Build Serious Mass
                    </a>
                  </div>
                </div>
                <div class="cell small-6 bp600-4">
                  <div class="related-image">
                    <a href="/workouts/4-day-advanced-upper-lower-workout-program-to-build-mass">
                      <img
                        class=" ls-is-cached lazyloaded"
                        typeof="foaf:Image"
                        data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/upper-lower-workout-to-build-mass.jpg?itok=pyOMTAJH"
                        alt="4 Day Advanced Upper/Lower Workout Program to Build Mass"
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/upper-lower-workout-to-build-mass.jpg?itok=pyOMTAJH"
                      />
                    </a>
                  </div>
                  <div class="related-title">
                    <a href="/workouts/4-day-advanced-upper-lower-workout-program-to-build-mass">
                      4 Day Advanced Upper/Lower Workout Program
                      to Build Mass
                    </a>
                  </div>
                </div>
                <div class="cell small-6 bp600-4">
                  <div class="related-image">
                    <a href="/workouts/the-next-step-6-week-intermediate-workout-program">
                      <img
                        class=" ls-is-cached lazyloaded"
                        typeof="foaf:Image"
                        data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/intermediate-mass-building-workout-thumb.jpg?itok=MgRFXCOt"
                        alt="The Next Step: 6 Week Intermediate Mass Building Workout"
                        src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x400/public/field/feature-image/workout/intermediate-mass-building-workout-thumb.jpg?itok=MgRFXCOt"
                      />
                    </a>
                  </div>
                  <div class="related-title">
                    <a href="/workouts/the-next-step-6-week-intermediate-workout-program">
                      The Next Step: 6 Week Intermediate Mass
                      Building Workout
                    </a>
                  </div>
                </div>
              </div>
            </GridX>
          </div>
        </div>
        <div class="about-author">
          <GridX>
            <div class="grid-x">
              <div class="cell small-12 bp600-shrink text-center author-image">
                <img
                  class=" ls-is-cached lazyloaded"
                  width="300"
                  height="300"
                  data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/300x300/public/field/image/author/mns.jpg?itok=tn6rHaSt"
                  alt="M&amp;S Writers"
                  src="https://cdn.muscleandstrength.com/sites/default/files/styles/300x300/public/field/image/author/mns.jpg?itok=tn6rHaSt"
                />
              </div>
              <div class="cell small-12 bp600-auto author-data">
                <h5>
                  <a href="/authors/mands-writer.html">
                    M&amp;S Writers
                  </a>
                </h5>
                <div>
                  <div class="field field-name-field-summary field-type-text-long field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even">
                        M&amp;S writers is a collection of all
                        the other writers that have published
                        content on Muscle and Strength.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GridX>
        </div>
      </div>
    </MainWrapper>
  );
};
