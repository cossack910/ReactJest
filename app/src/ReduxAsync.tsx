import React from "react";
import { useSelector } from "react-redux";
import { selectCount, fetchDummy } from "./cutomCounter/customCounterSlice";
import { useAppDispatch } from "./cutomCounter/store";

const ReduxAsync = () => {
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
    </div>
  );
};

export default ReduxAsync;
