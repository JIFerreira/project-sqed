import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row } from "antd";

import * as SqedsActions from "../../redux/store/actions";
/* eslint-disable */
class IconsOptions extends Component {
  constructor(props) {
    super(props);
    this.buttonRefVideoCamera = React.createRef();
    this.buttonRefCamera = React.createRef();
    this.buttonRefLink = React.createRef();
    this.buttonRefEnvironment = React.createRef();
    this.buttonRefAudio = React.createRef();
    this.selectedIcon = this.selectedIcon.bind(this);
  }

  selectedIcon(refsButton) {
    var allRefs = [
      this.buttonRefVideoCamera,
      this.buttonRefCamera,
      this.buttonRefLink,
      this.buttonRefAudio,
      this.buttonRefEnvironment
    ];

    for (var i = 0; i < allRefs.length; i++) {
      if (allRefs[i]["current"] !== null) {
        if (allRefs[i]["current"].classList.contains("selected")) {
          allRefs[i]["current"].classList.remove("selected");
        }
      }
    }
    refsButton["current"].className += " selected";
    this.props.actionOptionSelected(refsButton["current"].classList[1]);
  }
  render() {
    return (
      <Row>
        <ul className="modal--media-icon-actions">
          <li className="modal--media-icon-actions-list">
            <button
              className={
                "modal--media-icon-actions-ancor video-camera" +
                (this.props.sqeds.slide_change_step == 1 ? " selected" : "")
              }
              ref={this.buttonRefVideoCamera}
              onClick={() => (
                this.selectedIcon(this.buttonRefVideoCamera),
                this.props.indexOptionsClicked(1)
              )}
            >
              {/* <Icon style={{ fontSize: "20px" }} type="video-camera" /> */}
              <span
                className={`${
                  this.props.sqeds.slide_change_step == 1
                    ? "icon-video-camera-selected"
                    : "icon-video-camera-unselected"
                }`}
              />
            </button>
          </li>
          <li className="modal--media-icon-actions-list">
            <button
              className={
                "modal--media-icon-actions-ancor camera" +
                (this.props.sqeds.slide_change_step == 2 ? " selected" : "")
              }
              ref={this.buttonRefCamera}
              onClick={() => (
                this.selectedIcon(this.buttonRefCamera),
                this.props.indexOptionsClicked(2)
              )}
            >
              {/* <Icon style={{ fontSize: "20px" }} type="camera" /> */}
              <span
                className={`${
                  this.props.sqeds.slide_change_step == 2
                    ? "icon-camera-selected"
                    : "icon-camera-unselected"
                }`}
              />
            </button>
          </li>
          <li className="modal--media-icon-actions-list">
            <button
              className={
                "modal--media-icon-actions-ancor audio" +
                (this.props.sqeds.slide_change_step == 3 ? " selected" : "")
              }
              ref={this.buttonRefAudio}
              onClick={() => (
                this.selectedIcon(this.buttonRefAudio),
                this.props.indexOptionsClicked(3)
              )}
            >
              {/* <Icon style={{ fontSize: "20px" }} type="sound" /> */}
              <span
                className={`${
                  this.props.sqeds.slide_change_step == 3
                    ? "icon-audio-selected"
                    : "icon-audio-unselected"
                }`}
              />
            </button>
          </li>
          <li className="modal--media-icon-actions-list">
            <button
              className={
                "modal--media-icon-actions-ancor link" +
                (this.props.sqeds.slide_change_step == 4 ? " selected" : "")
              }
              ref={this.buttonRefLink}
              onClick={() => (
                this.selectedIcon(this.buttonRefLink),
                this.props.indexOptionsClicked(4)
              )}
            >
              {/* <Icon style={{ fontSize: "20px" }} type="link" /> */}
              <span
                className={`${
                  this.props.sqeds.slide_change_step == 4
                    ? "icon-link-selected"
                    : "icon-link-unselected"
                }`}
              />
            </button>
          </li>
          <li className="modal--media-icon-actions-list">
            <button
              className={
                "modal--media-icon-actions-ancor environment" +
                (this.props.sqeds.slide_change_step == 5 ? " selected" : "")
              }
              ref={this.buttonRefEnvironment}
              onClick={() => (
                this.selectedIcon(this.buttonRefEnvironment),
                this.props.indexOptionsClicked(5)
              )}
            >
              {/* <Icon style={{ fontSize: "20px" }} type="environment" /> */}
              <span
                className={`${
                  this.props.sqeds.slide_change_step == 5
                    ? "icon-environment-selected"
                    : "icon-environment-unselected"
                }`}
              />
            </button>
          </li>
        </ul>
      </Row>
    );
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
)(IconsOptions);
