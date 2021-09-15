import React from "react";
import Api_counter from "./Api_counter";
import Wrapper from "./ContextCounter/Wrapper";

function Context_Counter() {
  return (
    <div>
      <h1>Counter API</h1>
      <Api_counter />
      <Wrapper />
    </div>
  );
}

export default Context_Counter;
