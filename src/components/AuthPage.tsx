import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";

enum ERegistr {
  registr = "registr",
  login = "login",
}

export const AuthPage: React.FC = () => {
  // const [registartionState, setRegistartionState] = useState<ERegistr | null>(
  //   null
  // );

  // const onClickRegisterHanlder = () => {
  //   setRegistartionState(ERegistr.registr);
  // };

  // const onClickLoginHandler = () => {
  //   setRegistartionState(ERegistr.login);
  // };

  return (
    <div className="auth-page ">
      <div className="auth-btn">
        <Button
          component={Link}
          to="/register"
          // onClick={onClickRegisterHanlder}
        >
          Регистрация
        </Button>
        <Button
          component={Link}
          to="/login"
          // onClick={onClickLoginHandler}
        >
          Войти
        </Button>
      </div>
      <Routes>
        {/* <Route path="/" element={<AuthPage />} /> */}
        <Route
          path="/login"
          element={
            <LoginFormComponent login="" password="" confirmPassword="" />
            // ERegistr.login && (
            //   <LoginFormComponent login="" password="" confirmPassword="" />
            // )
          }
        />
        <Route
          path="/register"
          element={<RegisterFormComponent />} //ERegistr.registr && <RegisterFormComponent />
        />
      </Routes>
      <Outlet />
      {/* {registartionState === ERegistr.login ? (
        <LoginFormComponent login="" password="" confirmPassword="" />
      ) : registartionState === ERegistr.registr ? (
        <RegisterFormComponent />
      ) : (
        ""
      )} */}
    </div>
  );
};
