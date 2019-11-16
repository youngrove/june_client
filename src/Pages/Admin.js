import React, { Component } from "react";
import RoomAdd from "../Components/RoomAdd";
import RoomList from "../Components/RoomList";
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isChanged: false
    };
    this.stateRefresh = this.stateRefresh.bind(this);
    this.logout = this.logout.bind(this);
    this.editData = this.editData.bind(this);
  }

  fetchData() {
    axios
      .get(`${process.env.REACT_APP_URL}/room/`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  stateRefresh() {
    this.fetchData();
  }

  logout() {
    localStorage.setItem("isLogin", false);
    this.props.history.push("/login");
  }

  editData(e, name, idx) {
    console.log(e.target.value);
    this.setState(state => ({
      data: state.data.map((row, j) => (j === idx ? console.log(row) : row))
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.logout}>로그아웃</button>
        <RoomAdd stateRefresh={this.stateRefresh} />
        <RoomList
          data={this.state.data}
          stateRefresh={this.stateRefresh}
          editData={this.editData}
        />
      </div>
    );
  }
}

export default Admin;
