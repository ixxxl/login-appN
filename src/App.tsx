import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginFormComponent from "./components/LoginFormComponent";

function App() {
  return (
    <div className="App">
      {/* <a href="/login">Login Page</a>

      <Routes>
        <Route path="./LoginFormComponents" element={LoginFormComponent} />
      </Routes> */}
      <LoginFormComponent login="" password="" confirmPassword="" />
    </div>
  );
}

export default App;
