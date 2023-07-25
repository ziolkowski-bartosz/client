import "./assets/styles/index.css";

import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { apolloClient } from "./utils/apolloClient";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </AuthProvider>
);
