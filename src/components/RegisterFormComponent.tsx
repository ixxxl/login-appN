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

interface IFieldsAuth {
  login: string;
  password: string;
  confirmPassword: string;
}

const RegisterFormComponent = () => {
  const { handleSubmit, reset, control } = useForm<IFieldsAuth>({
    mode: "onBlur",
  });

  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<IFieldsAuth> = (data) => {
    console.log(data);
  };

  // const postUser = async () => {
  //   try {
  //     const response: any = await axios.post("http://localhost:3030/users/");

  //     response.data;
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  const onSubmitRegistration: SubmitHandler<IFieldsAuth> = (data) => {
    // async () => {
    //   try {
    //     const response: any = await axios.get("http://localhost:3030/users");
    //     console.log(response.data);
    //   } catch (error: any) {
    //     console.log(error.message);
    //   }
    // };
  };

  return (
    <div className="auth-form">
      <Typography variant="h4" component="h4" className="auth">
        Зарегистрируйтесь
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
        <Controller
          control={control}
          name="confirmPassword"
          rules={passwordFormValidation}
          render={({ field }) => (
            <TextField
              label="confirm password"
              type="password"
              size="small"
              sx={{ marginTop: 2 }}
              helperText={
                errors.confirmPassword && errors.confirmPassword?.message
              }
              error={!!errors.login?.message}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default RegisterFormComponent;
