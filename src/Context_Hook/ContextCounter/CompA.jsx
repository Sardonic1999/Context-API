import React, { useContext } from "react";
import { CounterContext } from "../ContextCounter/CounterContext";
import CompB from "./CompB";

function CompA() {
  const { count } = useContext(CounterContext);
  return (
    <div style={{ background: "wheat" }}>
      <p>Count: {count}</p>
      <CompB />
    </div>
  );
}

export default CompA;
