import { configureStore, combineReducers } from "@reduxjs/toolkit";
import customCounterReducer from "./customCounterSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  customCounter: customCounterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
