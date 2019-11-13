import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import {
  WifiOutlined,
  FreeBreakfastOutlined,
  LockOutlined,
  DirectionsSubwayOutlined
} from "@material-ui/icons/";

import "../App.css";

const Feature = () => {
  return (
    <section className="grey-section" id="feature">
      <h3 className="title">생활안내</h3>
      <p>서울고용노동청, 서울청소년 수련관, 파고다학원, 청계천 인접 5분거리</p>
      <hr />
      <GridList cellHeight={350} cols={2} spacing={150}>
        <GridListTile cols={1}>
          <WifiOutlined color="primary" style={{ fontSize: 130 }} />
          <h1>초고속 무선인터넷</h1>
          <br />
          <Typography>Wifi 무선인터넷 설치</Typography>
          <Typography>개별 유선인터넷 설치</Typography>
        </GridListTile>
        <GridListTile cols={1}>
          <LockOutlined color="primary" style={{ fontSize: 130 }} />
          <h1>안전시설</h1>
          <Typography>
            소화기, 화재감지기, 스프링클러, 비상손전등 구비
          </Typography>
          <Typography>24시간 관리자 상주</Typography>
          <Typography>공용시설 CCTV녹화</Typography>
        </GridListTile>
        <GridListTile cols={1}>
          <FreeBreakfastOutlined color="primary" style={{ fontSize: 130 }} />
          <h1>다양한 취사시설</h1>
          <Typography>냉장고, 냉동고, 전자레인지, 인덕션, 토스트기</Typography>
          <Typography>밥, 김치, 라면, 원두커피 무료제공</Typography>
        </GridListTile>
        <GridListTile cols={1}>
          <DirectionsSubwayOutlined color="primary" style={{ fontSize: 130 }} />
          <h1>편리한 교통</h1>
        </GridListTile>
      </GridList>
    </section>
  );
};

export default Feature;
