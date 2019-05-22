import React, { Component } from "react";
import { Row, Col, Modal, Icon } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Carousel from "nuka-carousel";
import DetailsTextModal from "./create-sqed/detailsTextModal";
import IconsOptions from "./create-sqed/IconsOptionsModal";
import OptionCamera from "./create-sqed/optionCamera";
import OptionEnvironment from "./create-sqed/optionEnvironment";
import OptionLink from "./create-sqed/optionLink";
import OptionVideoCamera from "./create-sqed/optionVideoCamera";
import OptionAudio from "./create-sqed/optionAudio";
import OptionCustom from "./create-sqed/optionCustom";
import Thumbnails from "./create-sqed/thumbnails";

import * as SqedsActions from "../redux/store/actions";

import "../UI/style/contentMain.css";
import "../UI/style/modalStyle.css";
/* eslint-disable */
class ModalCreateSqed extends Component {
  renderOptions() {
    var all = [
      <OptionCustom />,
      <OptionVideoCamera />,
      <OptionCamera />,
      <OptionAudio />,
      <OptionLink />,
      <OptionEnvironment />
    ];
    return all.map((item, index) => <div key={index.toString()}>{item}</div>);
  }

  previousSlideFunc() {
    this.props.previousSlideFuncAction();
  }

  nextSlideFunc() {
    this.props.nextSlideFuncAction();
  }
  render() {
    return (
      <Modal
        visible={this.props.sqeds.showModalCreateSqed}
        footer=""
        width="90%"
        height="90%"
        swiping={false}
        enableKeyboardControls={false}
        onCancel={() => (
          this.props.showModalCreateSqed(),
          this.props.reset(),
          this.props.clear()
        )}
      >
        <Row type="flex" justify="space-between">
          <DetailsTextModal />
          <Col xs={23} sm={23} md={28} lg={11}>
            <Row className="modal--media-icon-bell">
              <Icon type="bell" style={{ fontSize: "30px", color: "#fff" }} />
            </Row>
            <Carousel
              dragging={false}
              swiping={false}
              slideIndex={this.props.sqeds.slide_change_step}
              afterSlide={slideIndex => slideIndex}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              renderBottomCenterControls={null}
            >
              {this.renderOptions()}
            </Carousel>
          </Col>
          <Col xs={23} sm={23} md={25} lg={6}>
            <IconsOptions />
            <Thumbnails />
          </Col>
        </Row>
      </Modal>
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
)(ModalCreateSqed);
