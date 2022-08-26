import React from "react";
import { MainWrapper } from "./savedCards.styles";

export const SavedCards = () => {
  return (
    <MainWrapper>
      <h1>Manage Saved Cards</h1>
      <p class="margBot10">
        Below is a list of credit cards you have on file. If you
        would like to remove these cards simply hit the trash can
        icon in each card. When you checkout at Muscle &amp;
        Strength you will be given the option to save the credit
        card you're using for future orders.
      </p>
      <div class="dashboard-wrap margBot20">
        <h3 class="bordered margBot15">Your Saved Cards</h3>
        <div class="ccard-list hasButtons">
          <div class="wrap-grid">
            <div class="info">
              <p class="no-saved-cards-message acenter">
                You do not have any stored cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
