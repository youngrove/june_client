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
    height: "110vh",
    width: "100vw",
    padding: 30,
    backgroundColor: "#F4F4F8"
  }
};

const Feature = () => {
  return (
    <Container id="feature" maxWidth="xl" style={{ padding: 0 }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        align="center"
        style={styles.gridContainer}
      >
        <Grid>
          <Typography variant="h4" paragraph>
            생활안내
          </Typography>
          <Typography variant="h5" color="primary" paragraph>
            “청계천, 파고다학원, 세무사학원, 시그니쳐타워 10분이내 위치”
          </Typography>
        </Grid>
        <Grid>
          <GridList cellHeight={300} cols={2} spacing={10}>
            <GridListTile cols={1}>
              <Grid align="center">
                <WifiOutlined
                  color="primary"
                  style={{ fontSize: 130, color: "#2CADA1" }}
                />
                <Typography variant="h5" paragraph>
                  초고속 무선인터넷
                </Typography>
              </Grid>
              <Grid align="center">
                <Typography>• Wifi 무선인터넷 설치</Typography>
                <Typography>• 개별 유선인터넷 설치</Typography>
              </Grid>
            </GridListTile>
            <GridListTile cols={1}>
              <Grid align="center">
                <LockOutlined style={{ fontSize: 130, color: "#2CADA1" }} />
                <Typography variant="h5" paragraph>
                  안전시설
                </Typography>
              </Grid>
              <Grid align="center">
                <Typography>
                  • 소화기, 화재감지기, 스프링클러, 비상손전등 구비
                </Typography>
                <Typography>• 24시간 관리자 상주</Typography>
                <Typography>• 공용시설 CCTV녹화</Typography>
              </Grid>
            </GridListTile>
            <GridListTile cols={1}>
              <Grid align="center">
                <FreeBreakfastOutlined
                  color="primary"
                  style={{ fontSize: 130, color: "#2CADA1" }}
                />
                <Typography variant="h5" paragraph>
                  다양한 취사시설
                </Typography>
              </Grid>
              <Grid align="center">
                <Typography>
                  • 냉장고, 냉동고, 전자레인지, 인덕션, 토스트기
                </Typography>
                <Typography>• 밥, 김치, 라면, 원두커피 무료제공</Typography>
              </Grid>
            </GridListTile>
            <GridListTile cols={1}>
              <Grid align="center">
                <DirectionsSubwayOutlined
                  color="primary"
                  style={{ fontSize: 130, color: "#2CADA1" }}
                />
                <Typography variant="h5" paragraph>
                  편리한 교통
                </Typography>
              </Grid>
              <Grid align="center">
                <Typography>• 2,3호선 을지로3가역 5분거리</Typography>
                <Typography>• 1호선 종로1가역 10분거리</Typography>
              </Grid>
            </GridListTile>
          </GridList>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feature;
