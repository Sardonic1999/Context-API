import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
function Api_counter() {
  const { count, increaseCount, decreaseCount } = useContext(CounterContext);
  return (
    <div>
      <h3>Counter Copmonent</h3>
      <p>Count is : {count} </p>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

export default Api_counter;
