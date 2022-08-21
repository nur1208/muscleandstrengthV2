import { useEffect } from "react";
import { getCookie } from "../utils";
import { useReduxActions } from "./useReduxActions";

export const useAutoLogin = () => {
  const { autoLogin } = useReduxActions();
  useEffect(() => {
    const userData = getCookie("userData", true);

    if (userData) {
      autoLogin(userData);
    }
  }, []);
};
