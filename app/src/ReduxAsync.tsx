import { useSelector } from "react-redux";
import {
  selectCount,
  selectUsername,
  fetchDummy,
  fetchJSON,
} from "./cutomCounter/customCounterSlice";
import { useAppDispatch } from "./cutomCounter/store";

const ReduxAsync = () => {
  const count = useSelector(selectCount);
  const username = useSelector(selectUsername);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
      {username && <h1>{username}</h1>}
      <button onClick={() => dispatch(fetchJSON())}>FetchJSON</button>
    </div>
  );
};

export default ReduxAsync;
