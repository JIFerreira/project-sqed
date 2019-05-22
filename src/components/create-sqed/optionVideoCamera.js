import React from "react";
import { Icon } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import OptionCustom from "./optionCustom";

import * as SqedsActions from "../../redux/store/actions";

import "../../UI/style/modalStyle.css";

class optionVideoCamera extends React.Component {
  constructor(props) {
    super(props);
    this.insertVideoCamera = this.insertVideoCamera.bind(this);
  }

  insertVideoCamera(event) {
    this.props.setVideoCamera(event.target.value);
  }

  clearInput() {
    this.props.clearInputFile("CLEAR_INPUT_FILE_VIDEO");
  }

  renderThumbnail() {
    if (this.props.sqeds.create_sqed.videoAtt == null) {
      return (
        <div style={{ width: "100%", float: "left" }}>
          <label htmlFor="file-upload" className="custom-file-upload">
            <Icon
              type="plus-circle"
              style={{ fontSize: "31px", marginTop: "18%" }}
            />
            <br />
            <p>Adicionar Video</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={this.insertVideoCamera}
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", float: "left" }}>
          <span onClick={() => this.clearInput()}>
            <Icon type="close" />
          </span>
          <video
            style={{
              width: "100%",
              float: "left",
              height: "130px"
            }}
          >
            <source
              src={this.props.sqeds.create_sqed.videoAtt}
              type="video/mp4"
            />
          </video>
        </div>
      );
    }
  }

  render() {
    return this.props.thumbnail ? this.renderThumbnail() : <OptionCustom />;
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
)(optionVideoCamera);
