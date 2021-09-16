import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationPage from "./Component/registraion/RegistrationPage";
import React from "react";
import Sidebar from "./Component/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarBootstrap from "./Component/SidebarBootstrap";
import "./Component/sidebarStyle.css";
import Header from "./Component/header/Header";
import RegistrationModal from "./Component/registration/RegistrationModal";

function App() {
  return (
    <Router>
      <div className="main-container">
        <SidebarBootstrap />
        <div className="content">
          <Switch>
            <Route path="/registration">
              <RegistrationPage />
            </Route>
            <Route path="/s">
              <SidebarBootstrap />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;