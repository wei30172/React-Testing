import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

let middleware;

middleware =
  process.env.NODE_ENV === "development"
    ? new MiddlewareArray().concat(logger)
    : new MiddlewareArray();

// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: false, // Disable Redux dev tools
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  auth: AuthState;
  counter: CounterState;
};
export type AppDispatch = typeof store.dispatch;
