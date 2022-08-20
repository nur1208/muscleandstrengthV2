import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../../hooks";
import { MODAL_TYPES } from "../../../redux/constants/modal";
import { Modal } from "../Modal";
import { MainWrapper } from "./secureTransaction.styles";

export const SecureTransaction = () => {
  return (
    <Modal
      // isOpen={isOpen && type === MODAL_TYPES.SECURE_TRANSACTION}
      type={MODAL_TYPES.SECURE_TRANSACTION}
    >
      <MainWrapper isOpen={true}>
        <p>
          <img
            class=" ls-is-cached lazyloaded"
            src="https://www.muscleandstrength.com/store/skin/frontend/mnsv4/default/images/secure-transaction.jpg"
            alt="Secure Transaction Badge"
          />
        </p>
        <h4>Your Transaction is Secure</h4>
        <p className="content">
          We work hard to protect your security and privacy. Our
          payment security system encrypts your information
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
        {/* </div> */}
        {/* </div> */}
        {/* <div
        class="ui-widget-overlay ui-front"
        onClick={() => closeModal()}
      ></div> */}
      </MainWrapper>
    </Modal>
  );
};
