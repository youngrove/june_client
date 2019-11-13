import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Icon,
  ListItemIcon
} from "@material-ui/core";
import { Link } from "react-scroll";
import LinkTo from "@material-ui/core/Link";

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
        </ListItemText>
        <LinkTo href="https://open.kakao.com/o/sM9BAiLb">카톡하기</LinkTo>
      </ListItem>
    </List>
  );
};

export default Nav;
