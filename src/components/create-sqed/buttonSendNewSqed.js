import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SqedsActions from "../../redux/store/actions";

class ButtonSendNewSqed extends Component {
  formatDate(date) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }

  buttonNewSqed() {
    this.props.request_send_new_sqed(this.props.sqeds.create_sqed);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.buttonNewSqed()}
          style={{
            borderRadius: "20px",
            backgroundImage:
              "linear-gradient( to right, #343092, #6c2f96, #982e95, #be2f90, #de3787 )",
            width: "100%",
            height: "51px",
            fontFamily: "Gotham, sans-serif",
            color: "#ffffff",
            fontSize: "16.8px",
            cursor: "pointer"
          }}
        >
          Criar SQED
        </button>
      </div>
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
)(ButtonSendNewSqed);
