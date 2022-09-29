import React from "react";
import { MainWrapper } from "./pager.styles";

export const Pager = () => {
  return (
    <MainWrapper>
      <ul class="pager">
        {Array(6)
          .fill(1)
          .map((_, index) => (
            <li
              key={`pager-${index}`}
              class={
                index === 0 ? `pager-current` : "pager-item"
              }
            >
              <a
                title={`Go to page ${index + 1}`}
                href="/workouts/men"
              >
                {index === 4
                  ? "next ›"
                  : index === 5
                  ? "last »"
                  : index + 1}
              </a>
            </li>
          ))}
      </ul>
    </MainWrapper>
  );
};
