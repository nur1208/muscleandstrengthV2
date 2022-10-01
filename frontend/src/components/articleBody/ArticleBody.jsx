import React from "react";
import { Button } from "../button/Button";
import { MainWrapper } from "./articleBody.styles";

export const ArticleBody = () => {
  return (
    <MainWrapper>
      <div className="content">
        <div class="node-stats-block">
          <h5>Workout Summary</h5>
          <ul>
            <li>
              <span class="row-label">Main Goal</span>
              <div class="field field-name-field-main-goal field-type-list-text field-label-hidden">
                <div class="field-items">
                  <div class="field-item even">Build Muscle</div>
                </div>
              </div>
            </li>
            <li>
              <span class="row-label">Workout Type</span>
              <div class="field field-name-field-workout-type field-type-list-text field-label-hidden">
                <div class="field-items">
                  <div class="field-item even">Split</div>
                </div>
              </div>
            </li>
            <li>
              <span class="row-label">Training Level</span>
              <div class="field field-name-field-experience-level field-type-list-text field-label-hidden">
                <div class="field-items">
                  <div class="field-item even">Advanced</div>
                </div>
              </div>
            </li>
            <li>
              <span class="row-label">Program Duration</span>10
              weeks
            </li>
            <li>
              <span class="row-label">Days Per Week</span>
              <div class="field field-name-field-days-per-week field-type-list-text field-label-hidden">
                <div class="field-items">
                  <div class="field-item even">4</div>
                </div>
              </div>
            </li>
            <li>
              <span class="row-label">Time Per Workout</span>50
              minutes
            </li>
            <li>
              <span class="row-label">Equipment Required</span>
              <div class="field-type-list-text">
                Barbell, Bodyweight, Dumbbells, Machines
              </div>
            </li>
            <li>
              <span class="row-label">Target Gender</span>
              Male{" "}
            </li>
            <li>
              <span class="row-label">Recommended Supps</span>
              <div class="field-type-list-text">
                <span class="supplement">
                  <a href="/store/category/protein.html">
                    Whey Protein
                  </a>
                </span>
                <br />{" "}
                <span class="supplement">
                  <a href="/store/category/creatine/creatine-monohydrate.html">
                    Creatine Monohydrate
                  </a>
                </span>
                <br />{" "}
                <span class="supplement">
                  <a href="/store/category/oils-efas.html">
                    Essential Fats (EFAs)
                  </a>
                </span>
                <br />{" "}
                <span class="supplement">
                  <a href="/store/category/vitamins-minerals/multivitamins.html">
                    Multivitamin
                  </a>
                </span>
                <br />{" "}
                <span class="supplement">
                  <a href="/store/category/weight-gainers.html">
                    Weight Gainer (optional)
                  </a>
                </span>{" "}
              </div>
            </li>
            <li class="last">
              <span class="row-label">Workout PDF</span>
              <Button text="Download Workout" isBlue />
            </li>
          </ul>
        </div>
        <h2>Workout Description</h2>
        <div class="field field-name-body field-type-text-with-summary field-label-hidden">
          <div class="field-items">
            <div class="field-item even">
              <p>
                This workout is designed to increase your muscle
                mass as much as possible in 10 weeks. The program
                works each muscle group hard once per week using
                mostly heavy compound exercises. You will train
                on a 4 day split routine, resting on Wednesdays
                and the weekends. To get the most out of this
                program you need to be eating BIG. Big meals, at
                least 5 times a day.
              </p>
              <p>
                <strong>
                  Recommended: Need help building muscle? Take
                  our{" "}
                  <a href="/mbcourse">
                    Free Muscle Building Course
                  </a>
                </strong>
              </p>
              <h4>Monday - Chest and Triceps</h4>
              <table>
                <tbody>
                  <tr>
                    <th class="width60">Exercise</th>
                    <th class="width20">Sets</th>
                    <th class="width20">Reps</th>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/barbell-bench-press.html">
                        Barbell Bench Press
                      </a>
                    </td>
                    <td>4</td>
                    <td>10, 8, 8, 6</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/incline-bench-press.html">
                        Incline Bench Press
                      </a>
                    </td>
                    <td>3</td>
                    <td>8, 8, 6</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/decline-bench-press.html">
                        Decline Bench Press
                      </a>
                    </td>
                    <td>3</td>
                    <td>8, 8, 6</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/dumbbell-flys.html">
                        Dumbbell Flys
                      </a>
                    </td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/dumbbell-pullover.html">
                        Dumbbell Pullover
                      </a>
                    </td>
                    <td>2</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/tricep-extension.html">
                        Tricep Extension
                      </a>
                    </td>
                    <td>4</td>
                    <td>10, 8, 8, 6 adding weight</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/tricep-dip.html">
                        Tricep Dip
                      </a>
                    </td>
                    <td>3</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/tricep-bench-dip.html">
                        Tricep Bench Dip
                      </a>
                    </td>
                    <td>3</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
              <h4>Tuesday - Back and Biceps</h4>
              <table>
                <tbody>
                  <tr>
                    <th class="width60">Exercise</th>
                    <th class="width20">Sets</th>
                    <th class="width20">Reps</th>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/deadlifts.html">
                        Deadlift
                      </a>
                    </td>
                    <td>5</td>
                    <td>10, 8, 8, 6, 4</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/chin-up.html">
                        Chin Up
                      </a>
                    </td>
                    <td>2</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/one-arm-dumbbell-row.html">
                        One Arm Dumbbell Row
                      </a>
                    </td>
                    <td>3</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/seated-row.html">
                        Seated Row
                      </a>
                    </td>
                    <td>2</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/close-grip-pull-down.html">
                        Close Grip&nbsp;Lat Pull Down
                      </a>
                    </td>
                    <td>3</td>
                    <td>10, 10, 8</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/standing-barbell-curl.html">
                        Standing Barbell Curl
                      </a>
                    </td>
                    <td>3</td>
                    <td>8, 8, 6</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/ez-bar-preacher-curl.html">
                        Close Grip Preacher Curl
                      </a>
                    </td>
                    <td>3</td>
                    <td>8, 8, 6</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/incline-dumbbell-curl.html">
                        Incline Dumbbell Curl
                      </a>
                    </td>
                    <td>2</td>
                    <td>12-14</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/concentration-cur.html">
                        Concentration Curl
                      </a>
                    </td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
              <h4>Wednesday - Rest Day/Cardio</h4>
              <h4>Thursday - Shoulders and Forearms</h4>
              <table>
                <tbody>
                  <tr>
                    <th class="width60">Exercise</th>
                    <th class="width20">Sets</th>
                    <th class="width20">Reps</th>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/smith-machine-shoulder-press.html">
                        Machine Shoulder Press
                      </a>
                    </td>
                    <td>3</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/dumbbell-reverse-fly.html">
                        Dumbbell Reverse Fly
                      </a>
                    </td>
                    <td>3</td>
                    <td>8-10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/military-press.html">
                        Military Press
                      </a>
                    </td>
                    <td>4</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/dumbbell-lateral-raise.html">
                        Dumbbell Lateral Raise
                      </a>
                    </td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/dumbbell-shrugs.html">
                        Dumbbell Shrugs
                      </a>
                    </td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/upright-row.html">
                        Upright Row
                      </a>
                    </td>
                    <td>2</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/standing-wrist-curl.html">
                        Standing Wrist Curl
                      </a>
                    </td>
                    <td>4</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/barbell-wrist-curl.html">
                        Barbell Wrist Curl
                      </a>
                    </td>
                    <td>4</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Note:&nbsp;Dumbbell shrugs and upright row can be
                supersetted.
              </p>
              <h4>Friday - Legs</h4>
              <table>
                <tbody>
                  <tr>
                    <th class="width60">Exercise</th>
                    <th class="width20">Sets</th>
                    <th class="width20">Reps</th>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/squat.html">Squat</a>
                    </td>
                    <td>5</td>
                    <td>10, 8, 8, 6, 4</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/leg-extension.html">
                        Leg Extension
                      </a>
                    </td>
                    <td>3</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/leg-curl.html">
                        Leg Curl
                      </a>
                    </td>
                    <td>3</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td class="tableSubHead" colspan="3">
                      Calves
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Exercise</strong>
                    </td>
                    <td>
                      <strong>Sets</strong>
                    </td>
                    <td>
                      <strong>Reps</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/standing-calf-raise.html">
                        Standing Calf Raise
                      </a>
                    </td>
                    <td>4</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/exercises/seated-calf-raise.html">
                        Seated calf Raise
                      </a>
                    </td>
                    <td>2</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
              <h4>Weekend - Rest</h4>
              <blockquote>
                <p>
                  Post your post-workout swolfies in{" "}
                  <a href="/store/brands/muscle-strength">
                    M&amp;S gear
                  </a>{" "}
                  on IG and tag{" "}
                  <a
                    href="https://www.instagram.com/muscleandstrength/"
                    target="_blank"
                  >
                    @muscleandstrength
                  </a>
                  , #muscleandstrength, or DM them to us to get a
                  shoutout on Muscle &amp; Strength stories!
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
