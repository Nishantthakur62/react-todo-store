import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Addform = () => {
  const history = useHistory();
  //Consumer
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;

  let [formData, setFormData] = useState({
    description: "",
    amount: 0,
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    //clearInputs
    clearInputs();

    //redirect to homepage
    history.push("/");
  };

  const clearInputs = () => {
    setFormData({
      description: "",
      amount: 0,
      date: "",
      note: "",
    });
  };

  return (
    <Fragment>
      <div className={`"form-heading" ${!darkMode?"form-heading-light":"form-heading-dark"}`}>
        <div className="container">
          <h1>Add Expense</h1>
        </div>
      </div>
      <div className= {`${!darkMode?"form-wrapper-light":"form-wrapper-dark"}`}>
      <div className="container form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
          />
          <textarea
            name="note"
            cols="30"
            rows="10" 
            placeholder="Add a note for your expensse (optional)"
            onChange={handleChange}
            value={formData.note}
          ></textarea>
          <input  type="submit" className= {`submit-btn ${
        darkMode ? "submit-btn-dark":"submit-btn-light"
      }`}   value="Submit Form" />
        </form>
      </div>
      </div>
    </Fragment>
  );
};

export default Addform;
