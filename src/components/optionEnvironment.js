import React from "react";
import { Icon } from "antd";

import "../UI/style/modalStyle.css";
import OptionCamera from "./optionCamera";
class optionEnvironmment extends React.Component {
  render() {
    return this.props.thumbnail && this.props.sqed.address !== undefined ? (
      <div className="modal-media--card-link">
        <Icon style={{ fontSize: "20px" }} type="environment" />
        <p
          style={{
            display: "inline-block",
            marginLeft: "5px",
            borderRadius: "10px"
          }}
        >
          {this.props.sqed.address}
        </p>
      </div>
    ) : this.props.sqed.imgAtt === null ? (
      <div
        style={{
          backgroundColor: `${this.props.sqed.color}`,
          width: "100%",
          height: "400px",
          float: "left"
        }}
      />
    ) : (
      <OptionCamera sqed={this.props.sqed} main="true" />
    );
  }
}

export default optionEnvironmment;
