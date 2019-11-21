import React from "react";
import axios from "axios";

const RoomDelete = props => {
  const handleDelete = id => {
    axios
      .delete(`${process.env.REACT_APP_URL}/room/${id}`)
      .then(res => props.stateRefresh())
      .catch(err => console.log(err));
  };
  return <button onClick={() => handleDelete(props.item)}>삭제하기</button>;
};

export default RoomDelete;
