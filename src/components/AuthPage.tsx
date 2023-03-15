import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";

enum ERegistr {
  registr = "registr",
  login = "login",
}

export const AuthPage: React.FC = () => {
  const [registartionState, setRegistartionState] = useState<ERegistr | null>(
    null
  );
  return (
    <div className="auth-page ">
      <div className="auth-btn">
        <Button onClick={() => setRegistartionState(ERegistr.registr)}>
          Регистрация
        </Button>
        <Button onClick={() => setRegistartionState(ERegistr.login)}>
          Войти
        </Button>
      </div>
      {registartionState === ERegistr.login ? (
        <LoginFormComponent login="" password="" confirmPassword="" />
      ) : registartionState === ERegistr.registr ? (
        <RegisterFormComponent />
      ) : (
        ""
      )}
    </div>
  );
};
