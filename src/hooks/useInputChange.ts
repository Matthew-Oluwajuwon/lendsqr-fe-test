/**
 *
 * This custom hook is created to handle the collection of data entered by the user in any input field
 *
 */
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setAllAppKeys } from "../store";

const useInputChange = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.app;
  });

  //   This function is used to collect user entered data in input fields
  const onFieldChange = useCallback(
    (key: string, value: unknown) => {
      dispatch(
        setAllAppKeys({
          ...state,
          request: {
            ...state.request,
            [key]: value,
          },
        })
      );
    },
    [dispatch, state]
  );

  return onFieldChange;
};

export default useInputChange;
