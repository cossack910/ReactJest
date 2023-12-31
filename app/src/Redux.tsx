import { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "./cutomCounter/customCounterSlice";

const Redux = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>
          IncrementByAmount
        </button>
        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNumber(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default Redux;
