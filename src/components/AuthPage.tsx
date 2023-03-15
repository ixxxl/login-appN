import { Typography } from "@mui/material";
import React from "react";
import LoginFormComponent from "./LoginFormComponent";

export const AuthPage: React.FC = () => {
  return (
    <div className="auth-page ">
      <LoginFormComponent login="" password="" confirmPassword="" />;
    </div>
  );
};
