import React from "react";
import { Layout, Col, Row, Icon } from "antd";
import "./style/footerComponent.css";
import GooglePlay from "./icons/google-play-badge.png";
import AppleStore from "./icons/app-store-badge-1.png";
const { Footer, Content } = Layout;

const FooterComponent = () => (
  <Footer className="colorBackgroundPattern">
    <Content className="colorBackgroundPattern">
      <Row type="flex" justify="space-around" align="top">
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          <article>
            <ul className="disablePatternStyle">
              <li>
                <a href="/" className="disablePatternStyle">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="/" className="disablePatternStyle">
                  Equipe
                </a>
              </li>
              <li>
                <a href="/" className="disablePatternStyle">
                  Seja um SQEDer
                </a>
              </li>
              <li>
                <a href="/" className="disablePatternStyle">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="/" className="disablePatternStyle">
                  Politica de privacidade
                </a>
              </li>
              <li>
                <a href="/" className="disablePatternStyle">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </article>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          <Row>
            <article>
              <ul className="disablePatternStyle putListInline">
                <li className="putListInline">
                  <a href="/" className="disablePatternStyle">
                    <Icon type="facebook" className="size-icons" />
                  </a>
                </li>
                <li className="putListInline">
                  <a href="/" className="disablePatternStyle">
                    <Icon type="instagram" className="size-icons" />
                  </a>
                </li>
                <li className="putListInline">
                  <a href="/" className="disablePatternStyle">
                    <Icon type="twitter" className="size-icons" />
                  </a>
                </li>
                <li className="putListInline">
                  <a href="/" className="disablePatternStyle">
                    <Icon type="linkedin" className="size-icons" />
                  </a>
                </li>
              </ul>
            </article>
          </Row>
          <Row>
            <article style={{ marginTop: "20px" }}>
              <ul className="disablePatternStyle putListInline">
                <li className="putListInline">
                  <a href="/" className="disablePatternStyle">
                    <img src={GooglePlay} className="icon-app-store" alt="" />
                  </a>
                </li>
                <li className="putListInline">
                  <a href="/" className="disablePatternStyle">
                    <img src={AppleStore} className="icon-app-store" alt="" />
                  </a>
                </li>
              </ul>
            </article>
          </Row>
        </Col>
      </Row>
    </Content>
  </Footer>
);

export default FooterComponent;
