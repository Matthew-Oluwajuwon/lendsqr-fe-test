import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { appReducer, setAppKey, setAllAppKeys } from "./slice/app";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.PROD === false,
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export { setAppKey, setAllAppKeys };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
