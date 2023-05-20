import React from "react";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";

export const IdealBMCal = () => {
  return (
    <div class="ideal-tool">
      <h3 class="heading">Ideal Body Measurements Calculator</h3>
      <GridX>
        <form
          id="measurements-calculator-form"
          class="grid-x"
          method="post"
          action=""
        >
          <div class="cell small-12 bp600-4">
            <label for="input-height">Height:</label>
          </div>
          <div class="cell small-12 bp600-8">
            <select id="input-height" name="height" required="">
              <option value="">Choose...</option>
              <option value="160lbs">5'5"</option>
              <option value="165lbs">5'6"</option>
              <option value="170lbs">5'7"</option>
              <option value="175lbs">5'8"</option>
              <option value="180lbs">5'9"</option>
              <option value="185lbs">5'10"</option>
              <option value="190lbs">5'11"</option>
              <option value="200lbs">6'0"</option>
              <option value="210lbs">6'1"</option>
              <option value="220lbs">6'2"</option>
              <option value="230lbs">6'3"</option>
              <option value="240lbs">6'4"</option>
              <option value="250lbs">6'5"</option>
            </select>
          </div>
          <div class="cell small-12 bp600-4">
            <label for="input-wrist-size">Wrist size:</label>
          </div>
          <div class="cell small-12 bp600-8">
            <div class="input-group">
              <input
                id="input-wrist-size"
                type="number"
                step="0.01"
                class="input-group-field"
                value=""
                name="wrist"
                required=""
              />
              <span class="input-group-label">Inches</span>
            </div>
          </div>
          <div class="cell small-12 bp600-4">
            <label for="input-ankle-size">Ankle size:</label>
          </div>
          <div class="cell small-12 bp600-8">
            <div class="input-group">
              <input
                id="input-ankle-size"
                type="number"
                step="0.01"
                value=""
                name="ankle"
                class="input-group-field"
                required=""
              />
              <span class="input-group-label">Inches</span>
            </div>
          </div>
          <div class="cell small-12 bp600-4">
            <label for="input-head-size">Head size:</label>
          </div>
          <div class="cell small-12 bp600-8">
            <div class="input-group">
              <input
                id="input-head-size"
                type="number"
                step="0.01"
                value=""
                name="head"
                class="input-group-field"
                required=""
              />
              <span class="input-group-label">Inches</span>
            </div>
          </div>
          <div class="cell small-12 bp600-4">
            <label for="input-pelvis-size">Pelvis size:</label>
          </div>
          <div class="cell small-12 bp600-8">
            <div class="input-group">
              <input
                id="input-pelvis-size"
                type="number"
                step="0.01"
                value=""
                name="pelvis"
                class="input-group-field"
                required=""
              />
              <span class="input-group-label">Inches</span>
            </div>
          </div>
          <div class="cell small-12 bp600-4">
            <label for="input-knee-size">Knee size:</label>
          </div>
          <div class="cell small-12 bp600-8">
            <div class="input-group">
              <input
                id="input-knee-size"
                type="number"
                step="0.01"
                value=""
                name="knee"
                class="input-group-field"
                required=""
              />
              <span class="input-group-label">Inches</span>
            </div>
          </div>
          <div class="cell small-12 bp600-8 bp600-offset-4">
            <Button
              isBlue
              isExpanded
              text="Calculate Ideal Measurements"
            />
          </div>
        </form>
      </GridX>
    </div>
  );
};
