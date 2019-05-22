import React, { Component } from "react";
import { Row, Col, Modal, Button } from "antd";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SqedsActions from "../redux/store/actions";

class ModalFeedbackCreateSqed extends Component {
  constructor(props) {
    super(props);

    this.renderModalInfo = this.renderModalInfo.bind(this);
  }

  renderModalInfo() {
    debugger;
    if (
      this.props.sqeds.statusFeedbackCreateSqed !== undefined &&
      this.props.sqeds.statusFeedbackCreateSqed !== ""
    ) {
      return (
        <Modal
          visible={this.props.sqeds.showModalLoadingFeedback}
          footer=""
          width="50%"
          height="90%"
          swiping={false}
          enableKeyboardControls={false}
          onCancel={() => this.props.showModalLoadingFeedback()}
        >
          <Row type="flex" justify="space-between">
            <Col xs={23} sm={23} md={28} lg={11}>
              <Row style={{ textAlign: "center" }}>
                <p>{this.props.sqeds.statusFeedbackCreateSqed.message}</p>
                <Button
                  type="primary"
                  onClick={() => this.props.showModalLoadingFeedback()}
                >
                  ok
                </Button>
              </Row>
            </Col>
          </Row>
        </Modal>
      );
    } else {
      return (
        <Modal
          visible={this.props.sqeds.showModalLoadingFeedback}
          footer=""
          width="50%"
          height="90%"
          swiping={false}
          enableKeyboardControls={false}
          onCancel={() => this.props.showModalLoadingFeedback()}
        >
          <Row type="flex" justify="space-between">
            <Col xs={23} sm={23} md={28} lg={11}>
              <Row style={{ textAlign: "center" }}>
                <p>Exemplo de mensagem de erro</p>
              </Row>
            </Col>
          </Row>
        </Modal>
      );
    }
  }
  render() {
    return this.renderModalInfo();
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
)(ModalFeedbackCreateSqed);
