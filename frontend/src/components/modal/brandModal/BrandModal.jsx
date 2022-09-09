import React from "react";
import { MODAL_TYPES } from "../../../redux/constants";
import { Modal } from "../Modal";
import { MainWrapper } from "./brandModal.styles";

export const BrandModal = () => {
  return (
    <Modal
      type={MODAL_TYPES.BRAND}
      customStyle={`
        display: flex;
    justify-content: center;

    .ui-dialog{
            width: 100%;
            left: inherit;
    }


       @media print, screen and (min-width: 37.5em) {
      .ui-dialog{
        width: 70%;

      }

     
    `}
    >
      <MainWrapper
        id="about-brand"
        class="modal-dialog ui-dialog-content ui-widget-content"
        // style="display: block; width: auto; min-height: 118px; max-height: 643px; height: auto;"
      >
        <div class="brand-image">
          <img
            class=" lazyloaded"
            data-src="https://cdn.muscleandstrength.com/store/media/catalog/category/MT_logo_2020_black_400.jpg"
            alt="MuscleTech Supplements: Lowest Prices at Muscle &amp; Strength"
            title="MuscleTech Supplements: Lowest Prices at Muscle &amp; Strength"
            src="https://cdn.muscleandstrength.com/store/media/catalog/category/MT_logo_2020_black_400.jpg"
          />
        </div>
        <h3>
          PUSHING THE LIMITS OF SCIENCE AND HUMAN POTENTIAL
        </h3>
        {/* <div class="video-wrapper video-wide-screen">
          <iframe
            class=" lazyloaded"
            src="https://player.vimeo.com/video/459515606"
            width="640"
            height="480"
            allow="autoplay; fullscreen"
            // allowfullscreen=""
          ></iframe>
        </div> */}
        <p>
          MuscleTech® was born out of an obsession to redefine
          the limits of science and human potential. With our
          commitment to research, development and innovation,
          we’ve been globally recognized as one of the leading
          sports nutrition brands in the industry and continue to
          be one of America’s elite names for redefining
          performance through cutting-edge products and
          high-quality ingredients. Backed by America’s #1
          selling sports supplement company, and with
          distribution in over 140 countries, MuscleTech® has
          emerged as one of the most recognized sports nutrition
          brands worldwide.
        </p>
      </MainWrapper>
    </Modal>
  );
};
