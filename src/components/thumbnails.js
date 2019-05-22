import React, { Component } from "react";
import { Col, Card } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SqedsActions from "../redux/store/actions";
import OptionCamera from "./optionCamera";
import OptionVideoCamera from "./optionVideoCamera";
import OptionLink from "./optionLink";
import OptionEnvironmment from "./optionEnvironment";
import OptionAudio from "./optionAudio";
import OptionFile from "./optionFile";

class Thumbnails extends Component {
  renderThumbnailsUnit() {
    if (this.props.sqeds.sqed_details !== undefined) {
      if (this.props.sqeds.slide_change_step === 0) {
        return (
          <OptionFile
            sqed={this.props.sqeds.sqed_details}
            thumbnail={true}
            main={false}
          />
        );
      }
      if (this.props.sqeds.slide_change_step === 1) {
        return (
          <Card className="modal-media--card-video">
            <OptionVideoCamera
              sqed={this.props.sqeds.sqed_details}
              thumbnail="true"
            />
          </Card>
        );
      } else if (this.props.sqeds.slide_change_step === 2) {
        return (
          <Card className="modal-media--card-video">
            <OptionCamera
              sqed={this.props.sqeds.sqed_details}
              thumbnail="true"
            />
          </Card>
        );
      } else if (this.props.sqeds.slide_change_step === 3) {
        return (
          <OptionAudio sqed={this.props.sqeds.sqed_details} thumbnail="true" />
        );
      } else if (this.props.sqeds.slide_change_step === 4) {
        return (
          <OptionLink sqed={this.props.sqeds.sqed_details} thumbnail="true" />
        );
      } else if (this.props.sqeds.slide_change_step === 5) {
        return (
          <Card className="modal-media--card-video">
            <OptionEnvironmment
              sqed={this.props.sqeds.sqed_details}
              thumbnail="true"
            />
          </Card>
        );
      }
    } else {
      return (
        <OptionFile
          sqed={this.props.sqeds.sqed_details}
          thumbnail={true}
          main={false}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <div className="thumnail">
          <Col>{this.renderThumbnailsUnit()}</Col>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(SqedsActions, dispatch);

const mapStateToProps = state => ({
  sqeds: state.sqeds
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnails);
