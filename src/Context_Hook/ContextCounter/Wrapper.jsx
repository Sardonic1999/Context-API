import React from "react";
import Api from "./Api";
import CounterContext from "./CounterContext";
import CounterContextProvider from "./CounterContext";
import CompA from "./CompA";

function Wrapper() {
  return (
    <CounterContextProvider>
      <div>
        <h1>Context API Counter</h1>
        <Api />
        <CounterContext />
        <CompA />
      </div>
    </CounterContextProvider>
  );
}

export default Wrapper;
