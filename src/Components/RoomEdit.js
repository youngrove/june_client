import React, { useState, useEffect } from "react";
import {
  TextField,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  DialogActions,
  Button
} from "@material-ui/core";
import axios from "axios";

const RoomEdit = props => {
  const { open, item, handleClose, handleRefresh } = props;

  const [values, setValues] = useState({
    isAvailable: null,
    price: null,
    link: null
  });

  const checkValue = name => {
    return values[name] === null ? item[name] : values[name];
  };

  const handleInputChange = e => {
    e.preventDefault();
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = id => {
    axios
      .patch(`http://localhost:3002/room/${id}`, {
        isAvailable: checkValue("isAvailable"),
        price: checkValue("price"),
        link: checkValue("link")
      })
      .then(res => {
        handleClose();
        console.log(res);
        handleRefresh();
      })
      .catch(err => console.log(err));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>방 정보수정 ({item.roomName}호)</DialogTitle>
      <DialogContent>
        <FormControlLabel
          label="등록여부"
          labelPlacement="start"
          control={
            <Switch
              name="isAvailable"
              label="방등록여부"
              checked={checkValue("isAvailable")}
              value="enroll"
              onChange={handleInputChange}
            />
          }
        />
        <br />
        <TextField
          name="price"
          value={checkValue("price")}
          label="가격"
          margin="dense"
          onChange={handleInputChange}
        ></TextField>
        <br />
        <TextField
          name="link"
          value={checkValue("link")}
          label="동영상url"
          margin="dense"
          onChange={handleInputChange}
        ></TextField>
        <br />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSubmit(item.roomName);
          }}
        >
          수정
        </Button>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RoomEdit;
