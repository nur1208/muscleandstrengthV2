import React, { useState } from "react";

export const Qty = ({ qty, setQty }) => {
  return (
    <div class="input-group">
      <label class="is-hidden" for="super_group_38915">
        Specify qty for item id 38915
      </label>
      <div
        tabindex="0"
        aria-label="Decrease quantity"
        aria-controls="super_group_38915"
        class="minus increment"
        onClick={() => qty - 1 >= 0 && setQty(qty - 1)}
      >
        –
      </div>
      <input
        name="super_group[38915]"
        id="super_group_38915"
        role="spinbutton"
        class="number"
        // type="number"
        min={0}
        max={20}
        value={qty}
        tabindex="0"
      />
      <div
        tabindex="0"
        aria-label="Increase quantity"
        aria-controls="super_group_38915"
        class="add increment"
        onClick={() => qty + 1 <= 20 && setQty(qty + 1)}
      >
        +
      </div>
    </div>
  );
};
