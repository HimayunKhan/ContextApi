// first Step: create Contextapi folder in src
//  second step:create ContextApi.jsxin ContextApi folder

// third step:
import React, { createContext, useState } from "react";

// fourth step:
export const AppContext = createContext();

// fifth step:
export const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  function handleChange() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }
  const value = { count, setCount, handleChange, Reset };
  return (
    <>
      <AppContext.Provider value={value}> {children} </AppContext.Provider>
    </>
  );
};
//  sixth step: move to index.js folder and put app in app context provider
