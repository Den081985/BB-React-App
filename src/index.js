import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import store from "./store/store";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ThemeProvider from "./context/themeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
