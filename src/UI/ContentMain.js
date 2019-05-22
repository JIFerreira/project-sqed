import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Breadcrumb, Row, Layout, Col, Spin, Card, Modal } from "antd";

import ModalDetailCard from "../components/modalDetailCard";
import ModalCreateSqed from "../components/modalCreateSqed";
import ModalLoading from "../components/modalLoading";
import ModalFeedbackCreateSqed from "../components/modalFeedbackCreateSqed";

import * as SqedsActions from "../redux/store/actions";

import "./style/contentMain.css";
import "./style/modalStyle.css";

const { Content } = Layout;

class ContentMain extends Component {
  componentWillMount() {
    this.props.requestSqedList();
  }

  info() {
    Modal.info({
      title: "Algo deu errado",
      content: (
        <div>
          <p>
            Ops houve algo errado, por favor clique em OK, para atualizar a
            página
          </p>
        </div>
      ),
      onOk() {
        window.location.reload();
      }
    });
  }

  openModalDetails(id) {
    this.props.requestSqedDetails(id);
  }

  renderCards() {
    if (this.props.sqeds.sqeds !== null && this.props.sqeds.error !== true) {
      return this.props.sqeds.sqeds.map(elemnt =>
        elemnt.file !== null ? (
          <Col key={elemnt.id.toString()} xs={24} sm={12} md={8} lg={8} xl={6}>
            <Card
              className="content-main--card"
              onClick={() => this.openModalDetails(elemnt.id)}
            >
              <Row>
                <span
                  className="content-main--tag"
                  style={{ backgroundColor: `${elemnt.daysLeftColor}` }}
                >
                  {elemnt.daysLeft}
                </span>
              </Row>
              <img
                src={`${elemnt.file}`}
                alt=""
                className="content-main--card-image"
              />
              <Row className="content-main--card-title">
                <span>{elemnt.title}</span>
              </Row>
            </Card>
          </Col>
        ) : (
          <Col key={elemnt.id.toString()} xs={24} sm={12} md={8} lg={8} xl={6}>
            <Card
              className="content-main--card"
              style={{ backgroundColor: `${elemnt.color}` }}
              onClick={() => this.openModalDetails(elemnt.id)}
            >
              <Row>
                <span
                  className="content-main--tag"
                  style={{ backgroundColor: `${elemnt.daysLeftColor}` }}
                >
                  {elemnt.daysLeft}
                </span>
              </Row>
              <Row className="content-main--card-title">
                <span>{elemnt.title}</span>
              </Row>
            </Card>
          </Col>
        )
      );
    } else {
      this.info();
    }
  }

  render() {
    return (
      <Content className="content-main--container">
        {/* {this.props.sqeds.loadingModal === true ? <LoadingModal /> : ""} */}
        <ModalDetailCard />
        <ModalCreateSqed />
        <ModalLoading />
        <ModalFeedbackCreateSqed />
        <Row type="flex" justify="space-between">
          <Col className="modal--col-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item className="content-main--breadcrumb">
                Público
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row type="flex" justify="start" align="top">
          {this.props.sqeds.loading ? (
            <Spin size="large" />
          ) : (
            [this.renderCards()]
          )}
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  sqeds: state.sqeds
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SqedsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentMain);
