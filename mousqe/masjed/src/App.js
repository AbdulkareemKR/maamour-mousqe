import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationPage from "./Component/registraion/RegistrationPage";
import React from "react";
import Sidebar from "./Component/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Component/mainPage/MainPage.js";
import SidebarBootstrap from "./Component/SidebarBootstrap";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/registration">
              <RegistrationPage />
            </Route>
            <Route path="/main">
              <MainPage />
            </Route>
             <Route path="/sidebar">
              <SidebarBootstrap/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
