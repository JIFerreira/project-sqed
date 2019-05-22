import React from "react";
import { Icon } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SqedsActions from "../../redux/store/actions";

import "../../UI/style/modalStyle.css";
/* eslint-disable */
class optionCustom extends React.Component {
  customColorFunc(color, ind) {
    this.props.selectedColor(ind);
    this.props.setNewFile(color);
  }

  renderCustom() {
    
    if (
      //   this.props.sqeds.fileMain.includes("#") &&
      this.props.sqeds.slide_change_step !== 0
    ) {
      return (
        <div
          style={{
            width: "101%",
            height: "400px",
            display: "flex",
            paddingBottom: "30px",
            backgroundColor: `${this.props.sqeds.fileMain}`
          }}
        />
      );
    } else {
      return (
        <div
          style={{
            width: "101%",
            height: "400px",
            display: "flex",
            paddingBottom: "30px",
            backgroundColor: `${this.props.sqeds.fileMain}`
          }}
        >
          <div
            className="container-option-custom-color"
            style={{ width: "100%", alignSelf: "flex-end" }}
          >
            <span style={{ color: "#ffffff", marginLeft: "10px" }}>
              Etiqueta
            </span>
            <ul
              style={{
                paddingInlineStart: "0px",
                marginTop: "10px"
              }}
            >
              <li onClick={() => this.customColorFunc("#3800b6", 0)}>
                <span className="custom-color--roxo">
                  {this.props.sqeds.color_option_selected == 0 ? (
                    <Icon type="check" />
                  ) : (
                    ""
                  )}
                </span>
              </li>
              <li onClick={() => this.customColorFunc("#000695", 1)}>
                <span className="custom-color--azul">
                  {this.props.sqeds.color_option_selected == 1 ? (
                    <Icon type="check" />
                  ) : (
                    ""
                  )}
                </span>
              </li>
              <li onClick={() => this.customColorFunc("#fa5200", 2)}>
                <span className="custom-color--laranja">
                  {this.props.sqeds.color_option_selected == 2 ? (
                    <Icon type="check" />
                  ) : (
                    ""
                  )}
                </span>
              </li>
              <li onClick={() => this.customColorFunc("#247f00", 3)}>
                <span className="custom-color--verde">
                  {this.props.sqeds.color_option_selected == 3 ? (
                    <Icon type="check" />
                  ) : (
                    ""
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    //   (this.props.sqeds.fileMain.includes("jpg") ||
    //     this.props.sqeds.fileMain.includes("jpeg")) &&
    //   this.props.sqeds.slide_change_step !== 0
    // {
    //   return <div />;
    // } else if (
    //   this.props.sqeds.fileMain.includes("mp4") &&
    //   this.props.sqeds.slide_change_step !== 0
    // ) {
    //   return <div />;
    // } else if (
    //   this.props.sqeds.fileMain == "" &&
    //   this.props.sqeds.slide_change_step == 0
    // ) {
    // }
  }

  render() {
    return this.renderCustom();
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
)(optionCustom);
