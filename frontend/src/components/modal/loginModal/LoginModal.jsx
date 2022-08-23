import React from "react";
import { useSelector } from "react-redux";
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

  const { type } = useSelector((state) => state.modal_store);
  return (
    <Modal
      // isOpen={true}
      type={MODAL_TYPES.LOGIN}
    >
      <MainWrapper>
        {" "}
        {/* only render Form component when LoginModel is 
            open because the useEffects in it */}
        {type === MODAL_TYPES.LOGIN && <Form {...formProps} />}
      </MainWrapper>
    </Modal>
  );
};
