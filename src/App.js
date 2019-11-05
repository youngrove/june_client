import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import RoomList from "./Pages/RoomList";
import Admin from "./Pages/Admin";
// import { Grid } from "@material-ui/core";
import { PrivateRoute } from "./Pages/Private";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkRooms" component={RoomList} />
      <Route exact path="/login" component={Admin} />
      <PrivateRoute exact path="/admin" component={RoomList} />
    </>
  );
}

export default App;
