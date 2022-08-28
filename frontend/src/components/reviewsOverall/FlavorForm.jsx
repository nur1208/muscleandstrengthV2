import React, { useState } from "react";
import { FormRating } from "../formRating/FormRating";
import { Selector } from "../selector/Selector";

export const FlavorForm = ({ ratedFlavors }) => {
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const removeRating = (index) => {
    setSelectedFlavors((currentValue) =>
      currentValue.filter((_, cIndex) => cIndex !== index)
    );
  };
  return (
    <div class="flavor-form-wrap">
      {selectedFlavors.map(({ value }, index) => (
        <div class="flavor-form" key={`${index}-index`}>
          <div class="form-rating">
            <div className="top-form-rating">
              <div class="rating-label">{value}</div>
              <span
                class="remove-rating"
                onClick={() => removeRating(index)}
              >
                x
              </span>
            </div>
            <FormRating customStyle="margin: 0;" />
          </div>
        </div>
      ))}

      <Selector
        options={[
          { title: "Choose Flavor..." },
          ...ratedFlavors.map(({ title }) => ({
            title: title.split("(")[0],
          })),
        ]}
        getSelectedValue={setSelectedFlavors}
        customValueUpdate={(
          currentValue,
          NewValue,
          newObject
        ) => {
          if (NewValue.index !== 0 && newObject?.isSelected)
            return [...currentValue, NewValue];

          return [...currentValue];
        }}
        disabledOptions={selectedFlavors.map(
          ({ index }) => index
        )}
      />
    </div>
  );
};
