import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from "./Pages/AddExpense/AddExpense";
import Navbar from "./core/Navbar";
import { GlobalProvider } from "./context/ExpenseContext";
import Settings from "./Pages/Settings/Settings";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addexpense" component={AddExpense}  />
          <Route exact path="/settings" component={Settings}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
