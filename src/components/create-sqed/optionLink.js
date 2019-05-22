import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OptionCustom from "./optionCustom";
import * as SqedsActions from "../../redux/store/actions";

import "../../UI/style/modalStyle.css";

class optionLink extends React.Component {
  constructor(props) {
    super(props);
    this.insertLink = this.insertLink.bind(this);
  }

  insertLink(event) {
    this.props.setLink(event.target.value);
  }
  render() {
    return this.props.thumbnail ? (
      <div style={{ width: "100%", float: "left" }}>
        <textarea
          cols={100}
          rows={3}
          onChange={this.insertLink}
          type="text"
          placeholder="Inserir Link"
          style={{
            border: "1px solid #c3c3c3",
            borderRadius: "10px",
            height: "85px",
            width: "70%",
            paddingLeft: "5px"
          }}
          value={this.props.sqeds.create_sqed.link}
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
)(optionLink);
