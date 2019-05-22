import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SqedsActions from "../redux/store/actions";
import { Layout, Col, Row, Icon } from "antd";
import "./style/headerStyle.css";

const { Header } = Layout;

class header extends React.Component {
  render() {
    return (
      <Header className="styleHeader">
        <Row type="flex" justify="space-between">
          <Col>
            <button className="styleAncor">Sqed</button>
          </Col>

          <Col className="create-sqed--container">
            <button
              className="styleAncor"
              onClick={() => this.props.showModalCreateSqed()}
            >
              <Icon type="plus-circle" className="create-sqed--icon" />
              Criar SQED
            </button>
          </Col>
        </Row>
      </Header>
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
)(header);
