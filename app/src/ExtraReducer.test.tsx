import reducer, { fetchDummy } from "./cutomCounter/customCounterSlice";

describe("exterReducers", () => {
  const initialize = {
    mode: 0,
    value: 0,
    username: "cccc",
  };
  it("Should output 100 + payload when fulfiled", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialize, action);
    expect(state.value).toEqual(105);
  });
  it("Should output 100 - payload when fulfiled", () => {
    const action = { type: fetchDummy.rejected.type, payload: 5 };
    const state = reducer(initialize, action);
    expect(state.value).toEqual(95);
  });
});
