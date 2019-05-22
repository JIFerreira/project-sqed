import React from "react";
import "../UI/style/contentMain.css";
import "../UI/style/modalStyle.css";

class optionVideoCamera extends React.Component {
  render() {
    return this.props.thumbnail ? (
      <div style={{ width: "100%", float: "left" }}>
        <img
          src={this.props.sqed.videoAttThumb}
          alt=""
          title=""
          style={{
            maxWidth: "100%",
            float: "left",
            borderRadius: "10px",
            maxHeight: "190px"
          }}
        />
      </div>
    ) : (
      <div style={{ width: "100%", float: "left" }}>
        <video
          style={{
            width: "100%",
            float: "left",
            height: "400px"
          }}
          controls="controls"
        >
          <source src={this.props.sqed.videoAtt} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default optionVideoCamera;
