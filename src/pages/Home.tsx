// import React from 'preact';

import FirstBanner from "./firstBanner";
import "./banner.css";
import "./menu.css";
import Menu from "./Menu";
import SecondBanner from "./secondBanner";
import ThirdBanner from "./thirdBanner";
import FourBanner from "./fourBanner";
import FifthBanner from "./fifthBanner";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Menu />
      <FirstBanner />
      <div style={{ paddingInline: "100px" }}>
        <SecondBanner />
        <ThirdBanner />
      </div>
      <FourBanner />
      <div style={{ paddingInline: "100px" }}>
        <FifthBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
