import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography variant="h5">준레지던스</Typography>
          </Link>
        </ListItemText>
        <ListItemText inset>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography>시설소개</Typography>
          </Link>
        </ListItemText>
        <ListItemText inset>
          <Link
            activeClass="active"
            to="facility"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            공동시설
          </Link>
        </ListItemText>
        <ListItemText inset>
          <Link
            activeClass="active"
            to="room"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            공실현황
          </Link>
        </ListItemText>

        <ListItemText inset>
          <Link
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            생활안내
          </Link>
        </ListItemText>
        <ListItemText inset>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            입실문의
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Nav;
