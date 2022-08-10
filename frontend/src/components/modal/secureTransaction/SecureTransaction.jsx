import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../../hooks";
import { MODAL_TYPES } from "../../../redux/constants/modal";
import { MainWrapper } from "./secureTransaction.styles";

export const SecureTransaction = () => {
  const { isOpen, type } = useSelector(
    (state) => state.modal_store
  );
  const { closeModal } = useReduxActions();

  return (
    <MainWrapper
      isOpen={isOpen && type === MODAL_TYPES.SECURE_TRANSACTION}
    >
      <div
        tabindex="-1"
        role="dialog"
        class="ui-dialog secure-notice ui-widget ui-widget-content ui-front ui-draggable ui-resizable"
        aria-describedby="secure-notice"
        // style="position: fixed; top: 30px; height: auto; width: 480px; left: 434.5px; display: block; z-index: 101;"
        aria-labelledby="ui-id-5"
      >
        <div
          id="secure-notice"
          class="modal-dialog ui-dialog-content ui-widget-content"
          // style="display: block; width: auto; min-height: 118px; max-height: 611px; height: auto;"
        >
          <span class="close-icon" onClick={() => closeModal()}>
            ✕
          </span>
          <p>
            <img
              class=" ls-is-cached lazyloaded"
              src="https://www.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/secure-transaction.jpg"
              alt="Secure Transaction Badge"
            />
          </p>
          <h4>Your Transaction is Secure</h4>
          <p className="content">
            We work hard to protect your security and privacy.
            Our payment security system encrypts your information
            during transmission. We use the latest encryption
            technology and our systems are scanned regularly to
            ensure PCI compliance.{" "}
            <a
              href="https://support.muscleandstrength.com/hc/en-us/articles/4415097792151-How-we-keep-Muscle-Strength-safe-and-secure"
              target="_blank"
            >
              Learn more
            </a>{" "}
          </p>
        </div>
      </div>
      <div
        class="ui-widget-overlay ui-front"
        onClick={() => closeModal()}
      ></div>
    </MainWrapper>
  );
};
