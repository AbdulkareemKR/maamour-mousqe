import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/registration">{/* <RegistrationPage /> */}</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
