import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "reset-css";
import "./assets/css/index.css";
import store from "./store/index.js";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));
