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
  Button,
  Container,
  Typography,
  Grid
} from "@material-ui/core";

const styles = {
  gridContainer: {
    height: "100vh",
    width: "100vw",
    padding: 30
  },
  mainContainer: {
    padding: 0
  }
};

const Room = () => {
  const [data, setData] = useState([]);
  const [isOpen, setModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/room/`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleModal = () => {
    setModal(!isOpen);
  };

  return (
    <Container id="room" maxWidth="false">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        align="center"
        style={styles.gridContainer}
      >
        <Typography variant="h4">빈방정보</Typography>
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
      </Grid>
    </Container>
  );
};

export default Room;
