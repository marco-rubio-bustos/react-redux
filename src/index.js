import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Permite que React acceda al store
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
