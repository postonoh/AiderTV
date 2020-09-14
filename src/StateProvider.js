import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialsState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialsState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);