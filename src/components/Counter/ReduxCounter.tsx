import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counter";

const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span role="contentinfo">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
