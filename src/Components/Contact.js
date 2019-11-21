import React, { Component } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
const { kakao } = window;

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
      <Container maxWidth="false" id="contact">
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
              align="center"
              spacing={5}
              xs={6}
              justify="center"
              direction="column"
            >
              <Grid item>
                <Typography variant="h5" paragraph>
                  주소
                </Typography>
                <Typography variant="subtitle1">
                  서울시 중구 수표로 70(구. 수표동 35-12) 4~5층
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" paragraph>
                  전화번호
                </Typography>
                <Typography variant="subtitle1">02-2285-5507</Typography>
                <Typography variant="subtitle1">02-2693-5507</Typography>
                <Typography variant="subtitle1">010-8961-2340</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" paragraph>
                  카카오톡
                </Typography>
                <Typography variant="subtitle1">ID:jun5507</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
