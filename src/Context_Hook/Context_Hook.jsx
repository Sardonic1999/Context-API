import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { useState } from "react";

function Context_Hook() {
  const [name, setName] = useState("Sardonic");

  return (
    <div>
      <h1>Context API</h1>
      <ComponentA name={name} />
      <ComponentB name={name} />
    </div>
  );
}

export default Context_Hook;
