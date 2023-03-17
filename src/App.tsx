import React from "react";
import { Form, Outlet } from "react-router-dom";

import "./App.css";
import { AuthPage } from "./components/AuthPage";
import { FormComponent } from "./components/StartComponnet";

import LoginFormComponent from "./components/LoginFormComponent";

function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;
