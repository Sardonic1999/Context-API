import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Add from "./Add";

function API() {
  return (
    <div>
      <Navbar />
      <Add />
      <MovieList />
    </div>
  );
}

export default API;
