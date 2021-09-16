import React, { createContext, useState, useEffect } from "react";
import Navbar from "./Navbar";

export const PhotoContext = createContext();

const Store = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <PhotoContext.Provider value={[data, setData]}>
      {children}
    </PhotoContext.Provider>
  );
};

export default Store;
