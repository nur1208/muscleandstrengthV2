import React, { useState } from "react";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";

export const BmrCalculator = () => {
  const [units, setUnits] = useState("us");
  const [weightPounds, setWeightPounds] = useState(-1);
  const [weightKg, setWeightKg] = useState(-1);
  const [heightIn, setHeightIn] = useState(-1);
  const [heightCm, setHeightCm] = useState(-1);
  const [heightFt, setHeightFt] = useState(-1);
  const [age, setAge] = useState(-1);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(-1);

  const calBmr = () => {
    if (units === "us") {
      setResult(
        gender === "male"
          ? 66.47 +
              6.24 * weightPounds +
              12.7 * (heightFt + heightIn) -
              6.75 * age
          : gender === "female"
          ? 65.51 +
            4.35 * weightPounds +
            4.7 * (heightFt + heightIn) -
            4.7 * age
          : -1
      );
    } else if (units === "metric") {
      setResult(
        gender === "male"
          ? 66.47 +
              13.75 * weightKg +
              5.003 * heightCm -
              6.75 * age
          : gender === "female"
          ? 65.51 +
            9.563 * weightKg +
            1.85 * heightCm -
            4.7 * age
          : -1
      );
    }
  };
  return (
    <>
      <div class="bmr-tool">
        <h3 class="heading">BMR + Daily Calorie Calculator</h3>
        <GridX>
          <div id="bmr-calculator-form" class="grid-x">
            <div class="cell small-12 bp600-4">
              <label for="form-units">Measurement Units:</label>
            </div>
            <div class="cell small-12 bp600-8">
              <select
                id="form-units"
                name="system"
                required=""
                onChange={(e) => setUnits(e.target.value)}
              >
                <option value="us">US Units (Lbs/In)</option>
                <option value="metric">
                  Metric Units (Kgs/Cm)
                </option>
              </select>
            </div>
            <div class="cell small-12 bp600-4">
              <label id="input-bodyweight-label">
                Bodyweight:
              </label>
            </div>
            <div
              class="cell small-12 bp600-8 uom-us"
              style={{
                display: units === "us" ? "block" : "none",
              }}
            >
              <div class="input-group">
                <input
                  aria-labelledby="input-bodyweight-label"
                  type="number"
                  class="input-group-field"
                  value={weightPounds === -1 ? "" : weightPounds}
                  name="bodyweight_lb"
                  required=""
                  onChange={(e) =>
                    setWeightPounds(e.target.value)
                  }
                />
                <span
                  id="weight-unit-lb"
                  class="input-group-label"
                >
                  Lbs
                </span>
              </div>
            </div>
            <div
              class="cell small-12 bp600-8 uom-metric"
              style={{
                display: units === "us" ? "none" : "block",
              }}
            >
              <div class="input-group">
                <input
                  aria-labelledby="input-bodyweight-label"
                  id="input-bodyweight-kgs"
                  type="number"
                  class="input-group-field"
                  value={weightKg === -1 ? "" : weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  name="bodyweight_kg"
                />
                <span
                  id="weight-unit-kg"
                  class="input-group-label"
                >
                  Kgs
                </span>
              </div>
            </div>
            <div class="cell small-12 bp600-4">Height:</div>
            <div class="cell small-12 bp600-8">
              <div
                class="grid-x uom-us"
                style={{
                  display: units === "us" ? "flex" : "none",
                }}

                //   style="display: flex;"
              >
                <div class="cell small-6 input-group left-group">
                  <label
                    class="visually-hidden"
                    for="input-height-ft"
                  >
                    Height Feet Part
                  </label>
                  <input
                    id="input-height-ft"
                    type="number"
                    class="input-group-field"
                    name="height_ft"
                    required=""
                    value={heightFt === -1 ? "" : heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                  />
                  <span
                    id="height-unit-ft"
                    class="input-group-label"
                  >
                    Ft
                  </span>
                </div>
                <div class="cell small-6 input-group right-group">
                  <label
                    class="visually-hidden"
                    for="input-height-in"
                  >
                    Height Inches Part
                  </label>
                  <input
                    id="input-height-in"
                    type="number"
                    class="input-group-field"
                    name="height_in"
                    required=""
                    value={heightIn === -1 ? "" : heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                  />
                  <span
                    id="height-unit-in"
                    class="input-group-label"
                  >
                    In
                  </span>
                </div>
              </div>
              <div
                class="grid-x uom-metric"
                style={{
                  display: units === "us" ? "none" : "block",
                }}
              >
                <div class="input-group">
                  <label
                    class="visually-hidden"
                    for="input-height-cm"
                  >
                    Height in Centimeters
                  </label>
                  <input
                    id="input-height-cm"
                    type="number"
                    step="0.1"
                    class="input-group-field"
                    value={heightCm === -1 ? "" : heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    name="height_cm"
                  />
                  <span
                    id="height-unit-cm"
                    class="input-group-label"
                  >
                    Cm
                  </span>
                </div>
              </div>
            </div>
            <div class="cell small-12 bp600-4">
              <label for="input-age">Age:</label>
            </div>
            <div class="cell small-12 bp600-8">
              <select
                id="input-age"
                name="age"
                required=""
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="">Choose...</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
                <option value="61">61</option>
                <option value="62">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="72">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
                <option value="79">79</option>
                <option value="80">80</option>{" "}
              </select>
            </div>
            <div class="cell small-12 bp600-4">
              <label for="input-gender">Gender:</label>
            </div>
            <div class="cell small-12 bp600-8">
              <select
                id="input-gender"
                name="gender"
                required=""
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* <div class="cell small-12 bp600-4">
            <label for="input-activity-level">
              Activity Level:
            </label>
          </div> */}
            {/* <div class="cell small-12 bp600-8">
            <select
              id="input-activity-level"
              name="activity_level"
              required=""
            >
              <option value="">Choose...</option>
              <option value="1.2">
                I am sedentary (little or no exercise)
              </option>
              <option value="1.375">
                I am lightly active (light exercise/sports 1-3
                days/week)
              </option>
              <option value="1.55">
                I am moderately active (moderate exercise/sports
                3-5 days/week)
              </option>
              <option value="1.725">
                I am very active (hard exercise/sports 6-7 days a
                week)
              </option>
              <option value="1.9">
                I am extra active (very hard exercise/sports
                &amp; physical job or 2x training)
              </option>
            </select>
          </div> */}
            <div class="cell small-12 bp600-8 bp600-offset-4">
              <Button
                text="Calculate Calorie Requirements"
                isBlue
                isExpanded
                onClick={calBmr}
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
        <span class="value">{Math.trunc(result)}</span>
        <span>
          Calories Required to Maintain Your Current Bodyweight
        </span>
        <span class="share-result">
          See instructions below for using this number for muscle
          building or fat loss.
        </span>
      </div>
    </>
  );
};
