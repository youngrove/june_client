import React from "react";
import {
  GridList,
  GridListTile,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import {
  WifiOutlined,
  FreeBreakfastOutlined,
  LockOutlined,
  DirectionsSubwayOutlined
} from "@material-ui/icons/";

import "../App.css";

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

const Feature = () => {
  return (
    <Container id="feature" maxWidth="false" style={styles.mainContainer}>
      <Grid
        container
        justify="center"
        alignItems="center"
        align="center"
        style={styles.gridContainer}
      >
        <Grid>
          <Typography variant="h4" paragraph>
            생활안내
          </Typography>
          <Typography paragraph>
            서울고용노동청, 서울청소년 수련관, 파고다학원, 청계천 인접 5분거리
          </Typography>
        </Grid>

        <GridList cellHeight={350} cols={2} spacing={50}>
          <GridListTile cols={1}>
            <WifiOutlined color="primary" style={{ fontSize: 130 }} />
            <Typography variant="h5" paragraph>
              초고속 무선인터넷
            </Typography>
            <Typography>Wifi 무선인터넷 설치</Typography>
            <Typography>개별 유선인터넷 설치</Typography>
          </GridListTile>
          <GridListTile cols={1}>
            <LockOutlined color="primary" style={{ fontSize: 130 }} />
            <Typography variant="h5" paragraph>
              안전시설
            </Typography>
            <Typography>
              소화기, 화재감지기, 스프링클러, 비상손전등 구비
            </Typography>
            <Typography>24시간 관리자 상주</Typography>
            <Typography>공용시설 CCTV녹화</Typography>
          </GridListTile>
          <GridListTile cols={1}>
            <FreeBreakfastOutlined color="primary" style={{ fontSize: 130 }} />
            <Typography variant="h5" paragraph>
              다양한 취사시설
            </Typography>
            <Typography>
              냉장고, 냉동고, 전자레인지, 인덕션, 토스트기
            </Typography>
            <Typography>밥, 김치, 라면, 원두커피 무료제공</Typography>
          </GridListTile>
          <GridListTile cols={1}>
            <DirectionsSubwayOutlined
              color="primary"
              style={{ fontSize: 130 }}
            />
            <Typography variant="h5" paragraph>
              편리한 교통
            </Typography>
            <Typography>2,3호선 을지로3가역 5분거리</Typography>
            <Typography>1호선 종로1가역 10분거리</Typography>
          </GridListTile>
        </GridList>
      </Grid>
    </Container>
  );
};

export default Feature;
