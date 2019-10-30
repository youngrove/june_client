import React from "react";
import "./App.css";
import { Header, Footer } from "./Layouts/";
import Home from "./Pages/Home";
import RoomList from "./Pages/RoomList";
// import { Grid } from "@material-ui/core";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/checkRooms" component={RoomList} />
      {/* <Route exact path ='/contact' component={} /> */}
      <Route path="" />
      <Footer />
    </>
  );
}

export default App;
