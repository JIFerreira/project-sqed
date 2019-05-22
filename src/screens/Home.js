import React, { Component } from "react";
import { Layout } from "antd";

import HeaderUI from "../UI/Header";
import BannerMainHome from "../UI/BannerMainHome";
import ContentMain from "../UI/ContentMain";
import FooterComponent from "../UI/FooterComponent";

class Home extends Component {
  render() {
    return (
      <Layout>
        <HeaderUI />
        <BannerMainHome />
        <ContentMain />
        <FooterComponent />
      </Layout>
    );
  }
}

export default Home;
