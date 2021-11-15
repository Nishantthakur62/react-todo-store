import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  expenses: [],
  themeType:"",
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  //   actions
  const addExpense = (newExpense) => {
    dispatch({
      type: "ADD_EXPENSE", //mandatory
      payload: newExpense,
    });
  };
  const DeleteExpense = (newExpense) => {
    dispatch({
      type: "DELETE_EXPENSE", //mandatory
      payload: newExpense,
    });
  };
  const ChangeTheme = (str) => {
    dispatch({
      type: "CHANGE_THEME", //mandatory
      payload: str,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        themeType:state.themeType,
        addExpense: addExpense,
        DeleteExpense: DeleteExpense,
        ChangeTheme:ChangeTheme,
      }}
    >
      {children}

    </GlobalContext.Provider>
  );
};
