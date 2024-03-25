import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTops from "./Others/ScrollToTops.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
      <ScrollToTops />
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
      />
      <App />
    </Router>
    </AuthProvider>
  </React.StrictMode>
);