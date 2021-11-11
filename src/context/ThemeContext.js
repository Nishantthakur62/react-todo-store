import React, { createContext, useReducer } from "react";
// imported the createContext* and useReducer* from react.

import { themeReducer } from "./ThemeReducer";
// imported the themeReducer- a const Arrow function themeReducer(state, action) from ThemeReducer.js which is basically the Switch Case statements that changes the initial state of the variable of the created context. (darkMode line 10). 

export const ThemeContext = createContext();//step1->create
//exported the created context through the variable ThemeContext. 

const initialState = {//step2->initialized the context's variable
  darkMode: false,
}; 
//step 3 provider..
export function ThemeProvider(props) {// step4-> context's Provider function useReducer that takes a switch case function and context's variable and maps it to const [state:dispatch], there defination in return block.
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}


