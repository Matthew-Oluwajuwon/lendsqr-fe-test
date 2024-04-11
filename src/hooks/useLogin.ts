import { useCallback } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { routePath, storeDataToLocalStorage } from "../utils/helper";
import useNotification from "./useNotification";

const useLogin = () => {
  const state = useAppSelector((state) => {
    return state.app;
  });

  const navigate = useNavigate();
  const { onNotify } = useNotification();

  const onLogin = useCallback(() => {
    
      onNotify("success", "Login is successful", "Authenticated");
      storeDataToLocalStorage()
      localStorage.setItem("***", btoa(state.request?.password))
      setTimeout(() => {
        return navigate(routePath.User, {
          replace: true,
        });
      }, 1000);
    
  }, [navigate, onNotify, state.request?.password]);

  return { onLogin };
};

export default useLogin;
