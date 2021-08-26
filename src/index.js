import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./context/AuthProvider";
import { myAction } from "./redux/action";

store.dispatch(myAction(2));
store.dispatch(myAction(7));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
