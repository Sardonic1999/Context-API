import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { Kino } from "./Context";

const MovieList = () => {
  const [data, setData] = useContext(Kino);
  console.log(data);
  return (
    <div>
      {data.map((value) => {
        return <Movie key={value.id} data={value} />;
      })}
    </div>
  );
};

export default MovieList;
