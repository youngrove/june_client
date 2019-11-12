import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const Room = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/room/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(data);
  return (
    <section className="grey-section" id="room">
      <h3>빈방정보</h3>
      <hr />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>호수</TableCell>
              <TableCell align="right">방종류</TableCell>
              <TableCell align="right">가격</TableCell>
              <TableCell align="right">둘러보기</TableCell>
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
                <TableCell align="right">link</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </section>
  );
};

export default Room;
