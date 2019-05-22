import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

import Home from "./screens/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
