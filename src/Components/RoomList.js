import React, { Component } from "react";
import RoomEdit from "../Components/RoomEdit";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons/";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1)
  }
});

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      isAvailable: false,
      link: "",
      open: false,
      editData: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleChange(e) {
    this.setState({ price: e.target.value });
  }

  handleEdit(idx) {
    this.setState({
      editData: this.props.data[idx],
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({ open: !this.state.open });
  }

  handleRefresh() {
    this.props.stateRefresh();
  }

  handleSelect(e) {
    this.setState({ isAvailable: e.target.value });
  }

  handleDelete(id) {
    axios
      .delete(`http://localhost:3001/room/${id}`)
      .then(() => this.props.stateRefresh())
      .catch(err => console.log(err));
  }

  render() {
    const { data, classes } = this.props;
    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>호수</TableCell>
              <TableCell>방종류</TableCell>
              <TableCell>가격</TableCell>
              <TableCell>공실여부</TableCell>
              <TableCell>동영상링크</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={item.roomName}>
                <TableCell>{item.roomName} </TableCell>
                <TableCell>{item.gotWindow ? "외창방" : "내창방"}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.isAvailable ? "네" : "아니오"}</TableCell>
                <TableCell>{item.link}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    color="primary"
                    onClick={() => this.handleEdit(idx)}
                  >
                    수정
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    color="primary"
                    onClick={() => this.handleDelete(item.roomName)}
                  >
                    삭제
                  </Button>
                  {/* <Edit onClick={() => this.handleEdit(idx)} />
                  <Delete onClick={() => this.handleDelete(item.roomName)} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <RoomEdit
          open={this.state.open}
          item={this.state.editData}
          handleEdit={this.handleEdit}
          handleClose={this.handleClose}
          handleRefresh={this.handleRefresh}
        />
      </>
    );
  }
}

export default withStyles(styles)(RoomList);
