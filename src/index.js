import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "rc-slider/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./redux/storeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <StoreProvider>
    <Provider store={store}>
      <ToastContainer autoClose={2000} hideProgressBar />
    </Provider>
    <App />
  </StoreProvider>
  // </React.StrictMode>
);
