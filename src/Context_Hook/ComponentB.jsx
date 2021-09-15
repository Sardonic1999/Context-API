import React, { useState } from "react";
import ComponentC from "./ComponentC";

function ComponentB({ name }) {
  return (
    <div>
      <h3>Component B</h3>
      {/* <p>Name is : {name}</p> */}
      <ComponentC name={name} />
    </div>
  );
}

export default ComponentB;
