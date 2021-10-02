import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarBootstrap from "./Component/sidebar/SidebarBootstrap";
import "./Component/sidebar/sidebarStyle.css";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage/HomePage.js";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <SidebarBootstrap />
        </nav>
        <Switch>
          <Route path="/registration">{/* <RegistrationPage /> */}</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
