import reducer, {
  increment,
  incrementByAmount,
} from "./cutomCounter/customCounterSlice";

describe("reducer of redux tool kit", () => {
  const firstState = {
    mode: 0,
    value: 1,
    username: "aaaa",
  };
  it("should increment by 1 with mode 0", () => {
    const action = { type: increment.type };
    const state = reducer(firstState, action);
    expect(state.value).toEqual(2);
  });

  const secondState = {
    mode: 1,
    value: 1,
    username: "aaaa",
  };
  it("should increment by 100 with mode 1", () => {
    const action = { type: increment.type };
    const state = reducer(secondState, action);
    expect(state.value).toEqual(101);
  });

  const thirdState = {
    mode: 2,
    value: 1,
    username: "aaaa",
  };
  it("should increment by 10000 with mode 2", () => {
    const action = { type: increment.type };
    const state = reducer(thirdState, action);
    expect(state.value).toEqual(10001);
  });

  describe("incrementByAmout action", () => {
    const firstState = {
      mode: 0,
      value: 1,
      username: "bbbb",
    };
    it("shoul oncrement by payload value with mode 0", () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(firstState, action);
      expect(state.value).toEqual(4);
    });

    const secondState = {
      mode: 1,
      value: 1,
      username: "bbbb",
    };
    it("shoul oncrement by 100 * payload value with mode 1", () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(secondState, action);
      expect(state.value).toEqual(301);
    });

    const thirdState = {
      mode: 2,
      value: 1,
      username: "bbbb",
    };
    it("shoul oncrement by 100 * payload value with mode 1", () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(thirdState, action);
      expect(state.value).toEqual(30001);
    });
  });
});
