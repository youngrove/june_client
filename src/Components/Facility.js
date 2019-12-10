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
    height: "120vh",
    width: "100vw",
    padding: 30,
    backgroundColor: "#F4F4F8"
  }
};

const Facility = () => {
  return (
    <Container id="facility" maxWidth="xl" style={{ padding: 0 }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        align="center"
        style={styles.gridContainer}
      >
        <Grid style={{ marginBottom: 20 }}>
          <Typography variant="h4" paragraph>
            공동시설
          </Typography>
          <Typography variant="h5" color="primary" paragraph>
            “쾌적한 공간에서 따뜻한 밥과 라면, 김치, 원두커피를 마음껏
            이용하세요.”
          </Typography>
          <Typography>
            24시간 이용가능한 주방에는 따뜻한 밥과 라면, 김치, 양념류가
            준비되어있습니다.
          </Typography>
          <Typography>
            공용 냉동고, 전자레인지, 정수기, 조리도구와 식기
          </Typography>
          <Typography>
            그리고 드럼세탁기와 일반세탁기가 구비되어 있습니다.
          </Typography>
        </Grid>
        <Grid style={{ width: "80vw" }}>
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
              <img src={require("../img/fac0.jpg")} alt="img4" />
            </GridListTile>
          </GridList>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Facility;
