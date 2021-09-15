import React, { useState } from "react";

function Api_counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

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
