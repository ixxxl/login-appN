import { DisplaySettings } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import {
  loginFormValidation,
  passwordFormValidation,
} from "./FormValidationComponent";

interface IFieldsAuth {
  login: string;
  password: string;
  confirmPassword: string;
}

const LoginFormComponent = (props: IFieldsAuth) => {
  const { handleSubmit, reset, control } = useForm<IFieldsAuth>({
    mode: "onChange",
  });

  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<IFieldsAuth> = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-form">
      <Typography variant="h4" component="h4" className="auth">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="auth-form_subtitle"
      >
        Чтобы получить доступ
      </Typography>
      <form className="auth-form__form">
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
            />
          )}
        />

        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginFormComponent;
