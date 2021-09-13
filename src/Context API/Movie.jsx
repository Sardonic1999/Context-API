import React, { useContext } from "react";

const Movie = (props) => {
  return (
    <div>
      {/* <h1>{data}</h1> */}
      <h1>Name:{props.data.name}</h1>
      <h3>Price:{props.data.price}</h3>
      <hr />
    </div>
  );
};

export default Movie;
