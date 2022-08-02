import React, { useState } from "react";
import { ButtonWrapper } from "../../components";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ButtonWrapper onClick={() => setCount(count + 1)} title="Add" />
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};

export default Counter;
