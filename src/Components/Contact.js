import React, { Component } from "react";
import {
  Container,
  Typography,
  Grid,
  Link,
  Box,
  Button
} from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons/";
const { kakao } = window;

const styles = {
  gridContainer: {
    height: "100vh",
    width: "100vw",
    padding: 80
  },

  button: {
    backgroundColor: "#FFE117"
  }
};

class Contact extends Component {
  componentDidMount() {
    const mapRef = document.getElementById("mapRef");
    const markerPosition = new kakao.maps.LatLng(37.5674497, 126.9876252);
    kakao.maps.load(() => {
      let map = new kakao.maps.Map(mapRef, {
        center: new kakao.maps.LatLng(37.5674497, 126.9876252),
        level: 4
      });
      let marker = new kakao.maps.Marker({ position: markerPosition });
      marker.setMap(map);
    });
  }
  render() {
    return (
      <Container style={{ padding: 0 }} maxWidth="false" id="contact">
        <Grid
          container
          justify="center"
          alignItems="center"
          align="center"
          style={styles.gridContainer}
        >
          <Grid>
            <Typography variant="h4">입실문의</Typography>
            <hr />
          </Grid>

          <Grid container>
            <Grid container item xs={6}>
              <div id="mapRef" style={{ width: "40vw", height: "50vh" }}></div>
            </Grid>
            <Grid
              container
              item
              align="center"
              spacing={5}
              xs={6}
              justify="center"
              direction="column"
            >
              <Grid item>
                <Typography variant="h5" paragraph component="div">
                  <Box fontWeight="fontWeightBold">주소</Box>
                </Typography>

                <Typography variant="subtitle1">
                  서울시 중구 수표로 70(구. 수표동 35-12) 4~5층
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" paragraph component="div">
                  <Box fontWeight="fontWeightBold">전화번호</Box>
                </Typography>
                <Typography variant="subtitle1">02-2285-5507</Typography>
                <Typography variant="subtitle1">02-2693-5507</Typography>
                <Typography variant="subtitle1">010-8961-2340</Typography>
              </Grid>
              <Grid>
                <Typography>
                  <Link
                    variant="h5"
                    href="https://www.notion.so/juneresidence/6c4c4355389d4b89a96416b6738c7312"
                    target="_blank"
                    rel="noopener"
                  >
                    자주하는질문
                    <OpenInNew></OpenInNew>
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  style={styles.button}
                  href="https://open.kakao.com/o/sM9BAiLb"
                >
                  카카오톡 상담하기
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
