import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import Nav from "../Components/Nav";
import "../App.css";

const Header = () => (
  <AppBar position="fixed" color="inherit">
    <ToolBar>
      <Typography variant="headline">준 레지던스</Typography>
      <Nav />
    </ToolBar>
  </AppBar>
);

export default Header;
