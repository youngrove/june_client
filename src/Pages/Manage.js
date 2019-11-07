import React, { Component } from "react";
import RoomAdd from "../Components/RoomAdd";
import RoomList from "../Components/RoomList";
import axios from "axios";

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isChanged: false
    };
    this.stateRefresh = this.stateRefresh.bind(this);
  }
  stateRefresh() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("http://localhost:3002/room/")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <RoomAdd stateRefresh={this.stateRefresh} />
        <RoomList data={this.state.data} stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default Manage;
