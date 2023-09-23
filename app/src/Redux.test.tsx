import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";

import Redux from "./Redux";
import customCounterReducer from "./cutomCounter/customCounterSlice";

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });
  it("プラスボタン３回クリック", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await waitFor(() => {
      expect(screen.getByTestId("count-value")).toHaveTextContent("3");
    });
  });
  it("マイナスボタン２回クリック", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("-"));
    await waitFor(() => {
      expect(screen.getByTestId("count-value")).toHaveTextContent("-2");
    });
  });
  it("インクリメントアマウントクリック", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    const enterValue = screen.getByPlaceholderText("Enter") as HTMLInputElement;
    await userEvent.type(enterValue, "30");
    await userEvent.click(screen.getByText("IncrementByAmount"));
    await waitFor(() => {
      expect(screen.getByTestId("count-value")).toHaveTextContent("30");
    });
  });
});
