import React from "react";

import Banner from "./img/home-banner.png";

import "./style/bannerHomeMain.css";

const BannerMainHome = () => (
  <section className="bannerMainHome--container">
    <div
      className="bannerMainHome--element"
      style={{
        background: `url(${Banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      }}
    />
  </section>
);

export default BannerMainHome;
