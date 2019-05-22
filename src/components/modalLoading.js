import React, { Component } from "react";
import { Row, Col, Modal, Spin } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SqedsActions from "../redux/store/actions";

class ModalLoading extends Component {
  render() {
    return (
      <Modal
        visible={this.props.sqeds.showModalLoading}
        footer=""
        width="70%"
        height="90%"
        swiping={false}
        enableKeyboardControls={false}
        onCancel={() => this.props.showModalLoading()}
      >
        <Row type="flex" justify="space-between">
          <Col xs={23} sm={23} md={28} lg={11}>
            <Row style={{ textAlign: "center" }}>
              <Spin size="large" />
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  sqeds: state.sqeds
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SqedsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLoading);
