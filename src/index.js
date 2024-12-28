import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Permite que React acceda al store
import store from "./redux/store";
import Counter from "./component/counter";
import Api from "./component/api";
import Button from "./component/button";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <Api />
    <Button />
  </Provider>,
  document.getElementById("root")
);
