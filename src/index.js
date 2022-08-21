import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <AlertProvider template={AlertTemplate} >
    <App />
    </AlertProvider>
  </BrowserRouter>
  //</React.StrictMode>
);
defineCustomElements(window);
reportWebVitals();
