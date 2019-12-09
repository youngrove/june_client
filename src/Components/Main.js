import React from "react";
import "../App.css";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import Background from "../img/main.jpg";

const styles = {
  gridContainer: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    color: "white",
    height: "100vh",
    width: "100vw"
  },
  button: {
    backgroundColor: "#FFE117",
    marginTop: 50
  }
};

const Main = () => {
  return (
    <Container style={{ padding: 0 }} id="main" maxWidth="false">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={styles.gridContainer}
      >
        <Typography variant="h2" gutterBottom component="div">
          <Box fontWeight={400}>을지로 준레지던스</Box>
        </Typography>
        <Typography variant="h5" paragraph>
          을지로 직장인과 종로학원가 학생에게 최적의 공간
        </Typography>
        <Button
          variant="contained"
          size="large"
          style={styles.button}
          href="https://open.kakao.com/o/sM9BAiLb"
        >
          카카오톡 상담하기
        </Button>
      </Grid>
    </Container>
  );
};

export default Main;
