import React, { useState } from "react";
import axios from "axios";

const RoomAdd = () => {
  const [form, setValues] = useState({
    roomName: "",
    gotWindow: false,
    price: 0,
    width: 0,
    gotToilet: false
  });
  //   let formData = new FormData();
  //   formData.append("roomName", form.roomName);
  //   formData.append("gotWindow", form.gotWindow);
  //   formData.append("price", form.price);
  const body = {
    roomName: form.roomName,
    gotWindow: form.gotWindow,
    price: form.price
  };
  const printValues = e => {
    e.preventDefault();
    console.log(form.roomName, form.gotWindow, form.price);
  };
  const updateField = e => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };
  const updateCheck = e => {
    setValues({ ...form, [e.target.name]: !form.gotWindow });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/room/enroll", body)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>방 추가</h1>
      방호수:
      <input
        value={form.roomName}
        name="roomName"
        onChange={updateField}
      ></input>
      가격:
      <input value={form.price} name="price" onChange={updateField}></input>
      창유무:
      <input
        type="checkbox"
        value={form.gotWindow}
        checked={form.gotWindow}
        name="gotWindow"
        onChange={updateCheck}
      ></input>
      화장실유무:<input type="checkbox"></input>
      방크기:<input></input>
      <button type="submit"> 추가하기 </button>
    </form>
  );
};

export default RoomAdd;
