import React, { useState, createContext } from "react";

export const Kino = createContext();

export const KinoProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "Harry Potter1", price: "100$" },
    { id: 2, name: "Bo'rilar", price: "200$" },
    { id: 3, name: "Harry Potter3", price: "300$" },
    { id: 4, name: "Mr Been", price: "400$" },
  ]);
  return <Kino.Provider value={[data, setData]}>{children}</Kino.Provider>;
};
