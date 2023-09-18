import { configureStore, combineReducers } from "@reduxjs/toolkit";
import customCounterReducer from "./customCounterSlice";

const rootReducer = combineReducers({
  customCounter: customCounterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
