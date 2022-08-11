import React, { useState } from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Selector } from "../selector/Selector";
import { MainWrapper } from "./nutrition..styles";

export const Nutrition = ({ nutrition }) => {
  const [selected, setSelected] = useState({
    index: 0,
    value: "",
  });
  return (
    <MainWrapper>
      <SectionTitle title="Nutrition Info" />
      <div class="section-inner-wrap">
        <div id="nutrinfo-selector">
          <Selector
            options={nutrition.map((item) => ({
              title: item.title,
            }))}
            getSelectedValue={setSelected}
          />
        </div>
        <div class="panel-wrap">
          <div class="show-more-mask"></div>
          <div class="nutrition-info-inner">
            {nutrition.map(
              (
                {
                  title,
                  servingSize,
                  servingsPerContainer,
                  ingredients,
                  allergenWarning,
                  infoTable,
                },
                index
              ) => (
                <div
                  style={{
                    display:
                      index === selected.index
                        ? "block"
                        : "none",
                  }}
                  class="nutrition-panel"
                  key={`nutrition-info-${index}`}
                  id="nutrition-info-nw0243"
                >
                  <div class="nutrition-panel-inner">
                    <h4>{title}</h4>
                    <div class="serving thickline">
                      Serving Size: {servingSize} Softgels
                      <br />
                      Servings Per Container:{" "}
                      {servingsPerContainer}{" "}
                    </div>
                    <div id="nutrition-info-table">
                      <div class="item thinline">
                        <div class="col-1 ">
                          Amount Per Serving
                        </div>
                        <div class="col-2">Amt</div>
                        <div class="col-3">%DV</div>
                      </div>
                      <div class="row">
                        {infoTable.map(
                          (
                            { mainStyle, innerIs3Cols, cols },
                            index
                          ) => (
                            <div
                              key={`row-${index}`}
                              class={mainStyle}
                            >
                              {innerIs3Cols ? (
                                <>
                                  {cols.map(
                                    (
                                      {
                                        text,
                                        hasChildren,
                                        children,
                                      },
                                      index
                                    ) => (
                                      <div
                                        key={`col-${index + 1}`}
                                        class={`col-${
                                          index + 1
                                        }`}
                                      >
                                        {hasChildren
                                          ? children.map(
                                              ({
                                                style,
                                                text,
                                              }) => (
                                                <div
                                                  class={style}
                                                >
                                                  {text}
                                                </div>
                                              )
                                            )
                                          : text}
                                      </div>
                                    )
                                  )}
                                </>
                              ) : (
                                <>
                                  {cols.map(
                                    (
                                      {
                                        text,
                                        hasChildren,
                                        children,
                                        style,
                                      },
                                      index
                                    ) => (
                                      <div
                                        key={`col-${index + 1}`}
                                        class={style}
                                      >
                                        {hasChildren
                                          ? children.map(
                                              ({
                                                style,
                                                text,
                                              }) => (
                                                <div
                                                  class={style}
                                                >
                                                  {text}
                                                </div>
                                              )
                                            )
                                          : text}
                                      </div>
                                    )
                                  )}
                                </>
                              )}
                            </div>
                          )
                        )}
                      </div>
                      {/* here */}
                    </div>
                  </div>
                  <div class="ingredients-heading">
                    Ingredients
                  </div>
                  <div class="ingredients">{ingredients}</div>
                  <div class="ingredients-heading">
                    Allergen Warning
                  </div>
                  <div class="ingredients">
                    {allergenWarning}
                  </div>

                  <span class="item-directions-note hide">
                    <p>
                      As a dietary supplement, take 2 softgels
                      twice daily with food.
                    </p>
                  </span>
                  <span class="item-warning-note hide">
                    <p>
                      For adults only. Consult physician if
                      pregnant/nursing, taking medication, or
                      have a medical condition. Keep out of reach
                      of children.
                    </p>
                  </span>
                </div>
              )
            )}
          </div>
          <div class="directions-warning">
            <div id="directions">
              <div class="title">Directions</div>
              <div id="directions-note" class="font-s-small">
                <p>
                  {nutrition.length > 0 &&
                    nutrition[0].directions}
                </p>
              </div>
            </div>
            <div id="warnings">
              <div class="title">Warnings</div>
              <div id="warning-note" class="font-s-small">
                <p>
                  {nutrition.length > 0 && nutrition[0].warning}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
