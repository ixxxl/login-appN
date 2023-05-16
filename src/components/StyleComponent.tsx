import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const BackGround = styled.div`
  height: 100vh;
  background: no-repeat url(/low_poly_banner_design_1711.jpg);
`;

export const AuthForm = styled.div`
  width: 100vh;
  height: 88vh;
  background-color: bisque;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AuthFormSubtitle = styled(Typography)`
&& {
  color: rgb(100, 180, 180);
  component="div"
  gutterBottom={true}
}
`;

export const AuthForm__Form = styled.form`
  width: 360px;
`;

export const AuthBtn = styled.div`
  width: 100vh;
  height: 10;
  background-color: bisque;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Canvas = styled.div`
  background-color: rgb(226, 129, 11);
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
