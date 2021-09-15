import React, { useContext } from "react";
import { CounterContext } from "../ContextCounter/CounterContext";

function CompB() {
  const { increaseCount } = useContext(CounterContext);
  return (
    <div style={{ background: "red" }}>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
}

export default CompB;
