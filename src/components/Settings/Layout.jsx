import React from 'react'
import { useHistory } from 'react-router-dom';

const Layout = () => {
    let history = useHistory();
const goToIncomeTracker= ()=>{
history.push("/inc");
}

    return (
        <div>
           <h1 >Choose Tracker</h1>
            <div class="SettingsWrapper">

            <div class="Calorie-tracker blue dark ">
            <div class="tracker-text">
            <h2> 
            Calorie Tracker
            </h2>
            </div>
            </div>
            <div class="Expense-tracker blue dark"> 
            <div class="tracker-text">
            <h2>
            Expense Tracker
            </h2>
            </div>
            </div>
            <div onClick={goToIncomeTracker} class="Income-tracker blue dark">
            <div class="tracker-text">
            <h2>
            Income Tracker
            </h2>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Layout
