import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";

import ReduxAsync from "./ReduxAsync";
import customCounterReducer from "./cutomCounter/customCounterSlice";

afterEach(() => {
  cleanup();
});

describe("Redux Async Test", () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("fetchDummy fullfiled display100 + payload", async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    await userEvent.click(screen.getByText("FetchDummy"));
    expect(await screen.findByTestId("count-value")).toHaveTextContent("105");
  });
});
