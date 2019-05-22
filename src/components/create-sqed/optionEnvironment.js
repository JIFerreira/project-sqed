import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OptionCustom from "./optionCustom";
import * as SqedsActions from "../../redux/store/actions";

import "../../UI/style/modalStyle.css";

class optionEnvironmment extends React.Component {
  constructor(props) {
    super(props);
    this.insertEnvironment = this.insertEnvironment.bind(this);
  }

  insertEnvironment(event) {
    this.props.setEnvironment(event.target.value);
  }
  render() {
    return this.props.thumbnail ? (
      <div style={{ width: "100%", float: "left", border: "1px solid c3c3c3" }}>
        <textarea
          cols={100}
          rows={3}
          onChange={this.insertEnvironment}
          type="text"
          placeholder="Inserir o endereco"
          style={{
            border: "1px solid #c3c3c3",
            borderRadius: "10px",
            height: "85px",
            width: "70%",
            paddingLeft: "5px"
          }}
          value={this.props.sqeds.create_sqed.address}
        />
      </div>
    ) : (
      <OptionCustom />
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
)(optionEnvironmment);
