import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import { PrivateRoute } from "./Pages/Private";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/admin" component={Admin} />
    </>
  );
}

export default App;
