import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Form, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";
import { StartComponnet } from "./StartComponnet";

enum ERegistr {
  registr = "registr",
  login = "login",
}

export const AuthPage: React.FC = () => {
  return (
    <div className="auth-page ">
      <div className="auth-btn">
        <Button component={Link} to="/register">
          Регистрация
        </Button>
        <Button component={Link} to="/login">
          Войти
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<StartComponnet />} />
        <Route
          path="/login"
          element={
            <LoginFormComponent login="" password="" confirmPassword="" />
          }
        />
        <Route path="/register" element={<RegisterFormComponent />} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
};
