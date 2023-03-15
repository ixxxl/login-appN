import React from "react";

import "./App.css";
import { AuthPage } from "./components/AuthPage";

import LoginFormComponent from "./components/LoginFormComponent";

function App() {
  return (
    <div className="App">
      <AuthPage />
      {/* <LoginFormComponent login="" password="" confirmPassword="" /> */}
    </div>
  );
}

export default App;
