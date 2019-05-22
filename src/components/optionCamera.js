import React from "react";

class optionCamera extends React.Component {
  render() {
    return this.props.thumbnail ? (
      <div style={{ width: "100%", float: "left" }}>
        <img
          src={this.props.sqed.imgAtt}
          alt=""
          title=""
          style={{ float: "left", maxHeight: "190px", maxWidth: "100%" }}
        />
      </div>
    ) : this.props.sqed.imgAtt === null ? (
      <div
        style={{
          backgroundColor: `${this.props.sqed.color}`,
          width: "100%",
          height: "190px",
          float: "left",
          borderRadius: "10px"
        }}
      />
    ) : (
      <div
        style={{
          width: "100%",
          float: "left",
          height: "290px",
          justifyContent: "center"
        }}
      >
        <img
          src={this.props.sqed.imgAtt}
          alt=""
          title=""
          style={{
            float: "left",
            height: "400px",
            alignSelf: "center",
            maxWidth: "100%"
          }}
        />
      </div>
    );
  }
}

export default optionCamera;
