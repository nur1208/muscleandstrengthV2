import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NotificationProvider } from "./components/Notification";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
