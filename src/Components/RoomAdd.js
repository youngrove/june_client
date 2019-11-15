import React, { useState } from "react";
import axios from "axios";

const RoomAdd = props => {
  const [form, setValues] = useState({
    roomName: "",
    price: 0,
    gotWindow: false,
    isAvailable: false,
    link: ""
  });

  const body = {
    roomName: form.roomName,
    price: form.price,
    gotWindow: form.gotWindow,
    isAvailable: form.isAvailable,
    link: form.link
  };

  const handleInputChange = e => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues({ ...form, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/room/enroll", body)
      .then(res => {
        console.log(res);
        props.stateRefresh();
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>방 관리 페이지</h1>
      방호수:
      <input
        value={form.roomName}
        name="roomName"
        onChange={handleInputChange}
      ></input>
      가격:
      <input
        value={form.price}
        name="price"
        onChange={handleInputChange}
      ></input>
      창유무:
      <input
        type="checkbox"
        value={form.gotWindow}
        checked={form.gotWindow}
        name="gotWindow"
        onChange={handleInputChange}
      ></input>
      공실여부:
      <input
        type="checkbox"
        value={form.isAvailable}
        checked={form.isAvailable}
        name="isAvailable"
        onChange={handleInputChange}
      ></input>
      링크:
      <input value={form.link} name="link" onChange={handleInputChange}></input>
      <button type="submit"> 추가하기 </button>
    </form>
  );
};

export default RoomAdd;
