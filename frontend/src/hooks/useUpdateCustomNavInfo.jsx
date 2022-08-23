import { useEffect } from "react";
import { useReduxActions } from "./useReduxActions";

export const useUpdateCustomNavInfo = (path) => {
  const { updateCustomNavInfo } = useReduxActions();

  useEffect(() => {
    updateCustomNavInfo(path);

    return () => {
      updateCustomNavInfo(null);
    };
  }, [path]);
};
