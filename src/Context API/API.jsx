import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { KinoProvider } from "./Context";

function API() {
  return (
    <div>
      <KinoProvider>
        <Navbar />
        <MovieList />
      </KinoProvider>
    </div>
  );
}

export default API;
