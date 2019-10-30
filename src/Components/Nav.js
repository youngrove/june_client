import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
// import Dehaze from "@material-ui/icons/Dehaze";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            시설소개
          </Link>
          {/* <TypoGraphy variant="title">시설소개</TypoGraphy> */}
        </ListItemText>

        <ListItemText inset>
          {/* <TypoGraphy variant="title">공실현황</TypoGraphy> */}
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
          {/* <TypoGraphy variant="title">공실현황</TypoGraphy> */}
          <Link
            activeClass="active"
            to="facility"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            공용시설
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
          {/* <TypoGraphy variant="title">생활안내</TypoGraphy> */}
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Nav;
