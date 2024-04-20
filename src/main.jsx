import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Config from "../contexts/Conf.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <Config>
        <App />
      </Config>
    </BrowserRouter>
  // </Auth0Provider>
);
