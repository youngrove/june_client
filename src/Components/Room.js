import React, { useState, useEffect } from "react";
import "../App.css";
import VideoModal from "./Video";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";

const Room = () => {
  const [data, setData] = useState([]);
  const [isOpen, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/room/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleModal = () => {
    setModal(!isOpen);
  };

  return (
    <section className="grey-section" id="room">
      <h3>빈방정보</h3>
      <hr />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">호수</TableCell>
              <TableCell align="center">방종류</TableCell>
              <TableCell align="center">가격</TableCell>
              <TableCell align="center">동영상</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.roomName}>
                <TableCell component="th" scope="row">
                  {item.roomName}호
                </TableCell>
                <TableCell align="right">
                  {item.gotWindow ? "외창방" : "내창방"}
                </TableCell>
                <TableCell align="right">{item.price}만원/월</TableCell>
                <TableCell align="right">
                  <Button color="primary" onClick={handleModal}>
                    영상보기
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <VideoModal open={isOpen} handleModal={handleModal}></VideoModal>
    </section>
  );
};

export default Room;
