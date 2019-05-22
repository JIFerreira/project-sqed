import React from "react";
import { Icon } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OptionCustom from "./optionCustom";
import * as SqedsActions from "../../redux/store/actions";

import "../../UI/style/modalStyle.css";

class optionAudio extends React.Component {
  constructor(props) {
    super(props);
    this.insertAudio = this.insertAudio.bind(this);
  }

  insertAudio(event) {
    this.props.setAudio(event.target.value);
  }

  clearInput() {
    this.props.clearInputFile("CLEAR_INPUT_FILE_AUDIO");
  }

  renderThumbnail() {
    if (this.props.sqeds.create_sqed.audioAtt == null) {
      return (
        <div style={{ width: "100%", float: "left" }}>
          <label htmlFor="file-upload" className="custom-file-upload">
            <Icon
              type="plus-circle"
              style={{ fontSize: "31px", marginTop: "18%" }}
            />
            <br />
            <p>Adicionar Audio</p>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={this.insertAudio}
            accept="audio/mp3"
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", float: "left" }}>
          <span onClick={() => this.clearInput()}>
            <Icon type="close" />
          </span>
          <audio
            style={{ width: "100%", float: "left", maxHeight: "290px" }}
            controls="controls"
          >
            <source
              src={this.props.sqeds.create_sqed.audioAtt}
              type="audio/mpeg"
            />
          </audio>
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
)(optionAudio);
