import React, { Fragment, useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../context/ThemeContext";
import { AiFillSetting } from 'react-icons/ai';
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/ExpenseContext";

const Navbar = () => {
  let {themeType}=useContext(GlobalContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  let history=useHistory()
  function goToSettingsPage(){
   history.push("/settings");
  }
  const goToHomePage=()=>{
  history.push("/");
  }
  return (
    <Fragment>
      <div className={`navbar ${darkMode ? "nav-dark": 
      !darkMode&&themeType==="blue"?"navBlue":
      !darkMode&&themeType==="green"?"navGreen":
      !darkMode&&themeType==="red"?"navRed":
      "navBlue"
      }`}>
        <div className="navbar-wrapper" >
          <h1 onClick={goToHomePage}>Budget App</h1>
          <span className="theme-btn" onClick={onClick}>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={70}/>
          </span>
          <span className="AiFillSetting" onClick={goToSettingsPage}> <AiFillSetting/> </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
