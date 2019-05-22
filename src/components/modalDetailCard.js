import React, { Component } from "react";
import _ from "lodash";
import { Row, Col, Modal, Icon } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Carousel from "nuka-carousel";
import DetailsTextModal from "../components/detailsTextModal";
import IconsOptions from "../components/IconsOptionsModal";
import OptionCamera from "../components/optionCamera";
import OptionEnvironment from "../components/optionEnvironment";
import OptionLink from "../components/optionLink";
import OptionVideoCamera from "../components/optionVideoCamera";
import OptionAudio from "./optionAudio";
import OptionFile from "./optionFile";
import Thumbnails from "./thumbnails";
import * as SqedsActions from "../redux/store/actions";
import "../UI/style/contentMain.css";
import "../UI/style/modalStyle.css";

/* eslint-disable */
class ModalDetailCard extends Component {
  constructor(props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    this.verifyArrows = this.verifyArrows.bind(this);
  }

  verifyArrows() {
    if (this.props.sqeds.showModal) {
      var all = [
        <OptionFile
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionVideoCamera
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionCamera
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionAudio
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionLink
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionEnvironment
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />
      ];
      return all.map((item, index) => {
        switch (index) {
          case 0:
            this.props.sqeds.steps_allowed.length < 7 &&
            this.props.sqeds.steps_allowed.indexOf(0) == -1
              ? this.props.stepAllowed(0)
              : false;
            break;
          case 1:
            if (item.props.sqed.videoAtt == null) {
              return;
            } else if (item.props.sqed.videoAtt == "") {
              return;
            } else if (item.props.sqed.videoAtt == undefined) {
              return;
            } else {
              this.props.sqeds.steps_allowed.length < 7 &&
              this.props.sqeds.steps_allowed.indexOf(1) == -1
                ? this.props.stepAllowed(1)
                : false;
            }
            break;
          case 2:
            if (item.props.sqed.imgAtt == null) {
              return;
            } else if (item.props.sqed.imgAtt == "") {
              return;
            } else if (item.props.sqed.imgAtt == undefined) {
              return;
            } else {
              this.props.sqeds.steps_allowed.length < 7 &&
              this.props.sqeds.steps_allowed.indexOf(2) == -1
                ? this.props.stepAllowed(2)
                : false;
            }
            break;
          case 3:
            if (item.props.sqed.audioAtt == null) {
              return;
            } else if (item.props.sqed.audioAtt == undefined) {
              return;
            } else if (item.props.sqed.audioAtt == "") {
              return;
            } else {
              this.props.sqeds.steps_allowed.length < 7 &&
              this.props.sqeds.steps_allowed.indexOf(3) == -1
                ? this.props.stepAllowed(3)
                : false;
            }
            break;
          case 4:
            if (item.props.sqed.link == null) {
              return;
            } else if (item.props.sqed.link == undefined) {
              return;
            } else if (item.props.sqed.link == "") {
              return;
            } else {
              this.props.sqeds.steps_allowed.length < 7 &&
              this.props.sqeds.steps_allowed.indexOf(4) == -1
                ? this.props.stepAllowed(4)
                : false;
            }
            break;
          case 5:
            if (item.props.sqed.address == null) {
              return;
            } else if (item.props.sqed.address == undefined) {
              return;
            } else if (item.props.sqed.address == "") {
              return;
            } else {
              this.props.sqeds.steps_allowed.length < 7 &&
              this.props.sqeds.steps_allowed.indexOf(5) == -1
                ? this.props.stepAllowed(5)
                : false;
            }
            break;
        }
      }, this);
    }
  }

  renderOptions() {
    if (Object.keys(this.props.sqeds.sqed_details).length !== 0) {
      this.verifyArrows();
      var all = [
        <OptionFile
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionVideoCamera
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionCamera
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionAudio
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionLink
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />,
        <OptionEnvironment
          sqed={this.props.sqeds.sqed_details}
          main="true"
          thumbnail={false}
        />
      ];
      return all.map(item => item);
    }
  }

  previousSlideFunc(ind) {
    
    if (
      this.props.sqeds.steps_allowed.indexOf(
        this.props.sqeds.slide_change_step
      ) > -1
    ) {
      var indexOfNextSlide = this.props.sqeds.steps_allowed.indexOf(
        this.props.sqeds.slide_change_step
      );
      this.props.previousSlideFuncAction(
        this.props.sqeds.steps_allowed[--indexOfNextSlide]
      );
    }
  }

  nextSlideFunc(ind) {
    
    if (
      this.props.sqeds.steps_allowed.indexOf(
        this.props.sqeds.slide_change_step
      ) > -1
    ) {
      var indexOfNextSlide = this.props.sqeds.steps_allowed.indexOf(
        this.props.sqeds.slide_change_step
      );
      this.props.nextSlideFuncAction(
        this.props.sqeds.steps_allowed[++indexOfNextSlide]
      );
    }
  }
  render() {
    return (
      <Modal
        visible={this.props.sqeds.showModal}
        footer=""
        width="70%"
        height="90%"
        swiping={false}
        enableKeyboardControls={false}
        onCancel={() => this.props.reset()}
      >
        <Row type="flex" justify="space-between">
          <DetailsTextModal texts={this.props.sqeds.sqed_details} />
          <Col xs={23} sm={23} md={28} lg={11}>
            <Row className="modal--media-icon-bell">
              <Icon type="bell" style={{ fontSize: "30px", color: "#fff" }} />
            </Row>
            <Carousel
              dragging={false}
              swiping={false}
              slideIndex={this.props.sqeds.slide_change_step}
              afterSlide={slideIndex => slideIndex}
              renderCenterLeftControls={() =>
                this.props.sqeds.slide_change_step == 0 ? null : (
                  <span
                    onClick={_.debounce(() => this.previousSlideFunc(), 400)}
                    className="arrow left"
                  />
                )
              }
              renderCenterRightControls={() =>
                this.props.sqeds.slide_change_step == 5 ||
                this.props.sqeds.steps_allowed[
                  this.props.sqeds.slide_change_step
                ] === undefined ||
                this.props.sqeds.steps_allowed.length == 1 ||
                this.props.sqeds.steps_allowed.length == 0 ? null : (
                  <span
                    onClick={_.debounce(() => this.nextSlideFunc(), 400)}
                    className="arrow right"
                  />
                )
              }
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
)(ModalDetailCard);
