import { FC } from "react";
import { useCounter } from "./useCounter";

const CustomHooks: FC = () => {
  const { count, increment, decrement, double, triple, reset } = useCounter(3);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>double</button>
      <button onClick={triple}>triple</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CustomHooks;
