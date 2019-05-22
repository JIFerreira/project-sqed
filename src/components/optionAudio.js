import React from "react";
import "../UI/style/contentMain.css";
import "../UI/style/modalStyle.css";

class optionAudio extends React.Component {
  render() {
    return this.props.thumbnail ? (
      <audio
        style={{ width: "100%", float: "left", maxHeight: "290px" }}
        controls="controls"
      >
        <source src={this.props.sqed.audioAtt} type="audio/mpeg" />
      </audio>
    ) : this.props.sqed.imgAtt === null ? (
      <div
        style={{
          backgroundColor: `${this.props.sqed.color}`,
          width: "100%",
          height: "290px",
          float: "left"
        }}
      />
    ) : (
      <div
        style={{
          backgroundColor: `${this.props.sqed.color}`,
          width: "100%",
          height: "400px",
          float: "left"
        }}
      />
    );
  }
}

export default optionAudio;
