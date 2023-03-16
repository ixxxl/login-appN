import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import { AuthPage } from "./components/AuthPage";

import LoginFormComponent from "./components/LoginFormComponent";

function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;
