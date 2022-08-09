import React from "react";

export const Deal = ({ imgUrl, label, desc }) => {
  return (
    <>
      <img
        width="98"
        height="98"
        class="deal-image lazyloaded"
        alt={label}
        src={imgUrl}
      />
      <div class="deal-info-wrap">
        <div>
          <span class="deal-label">{label}</span>
        </div>
        <div class="deal-desc">{desc}</div>
      </div>
    </>
  );
};
