import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { MainWrapper } from "./secureTransaction/secureTransaction.styles";

export const Modal = ({ isOpen, children, type }) => {
  const { closeModal } = useReduxActions();

  const { isOpen: isOpenRedux, type: typeRedux } = useSelector(
    (state) => state.modal_store
  );
  return (
    <MainWrapper
      // isOpen={isOpen && type === MODAL_TYPES.SECURE_TRANSACTION}
      isOpen={isOpen || (isOpenRedux && typeRedux === type)}
    >
      <div
        tabindex="-1"
        role="dialog"
        class="ui-dialog secure-notice ui-widget ui-widget-content ui-front ui-draggable ui-resizable"
        aria-describedby="secure-notice"
        // style="position: fixed; top: 30px; height: auto; width: 480px; left: 434.5px; display: block; z-index: 101;"
        aria-labelledby="ui-id-5"
      >
        <span class="close-icon" onClick={() => closeModal()}>
          ✕
        </span>
        <div
          id="secure-notice"
          class="modal-dialog ui-dialog-content ui-widget-content"
          // style="display: block; width: auto; min-height: 118px; max-height: 611px; height: auto;"
        >
          {children}
        </div>
      </div>
      <div
        class="ui-widget-overlay ui-front"
        onClick={() => closeModal()}
      ></div>
    </MainWrapper>
  );
};
