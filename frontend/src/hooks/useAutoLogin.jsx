import { useEffect } from "react";
import { getCookie } from "../utils";
import { useReduxActions } from "./useReduxActions";

export const useAutoLogin = () => {
  const { autoLogin, getMe } = useReduxActions();
  useEffect(() => {
    const userData = getCookie("userData", true);

    if (userData) {
      autoLogin(userData);
      getMe();

      // setTimeout(() => {
      //   getMe();
      // }, 3000);
    }
  }, []);
};
