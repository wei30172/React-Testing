import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counter";
import { ButtonWrapper } from "../../components";
const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <ButtonWrapper
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          title="Increment"
        />
        <span role="contentinfo">{count}</span>
        <ButtonWrapper
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          title="Decrement"
        />
      </div>
    </div>
  );
};

export default ReduxCounter;
