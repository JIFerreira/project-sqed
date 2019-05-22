import React from "react";
import { Icon } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OptionCustom from "./optionCustom";
import * as SqedsActions from "../../redux/store/actions";

import "../../UI/style/modalStyle.css";

class optionCamera extends React.Component {
  constructor(props) {
    super(props);
    this.insertCamera = this.insertCamera.bind(this);
  }

  insertCamera(event) {
    this.props.setCamera(event.target.value);
  }

  clearInput() {
    this.props.clearInputFile("CLEAR_INPUT_FILE_CAMERA");
  }

  renderThumbnail() {
    if (this.props.sqeds.create_sqed.imgAtt == null) {
      return (
        <div style={{ width: "100%", float: "left" }}>
          <label htmlFor="file-upload" className="custom-file-upload">
            <Icon
              type="plus-circle"
              style={{ fontSize: "31px", marginTop: "18%" }}
            />
            <br />
            <p>Adicionar Foto</p>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={this.insertCamera}
            accept="image/*"
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", float: "left" }}>
          <span onClick={() => this.clearInput()}>
            <Icon type="close" />
          </span>
          <img
            src={this.props.sqeds.create_sqed.imgAtt}
            alt=""
            title=""
            style={{
              float: "left",
              height: "130px",
              alignSelf: "center",
              maxWidth: "100%"
            }}
          />
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
)(optionCamera);
