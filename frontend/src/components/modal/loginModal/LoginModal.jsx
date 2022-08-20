import React from "react";
import { MODAL_TYPES } from "../../../redux/constants";
import { FORM_TYPES, loginFields } from "../../data";
import { Form } from "../../form/Form";
import { Modal } from "../Modal";
import { MainWrapper } from "./loginModal.styles";

export const LoginModal = () => {
  const formProps = {
    title: "Login to Your Account",
    type: FORM_TYPES.LOGIN_MODAL,
    fields: loginFields,
  };
  return (
    <Modal
      // isOpen={true}
      type={MODAL_TYPES.LOGIN}
    >
      <MainWrapper>
        {" "}
        <Form {...formProps} />
      </MainWrapper>
    </Modal>
  );
};
