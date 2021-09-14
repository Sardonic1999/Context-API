import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const Mode = ({ children }) => {
  const [theme, setTheme] = useState({
    icons: "black",
    title: "black",
    background: "white",
    shadow: "5px 5px 12px 6px rgba(0, 0, 0, 0.25)",
  });
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Mode;
