import React from "react";
import { AppBar, Typography, useScrollTrigger, Slide } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import Nav from "../Components/Nav";
import "../App.css";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

const Header = props => (
  <HideOnScroll {...props}>
    <AppBar position="fixed" style={{ background: "grey", boxShadow: "none" }}>
      <ToolBar>
        <Typography variant="h4">준레지던스</Typography>
        <Nav />
      </ToolBar>
    </AppBar>
  </HideOnScroll>
);

export default Header;
