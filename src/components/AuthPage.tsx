import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Form, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";
import { StartComponnet } from "./StartComponnet";
import { AuthBtn, BackGround } from "./StyleComponent";

enum ERegistr {
  registr = "registr",
  login = "login",
}

export const AuthPage: React.FC = () => {
  return (
    <BackGround>
      <AuthBtn>
        <Button component={Link} to="/register">
          Регистрация
        </Button>
        <Button component={Link} to="/login/">
          Войти
        </Button>
        {/* <Button component={Link} to="/">
          Выйти
        </Button> */}
      </AuthBtn>
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
    </BackGround>
  );
};


https://meet.google.com/gsv-dtda-chy
