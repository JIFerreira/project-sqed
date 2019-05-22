import React from "react";
import "../UI/style/contentMain.css";
import "../UI/style/modalStyle.css";

class optionFile extends React.Component {
  verifyForRender() {
    if (this.props.thumbnail) {
      return <div />;
    } else {
      if (this.props.sqed.file !== null) {
        if (this.props.sqed.file.includes("mp4")) {
          return (
            <div style={{ width: "100%", float: "left" }}>
              <video
                style={{
                  width: "100%",
                  float: "left",
                  height: "400px"
                }}
                controls="controls"
              >
                <source src={this.props.sqed.file} type="video/mp4" />
              </video>
            </div>
          );
        } else if (
          this.props.sqed.file.includes("jpg") ||
          this.props.sqed.file.includes("png")
        ) {
          return (
            <div
              style={{
                width: "100%",
                float: "left",
                height: "290px"
              }}
            >
              <div
                style={{
                  float: "left",
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url(${this.props.sqed.file})`,
                  backgroundPosition: "center center",
                  backgroundSize: "auto 100%",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          );
        }
      } else {
        return (
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
  }
  render() {
    return <div>{this.verifyForRender()}</div>;
  }
}

export default optionFile;
