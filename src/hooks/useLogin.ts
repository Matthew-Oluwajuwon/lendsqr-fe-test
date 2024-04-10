import { useCallback } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { routePath } from "../utils/helper";
import useNotification from "./useNotification";

const useLogin = () => {
  const state = useAppSelector((state) => {
    return state.app;
  });

  const navigate = useNavigate();
  const { onNotify } = useNotification();

  const onLogin = useCallback(() => {
    if (
      state.request?.email !== "user@test.com" ||
      state.request?.password !== "Test123@"
    ) {
      onNotify(
        "error",
        "Email or Password is incorrect",
        "Invalid credentials"
      );
      return;
    } else {
      onNotify("success", "Login is successful", "Authenticated");
      setTimeout(() => {
        return navigate(routePath.User, {
          replace: true,
        });
      }, 1000);
    }
  }, [navigate, onNotify, state.request?.email, state.request?.password]);

  return { onLogin };
};

export default useLogin;
