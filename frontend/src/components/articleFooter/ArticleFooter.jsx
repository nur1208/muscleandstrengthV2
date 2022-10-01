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
      </div>
    </MainWrapper>
  );
};
