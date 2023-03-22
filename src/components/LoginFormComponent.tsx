import { DisplaySettings } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { axiosData } from "../models/dataModels";
import {
  loginFormValidation,
  passwordFormValidation,
} from "./FormValidationComponent";
import { AuthForm, AuthFormSubtitle, AuthForm__Form } from "./StyleComponent";
import { UserAfterComponent } from "./UserAfterLoginComponent";

interface IFieldsAuth {
  login: string;
  password: string;
  confirmPassword: string;
  id?: number;
}

const LoginFormComponent = (props: IFieldsAuth) => {
  const { handleSubmit, reset, control } = useForm<IFieldsAuth>({
    mode: "onBlur",
  });
  const [loginCurrentUser, setLoginCurrentUser] = useState<boolean>();

  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<IFieldsAuth> = (data) => {
    let currentUser: string;
    let currentUserPassword: string;

    const get = { method: "GET", url: "http://localhost:3030/users/" };
    axiosData(get).then((responseData) => {
      responseData.data.map((user: any) => {
        if (user.login === data.login) {
          currentUser = user.login;
          currentUserPassword = user.password;
          console.log(user.id);
          localStorage.setItem("currentUserId", user.id);
        }
      });

      if (currentUser === data.login && currentUserPassword === data.password) {
        setLoginCurrentUser(true);
      } else {
        //User not found.Please register
        setLoginCurrentUser(false);
      }
    });
  };

  return (
    <AuthForm>
      <Typography variant="h4" component="h4" className="auth">
        Войдите
      </Typography>
      <AuthFormSubtitle variant="subtitle1">
        Чтобы получить доступ
      </AuthFormSubtitle>
      <AuthForm__Form>
        <Controller
          control={control}
          name="login"
          rules={loginFormValidation}
          render={({ field }) => (
            <TextField
              label="login"
              size="small"
              helperText={errors.login && errors.login?.message}
              error={!!errors.login?.message}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordFormValidation}
          render={({ field }) => (
            <TextField
              label="password"
              type="password"
              size="small"
              sx={{ marginTop: 2 }}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password && errors.password?.message}
              onBlur={field.onBlur}
            />
          )}
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Войти
        </Button>
      </AuthForm__Form>
      {loginCurrentUser === true ? (
        <UserAfterComponent />
      ) : loginCurrentUser === false ? (
        "Пользователь не найден или пароль неверный . Зарегистрируйтесь"
      ) : (
        ""
      )}
    </AuthForm>
  );
};

export default LoginFormComponent;
