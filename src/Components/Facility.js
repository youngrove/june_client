import React from "react";
import {
  GridList,
  GridListTile,
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
    backgroundColor: "#f5f6f9"
  }
};

const Facility = () => {
  return (
    <Container id="facility" maxWidth="false" style={styles.mainContainer}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        align="center"
        style={styles.gridContainer}
      >
        <Typography variant="h4" paragraph>
          공동시설
        </Typography>
        <Grid container style={{ width: "80vw" }}>
          <GridList cellHeight={300} cols={5} spacing={1}>
            <GridListTile cols={3}>
              <img src={require("../img/fac1.jpg")} alt="img1" />
            </GridListTile>
            <GridListTile cols={2}>
              <img src={require("../img/fac2.jpg")} alt="img2" />
            </GridListTile>
            <GridListTile cols={2}>
              <img src={require("../img/fac3.jpg")} alt="img3" />
            </GridListTile>
            <GridListTile cols={3}>
              <img src={require("../img/fac4.jpg")} alt="img4" />
            </GridListTile>
          </GridList>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Facility;
