import React from "react";
import { Row, Col, Progress } from "antd";
import "../UI/style/contentMain.css";
import "../UI/style/modalStyle.css";

class detailsTextModal extends React.Component {
  transformWeek() {}
  transformMonths(months) {
    switch (months) {
      case "jan":
        return 1;
      case "fev":
        return 2;
      case "mar":
        return 3;
      case "abr":
        return 4;
      case "mai":
        return 5;
      case "jun":
        return 6;
      case "jul":
        return 7;
      case "ago":
        return 8;
      case "set":
        return 9;
      case "out":
        return 10;
      case "nov":
        return 11;
      case "dez":
        return 12;
      default:
        return;
    }
  }
  renderRowFinalDate() {
    if (
      this.props.texts.finalDate !== null &&
      Object.keys(this.props.texts).length !== 0
    ) {
      
      const finalDate = this.props.texts.finalDate.split(" ")[0];
      const finalMes = this.props.texts.finalDate.split(" ")[1];
      const finalAno = this.props.texts.finalDate.split(" ")[2];
      return (
        <span className="modal--border-date-right">
          <span className="modal--block-element modal--date-style">
            {finalDate}
          </span>
          <span className="modal--block-element">{finalMes}</span>
          <span className="modal--block-element">{finalAno}</span>
          <span className="modal--block-element">
            {this.props.texts.finalTime}
          </span>
        </span>
      );
    }
  }
  renderRowInitialDate() {
    if (
      this.props.texts.initialDate !== null &&
      Object.keys(this.props.texts).length !== 0
    ) {
      
      const initialDate = this.props.texts.initialDate.split(" ")[0];
      const initialMes = this.props.texts.initialDate.split(" ")[1];
      const initialAno = this.props.texts.initialDate.split(" ")[2];
      return (
        <span className="modal--border-date">
          <span className="modal--block-element modal--date-style">
            {initialDate}
          </span>
          <span className="modal--block-element">{initialMes}</span>
          <span className="modal--block-element">{initialAno}</span>
          <span className="modal--block-element">
            {this.props.texts.initialTime}
          </span>
        </span>
      );
    } else {
      return <span />;
    }
  }

  dateDiferencaEmDias() {
    var monthInitialDate = parseInt(
      this.transformMonths(this.props.texts.initialDate.split(" ")[1], 10)
    );
    var monthFinalDate = parseInt(
      this.transformMonths(this.props.texts.finalDate.split(" ")[1], 10)
    );

    var finalDate = parseInt(this.props.texts.finalDate.split(" ")[0], 10);
    var initialDate = parseInt(this.props.texts.initialDate.split(" ")[0], 10);

    var finalYear = parseInt(this.props.texts.finalDate.split(" ")[2], 10);
    var initialYear = parseInt(this.props.texts.initialDate.split(" ")[2], 10);

    var dInitial = new Date(initialYear, monthInitialDate, initialDate);
    var dFinal = new Date(finalYear, monthFinalDate, finalDate);

    var utc1 = Date.UTC(
      dInitial.getFullYear(),
      dInitial.getMonth(),
      dInitial.getDate()
    );
    var utc2 = Date.UTC(
      dFinal.getFullYear(),
      dFinal.getMonth(),
      dFinal.getDate()
    );

    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
  }

  renderPercentDate() {
    if (
      this.props.texts.finalDate !== null &&
      this.props.texts.initialDate !== null &&
      Object.keys(this.props.texts).length !== 0
    ) {
      
      var finalDate = parseInt(this.props.texts.finalDate.split(" ")[0], 10);
      var initialDate = parseInt(
        this.props.texts.initialDate.split(" ")[0],
        10
      );

      var x = (initialDate - finalDate).toString().includes("-")
        ? parseInt((initialDate - finalDate).toString().split("-")[1])
        : initialDate - finalDate;
      // var x = initialDate - finalDate;
      var y = this.dateDiferencaEmDias();
      // var z = parseInt((100 / x).toFixed());
      var final = x * y;
      var resultado = final + new Date().getDate();
      return (
        <Progress percent={resultado} showInfo={false} strokeColor="#f09500" />
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <Col xs={23} sm={23} md={25} lg={6} className="col-of-modal">
        <Row className="first-row-of-modal">
          <Col xs={23} sm={23} md={25} lg={32} className="col-of-modal">
            <Row>
              <h3 style={{ fontWeight: "bold", fontSize: "23px" }}>
                {this.props.texts.title}
              </h3>
            </Row>
            <Row style={{ maxHeight: "100px", overflowY: "hidden" }}>
              <p>{this.props.texts.description}</p>
            </Row>
          </Col>
        </Row>
        <Row className="second-row-of-modal">
          <div className="first-div-of-modal">
            <Row>
              {this.renderRowInitialDate()}
              {this.renderRowFinalDate()}
            </Row>
            <Row className="modal--row-progress">
              {this.renderPercentDate()}
            </Row>
          </div>
        </Row>
      </Col>
    );
  }
}

export default detailsTextModal;
