import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  toolbar: {
    backgroundColor: "black"
  }
};

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={styles.toolbar}>
        <Typography>© Copyright 2019.반영훈 All rights reserved</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
