import React from "react";
// import $ from "jQuery";
import { Row, Col, TimePicker } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SqedsActions from "../../redux/store/actions";

import moment from "moment";
// import format from "format";
// import isValid from "isValid";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../UI/style/contentMain.css";
import "../../UI/style/modalStyle.css";

import ButtonSendNewSqed from "./buttonSendNewSqed";

class detailsTextModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.insertTitle = this.insertTitle.bind(this);
    this.insertDescription = this.insertDescription.bind(this);
    this.finalDateChange = this.finalDateChange.bind(this);
    this.initialDateChange = this.initialDateChange.bind(this);
    this.initialTimeChange = this.initialTimeChange.bind(this);
    this.finalTimeChange = this.finalTimeChange.bind(this);
    // this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidUpdate() {
    const el = this;
    this.listenChange();
    if (this.props.sqeds.showModalCreateSqed === false) {
      if (
        window.document.getElementsByClassName("ant-time-picker-input")[0] !==
          undefined &&
        window.document.getElementsByClassName("ant-time-picker-input")[1] !==
          undefined
      ) {
        setTimeout(() => {
          el.initialTimeChange(null);
          el.finalTimeChange(null);
          el.props.clearInitialDate();
          window.document.getElementsByClassName(
            "ant-time-picker-input"
          )[0].value = "";
          window.document.getElementsByClassName(
            "ant-time-picker-input"
          )[0].defaultValue = "";
          window.document.getElementsByClassName(
            "ant-time-picker-input"
          )[1].value = "";
          window.document.getElementsByClassName(
            "ant-time-picker-input"
          )[1].defaultValue = "";
        }, 1000);
      }
    }
  }

  componentDidMount() {
    var readElement = document.getElementsByClassName(
      "react-datepicker__input-container"
    );
    readElement[0].children[0].readOnly = true;
    readElement[1].children[0].readOnly = true;
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  initialDateChange(dateInitial) {
    this.props.setInitialDate(dateInitial);
  }
  finalDateChange(dateFinal) {
    this.props.setFinalDate(dateFinal);
  }

  initialTimeChange(timeInitial) {
    if (timeInitial == null) {
      this.props.setInitialTime(null);
    } else {
      this.props.setInitialTime(
        `${timeInitial._d.getHours()}:${timeInitial._d.getMinutes()}`
      );
    }
  }
  finalTimeChange(timeFinal) {
    if (timeFinal == null) {
      this.props.setFinalTime(null);
    } else {
      this.props.setFinalTime(
        `${timeFinal._d.getHours()}:${timeFinal._d.getMinutes()}`
      );
    }
  }

  listenChange() {
    const el = this;
    if (
      window.document.getElementsByClassName(
        "react-datepicker__close-icon"
      )[1] !== undefined
    ) {
      window.document
        .getElementsByClassName("react-datepicker__close-icon")[1]
        .addEventListener("click", () => {
          window.document.getElementsByClassName("ant-time-picker-input");
          setTimeout(() => {
            el.finalTimeChange(null);
            if (
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              ) !== undefined
            ) {
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              )[1].value = "";
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              )[1].defaultValue = "";
            }
          }, 1000);
        });
    }

    if (
      window.document.getElementsByClassName(
        "react-datepicker__close-icon"
      )[0] !== undefined
    ) {
      window.document
        .getElementsByClassName("react-datepicker__close-icon")[0]
        .addEventListener("click", () => {
          setTimeout(() => {
            el.initialTimeChange(null);
            el.finalTimeChange(null);
            el.props.clearInitialDate();
            if (
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              ) !== undefined
            ) {
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              )[0].value = "";
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              )[0].defaultValue = "";
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              )[1].value = "";
              window.document.getElementsByClassName(
                "ant-time-picker-input"
              )[1].defaultValue = "";
            }
          }, 1000);
        });
    }
  }

  clearHours() {}

  renderRowDate() {
    return (
      <div>
        <div className="container-input-date date-inicio">
          <label>data de inicio</label>
          <span
            style={{
              border: "1px solid #c3c3c3",
              borderRadius: "10px",
              float: "left",
              width: "120px",
              height: "93px"
            }}
          >
            <DatePicker
              selected={this.props.sqeds.create_sqed.initialDate}
              onChange={this.initialDateChange}
              dateFormat="dd/MM/yyyy"
              disabledKeyboardNavigation={true}
              isClearable={true}
            />
          </span>
        </div>
        <div className="container-input-date date-final">
          <label>data de término</label>
          <span
            style={{
              border: "1px solid #c3c3c3",
              borderRadius: "10px",
              float: "left",
              width: "120px",
              height: "93px"
            }}
          >
            <DatePicker
              selected={this.props.sqeds.create_sqed.finalDate}
              onChange={this.finalDateChange}
              dateFormat="dd/MM/yyyy"
              isClearable={true}
            />
          </span>
        </div>
      </div>
    );
  }

  renderRowHour() {
    return (
      <div>
        <div className="container-input-hours">
          <label>hora de inicio</label>
          <span
            style={{
              border: "1px solid #c3c3c3",
              borderRadius: "10px",
              float: "left",
              width: "120px",
              height: "93px"
            }}
          >
            <TimePicker
              placeholder=""
              allowClear={true}
              onChange={this.initialTimeChange}
              // defaultValue={moment(
              //   `${this.props.sqeds.create_sqed.initialTime}`,
              //   "HH:mm"
              // )}
              defaultOpenValue={moment(`00:00`, "HH:mm")}
              format="HH:mm"
            />
          </span>
        </div>
        <div className="container-input-hours">
          <label>hora de término</label>
          <span
            style={{
              border: "1px solid #c3c3c3",
              borderRadius: "10px",
              float: "left",
              width: "120px",
              height: "93px"
            }}
          >
            <TimePicker
              placeholder=""
              allowClear={true}
              onChange={this.finalTimeChange}
              // defaultValue={moment(
              //   `${this.props.sqeds.create_sqed.finalTime}`,
              //   "HH:mm"
              // )}
              defaultOpenValue={moment(`00:00`, "HH:mm")}
              format="HH:mm"
            />
          </span>
        </div>
      </div>
    );
  }

  insertTitle(event) {
    this.props.setNewTitle(event.target.value);
  }

  insertDescription(event) {
    this.props.setNewDescription(event.target.value);
  }

  render() {
    return (
      <Col xs={23} sm={23} md={25} lg={6}>
        <Row>
          <Col xs={23} sm={23} md={25} lg={32}>
            <Row>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "21px",
                  fontFamily: "Gotham, sans-serif",
                  color: "#7c3d8e",
                  textAlign: "left"
                }}
              >
                Criar SQED
              </h3>
            </Row>
            <Row>
              <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>
                <input
                  type="text"
                  id="titulo"
                  placeholder="Inserir Título"
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    border: "none"
                  }}
                  onChange={this.insertTitle}
                  value={this.props.sqeds.create_sqed.title}
                />
              </h3>
            </Row>
            <Row>
              <textarea
                rows="3"
                cols="30"
                id="descricao"
                placeholder="Inserir Texto..."
                style={{ fontWeight: "bold", fontSize: "15px", border: "none" }}
                onChange={this.insertDescription}
                value={this.props.sqeds.create_sqed.description}
              />
            </Row>
          </Col>
        </Row>
        <Row style={{ margin: "50px 0px 40px 0px" }}>
          <Row>{this.renderRowDate()}</Row>
          <Row>{this.renderRowHour()}</Row>
        </Row>
        <Row>
          <ButtonSendNewSqed />
        </Row>
      </Col>
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
)(detailsTextModal);
