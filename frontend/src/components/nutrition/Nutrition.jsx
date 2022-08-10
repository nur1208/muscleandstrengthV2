import React from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Selector } from "../selector/Selector";
import { MainWrapper } from "./nutrition..styles";

export const Nutrition = () => {
  return (
    <MainWrapper>
      <SectionTitle title="Nutrition Info" />
      <div class="section-inner-wrap">
        <div id="nutrinfo-selector">
          <Selector />
        </div>
        <div class="panel-wrap">
          <div class="show-more-mask"></div>
          <div class="nutrition-info-inner">
            <div
              class="nutrition-panel"
              id="nutrition-info-nw0243"
            >
              <div class="nutrition-panel-inner">
                <h4>100 Softgels</h4>
                <div class="serving thickline">
                  Serving Size: 2 Softgels
                  <br />
                  Servings Per Container: 50{" "}
                </div>
                <div id="nutrition-info-table">
                  <div class="item thinline">
                    <div class="col-1 ">Amount Per Serving</div>
                    <div class="col-2">Amt</div>
                    <div class="col-3">%DV</div>
                  </div>
                  <div class="row">
                    <div class="item hairline">
                      <div class="col-1">Calories</div>
                      <div class="col-2">20</div>
                      <div class="col-3"></div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">
                          Calories from Fat
                        </span>
                      </div>
                      <div class="col-2">20</div>
                      <div class="col-3"></div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">Total Fat</div>
                      <div class="col-2">2g</div>
                      <div class="col-3">3%*</div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">Saturated Fat</span>
                      </div>
                      <div class="col-2">0.5g</div>
                      <div class="col-3">3%*</div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">Trans Fat</span>
                      </div>
                      <div class="col-2">0g</div>
                      <div class="col-3">†</div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">
                          Polyunsaturated Fat
                        </span>
                      </div>
                      <div class="col-2">1g</div>
                      <div class="col-3">†</div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">
                          Monounsaturated Fat
                        </span>
                      </div>
                      <div class="col-2">0.5g</div>
                      <div class="col-3">†</div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">Cholesterol</div>
                      <div class="col-2">0mg</div>
                      <div class="col-3">0%</div>
                    </div>
                    <div class="thickline-top">
                      <div class="item hairline">
                        <div class="col-1">
                          Natural Fish Oil Concentrate
                        </div>
                        <div class="col-2">2.0g</div>
                        <div class="col-3">†</div>
                      </div>
                    </div>
                    <div class="thinline-top">
                      <div class="item hairline">
                        Omega-3 Fatty Acids:
                      </div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">
                          Eicosapentaenoic Acid (EPA)
                        </span>
                      </div>
                      <div class="col-2">360mg</div>
                      <div class="col-3">†</div>
                    </div>
                    <div class="item hairline">
                      <div class="col-1">
                        <span class="indent">
                          Docosahexaenoic Acid (DHA)
                        </span>
                      </div>
                      <div class="col-2">240mg</div>
                      <div class="col-3">†</div>
                    </div>
                    <div class="item thickline-top">
                      * % Daily Value is based on a 2,000 calorie
                      diet. Your daily values may be higher or
                      lower based on your calorie needs.
                      <br />† Daily Value (DV) not established.
                    </div>
                  </div>
                </div>
              </div>
              <div class="ingredients-heading">Ingredients</div>
              <div class="ingredients">
                Other Ingredients: Softgel Capsule (Gelatin,
                Glycerin, Water) and Vitamin E (as Natural
                d-Alpha Tochopherol).
              </div>
              <div class="ingredients-heading">
                Allergen Warning
              </div>
              <div class="ingredients">
                Contains fish (sardines, anchovies, mackerel).
                Vitamin E from soy.
              </div>

              <span class="item-directions-note hide">
                <p>
                  As a dietary supplement, take 2 softgels twice
                  daily with food.
                </p>
              </span>
              <span class="item-warning-note hide">
                <p>
                  For adults only. Consult physician if
                  pregnant/nursing, taking medication, or have a
                  medical condition. Keep out of reach of
                  children.
                </p>
              </span>
            </div>
          </div>
          <div class="directions-warning">
            <div id="directions">
              <div class="title">Directions</div>
              <div id="directions-note" class="font-s-small">
                <p>
                  As a dietary supplement, take 2 softgels twice
                  daily with food.
                </p>
              </div>
            </div>
            <div id="warnings">
              <div class="title">Warnings</div>
              <div id="warning-note" class="font-s-small">
                <p>
                  For adults only. Consult physician if
                  pregnant/nursing, taking medication, or have a
                  medical condition. Keep out of reach of
                  children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
