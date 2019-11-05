import React from "react";
import Main from "../Components/Main";
import Intro from "../Components/Intro";
import Room from "../Components/Room";
import Facility from "../Components/Facility";
import Feature from "../Components/Feature";
import { Header, Footer } from "../Layouts/";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Intro />
      <Room />
      <Facility />
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
