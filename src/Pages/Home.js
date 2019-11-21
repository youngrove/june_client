import React from "react";
import Main from "../Components/Main";
import Intro from "../Components/Intro";
import Room from "../Components/Room";
import Facility from "../Components/Facility";
import Feature from "../Components/Feature";
import Contact from "../Components/Contact";
import { Header, Footer } from "../Layouts/";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Intro />
      <Facility />
      <Room />
      <Feature />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
