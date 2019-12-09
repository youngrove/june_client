import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" style={{ background: "black" }}>
      <Toolbar variant="dense">
        <Typography>© Copyright 2019.반영훈 All rights reserved</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
