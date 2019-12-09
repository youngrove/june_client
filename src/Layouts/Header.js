import React from "react";
import { AppBar } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import Nav from "../Components/Nav";

const Header = () => (
  <AppBar style={{ background: "#2E3B55", boxShadow: "none" }}>
    <ToolBar>
      <Nav />
    </ToolBar>
  </AppBar>
);

export default Header;
