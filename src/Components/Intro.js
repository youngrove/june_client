import React from "react";
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography, Grid, Box } from "@material-ui/core";

const styles = {
  gridContainer: {
    height: "110vh",
    width: "100vw",
    padding: 30
  }
};

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000
  };
  return (
    <Container style={{ padding: 0 }} id="intro" maxWidth="xl">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        align="center"
        style={styles.gridContainer}
      >
        <Grid style={{ margin: 20 }}>
          <Typography variant="h4" paragraph>
            시설소개
          </Typography>
          <Typography variant="h5" color="primary" paragraph>
            “준레지던스원룸텔의 깨끗한 시설, 넉넉한 생활공간으로 품격있는
            고객님을 초대합니다.”
          </Typography>
          <Typography>
            지하철 2, 3호선 을지로3가역과 가깝게 위치하고 산책하기 좋은 청계천,
            종로 학원가, 사무실 등 학생 및 직장인에게 최적의 위치입니다.
          </Typography>
          <Typography>
            각 방마다 화장실, 에어컨, TV, 냉장고, 초고속인터넷으로 편리한 생활이
            가능합니다.
          </Typography>
          <Typography>
            강화된 소방법 적용으로 안전한 주거공간을 마련하였습니다.
          </Typography>
          <Typography>
            직접 방문하시어 시원한(따뜻한) 차 한잔 하시며 천천히 살펴보세요.
          </Typography>
        </Grid>
        <Grid item style={{ width: "60vw" }}>
          <Slider {...settings}>
            <Box>
              <img src={require("../img/1.jpg")} alt="img1" />
            </Box>
            <Box>
              <img src={require("../img/2.jpg")} alt="img2" />
            </Box>
            <Box>
              <img src={require("../img/3.jpg")} alt="img3" />
            </Box>
            <Box>
              <img src={require("../img/4.jpg")} alt="img4" />
            </Box>
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
