import React, { useState } from "react";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";

export const BenchPressCal = () => {
  const [a, setA] = useState(0);
  const [r, setR] = useState(1);
  const [result, setResult] = useState(-1);
  const [units, setUnits] = useState("Lbs");
  const calBenchPress = () => a * (1 + r / 30);
  return (
    <div>
      <div class="bench-tool">
        <h3 class="heading">Bench Press Calculator</h3>
        <GridX>
          <div id="bp-calculator-form" class="grid-x">
            <div class="cell small-6">
              <label for="weight">Weight:</label>
            </div>
            <div class="cell small-6">
              <input
                type="number"
                id="weight"
                name="weight"
                class="weight"
                required=""
                value={a}
                onChange={(e) => setA(e.target.value)}
              />
              <div class="units">
                <label
                  class="visually-hidden"
                  for="input-units-lbs"
                >
                  Unit of Measure Pounds
                </label>
                <label
                  class="visually-hidden"
                  for="input-units-kgs"
                >
                  Unit of Measure Kilograms
                </label>
                <input
                  id="input-units-lbs"
                  type="radio"
                  name="unit"
                  value="Lbs"
                  checked={units === "Lbs"}
                  onClick={() => setUnits("Lbs")}
                />{" "}
                Lbs{" "}
                <input
                  id="input-units-lbs"
                  type="radio"
                  name="unit"
                  value="Kgs"
                  checked={units === "Kgs"}
                  onClick={() => setUnits("Kgs")}
                />{" "}
                Kgs
              </div>
            </div>
            <div class="cell small-6">
              <label for="input-num-reps">Number of Reps:</label>
            </div>
            <div class="cell small-6">
              <select
                id="input-num-reps"
                name="reps"
                value={r}
                onChange={(e) => setR(e.target.value)}
              >
                <option value="1">1</option>
                <option value="1.047">2</option>
                <option value="1.091">3</option>
                <option value="1.130">4</option>
                <option value="1.167">5</option>
                <option value="1.202">6</option>
                <option value="1.236">7</option>
                <option value="1.269">8</option>
                <option value="1.300">9</option>
                <option value="1.330">10</option>
                <option value="1.359">11</option>
                <option value="1.387">12</option>
                <option value="1.416">13</option>
                <option value="1.445">14</option>
                <option value="1.475">15</option>
                <option value="1.504">16</option>
                <option value="1.531">17</option>
                <option value="1.560">18</option>
                <option value="1.587">19</option>
                <option value="1.616">20</option>
              </select>
            </div>
            <div class="cell small-12 bp600-6 bp600-offset-6">
              {/* <input
                class="btn btn-submit btn-expanded form-submit"
                type="submit"
                value="Calculate 1RM"
                name="submit-calc"
              /> */}
              <Button
                isBlue
                isExpanded
                text="Calculate 1RM"
                onClick={() => setResult(calBenchPress())}
              />
            </div>
          </div>
        </GridX>
      </div>

      <div
        class="tool-result"
        id="bp-result"
        style={{ display: result !== -1 && "block" }}
      >
        <span class="value">
          {Math.trunc(result)}
          {units}
        </span>
        <span>Your Approx. 1 Rep Max Bench Press</span>
        <span class="share-result">
          Compare your results in the comments below.
        </span>
      </div>
    </div>
  );
};
