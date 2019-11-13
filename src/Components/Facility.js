import React from "react";
import { GridList, GridListTile } from "@material-ui/core";

const Facility = () => {
  return (
    <section className="section" id="facility">
      <h3>공용시설</h3>
      <hr />
      <div>
        <GridList cellHeight={350} cols={5} spacing={50}>
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
      </div>
    </section>
  );
};

export default Facility;
