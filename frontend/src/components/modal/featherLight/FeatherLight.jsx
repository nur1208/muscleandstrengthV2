import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../../hooks";
import { MODAL_TYPES } from "../../../redux/constants/modal";
import { Button } from "../../button/Button";
import { MainWrapper } from "./featherLight.styles";

export const FeatherLight = () => {
  const { isOpen, type, content } = useSelector(
    (state) => state.modal_store
  );
  const { closeModal } = useReduxActions();

  return (
    <>
      <MainWrapper
        isOpen={isOpen && type === MODAL_TYPES.FEATHER_LIGHT}
        onClick={() => closeModal()}
      >
        <div
          class="featherlight-content"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            class="featherlight-close-icon featherlight-close"
            aria-label="Close"
            onClick={() => closeModal()}
          >
            ✕
          </span>
          <div
            id="features-list-rewards"
            class="features-list-lightbox-item featherlight-inner"
          >
            <div class="features-list-lightbox-image-wrap">
              <img
                class=" ls-is-cached lazyloaded"
                alt="M&amp;S Rewards Logo"
                src={content?.imgUrl}
              />
            </div>
            <div class="features-list-lightbox-content-wrap">
              <div class="features-list-lightbox-copy">
                <div class="features-list-lightbox-title">
                  {content?.title}
                </div>
                {content?.p.map((p) => (
                  <p>{p}</p>
                ))}
              </div>
              <div class="features-list-lightbox-btn-wrap">
                {/* <a
                href="/store/rewards"
                class="btn btn-blue btn-expanded"
                tabindex="0"
                autofocus=""
              >
                Learn More
              </a> */}
                <Button text="Learn More" isBlue isExpanded />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};
