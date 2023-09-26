import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";

import ReduxAsync from "./ReduxAsync";
import customCounterReducer from "./cutomCounter/customCounterSlice";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen()); //サーバ起動
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Redux Async API Mocking", () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });
  it("フェッチ成功時にh3タグにusernameを表示", async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole("heading")).toBeNull();
    userEvent.click(screen.getByText("FetchJSON"));
    expect(await screen.findByText("Bred dummy")).toBeInTheDocument();
  });
  it("フェッチ失敗時にh3タグにanonymousを表示", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          console.log(req);
          return res(ctx.status(404));
        }
      )
    );
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole("heading")).toBeNull();
    userEvent.click(screen.getByText("FetchJSON"));
    expect(await screen.findByText("anonymous")).toBeInTheDocument();
  });
});
