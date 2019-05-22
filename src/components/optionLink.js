import React from "react";

class optionLink extends React.Component {
  render() {
    return this.props.thumbnail && this.props.sqed.link !== undefined ? (
      <div className="modal-media--card-link">
        <p>{this.props.sqed.link}</p>
      </div>
    ) : this.props.main ? (
      <div
        style={{
          backgroundColor: `${this.props.sqed.color}`,
          width: "100%",
          height: "400px",
          float: "left"
        }}
      />
    ) : (
      <p />
    );
  }
}
export default optionLink;
