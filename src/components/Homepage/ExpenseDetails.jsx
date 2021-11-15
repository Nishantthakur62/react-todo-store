import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";

const ExpenseDetails = () => {
  let {expenses,themeType}=useContext(GlobalContext)
  let total;
  total=expenses.reduce((acc,item)=>(
    acc+=Number(item.amount)),0);
  let history = useHistory();
  // console.log(history);

  const handleClick = () => {
    history.push("/addexpense");
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Fragment>
      <div
        className={`expensedetails ${
          darkMode ? "header-dark" : "header-light"
          
        }`}
      >
        <div className="container expense-content">
          <h1>Viewing {expenses.length} expenses totalling   ₹{total}</h1>
          {/* <a href="/addexpense">AddExpense</a> */}
          {/* <Link to="/addexpense">Add Expense</Link> */}
          <button
            className={`add-expense-btn ${
              darkMode ? "btn-dark" : !darkMode&&themeType==="blue"?"navBlue":
      !darkMode&&themeType==="green"?"navGreen":
      !darkMode&&themeType==="red"?"navRed":
      "navBlue"
            } `}
            onClick={handleClick}
          >
            Add Expense
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
