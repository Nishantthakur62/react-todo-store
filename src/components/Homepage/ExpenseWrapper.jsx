import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ExpenseItemList from "./ExpenseItemList";

const ExpenseWrapper = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div className={`ExpenseWrapper ${darkMode ? "wrap-dark" : "wrap-light"} `}>
      <ExpenseItemList />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9649316000645471"
     crossorigin="anonymous"></script>
    </div>
    </>
  );
};

export default ExpenseWrapper;
