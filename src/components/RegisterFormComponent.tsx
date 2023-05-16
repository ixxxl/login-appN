import { DisplaySettings, FormatShapes } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { axiosData, IAxios } from "../models/dataModels";
import {
  loginFormValidation,
  passwordFormValidation,
} from "./FormValidationComponent";
import { AuthForm, AuthFormSubtitle, AuthForm__Form } from "./StyleComponent";
import { UserAfterComponent } from "./UserAfterLoginComponent";

export interface IFieldsAuth {
  login: string;
  password: string;
  confirmPassword: string;
}

const RegisterFormComponent = () => {
  const { handleSubmit, reset, control, watch, trigger } = useForm<IFieldsAuth>(
    {
      mode: "onBlur",
    }
  );
  const [userStatus, setUserStatus] = useState<string>("");

  const { errors } = useFormState({ control });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.password !== value.confirmPassword) {
        trigger();
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const [formDataState, setFormDataState] = useState<IFieldsAuth | null>(null);

  const onSubmit: SubmitHandler<IFieldsAuth> = (data) => {
    setFormDataState(data);
    let currentUser: boolean;

    const get = {
      method: "GET",
      url: "http://localhost:3030/users/",
      data: formDataState,
    };

    axiosData(get).then((responseData) => {
      // console.log(data.login);
      responseData.data.filter((user: any) => {
        if (user.login === data.login) {
          currentUser = false;
          setUserStatus("Пользователь с таким логином уже существует");
        } else {
          currentUser = true;
        }
      });
      //console.log(currentUser, data.login,formDataState);
      if (currentUser && formDataState) {
        const post = {
          method: "POST",
          url: "http://localhost:3030/users/",
          data: formDataState,
        };
        axiosData(post).then((responseData) => {
          console.log(responseData);
          if (responseData.status === 201) {
            setUserStatus("Пользователь создан");
            reset();
          } else {
            setUserStatus(responseData.error);
          }
        });
      }

      // (async () => {
      //   try {
      //     const response: any = await axios.post(
      //       "http://localhost:3030/users",
      //       formDataState
      //     );

      //     console.log(response.data);
      //   } catch (error: any) {
      //     console.log(error.message);
      //   }
      // })();
    });
  };

  return (
    <AuthForm>
      <Typography variant="h4">Зарегистрируйтесь</Typography>
      <AuthFormSubtitle variant="subtitle1">
        Чтобы создать учетную запись
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
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: "обязательно для заполнения ",
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Пароль не сопадает";
              }
            },
          }}
          render={({ field }) => (
            <TextField
              label="confirm password"
              type="password"
              size="small"
              sx={{ marginTop: 2 }}
              helperText={
                errors.confirmPassword && errors.confirmPassword?.message
              }
              error={!!errors.confirmPassword?.message}
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

        {userStatus && userStatus}
      </AuthForm__Form>
    </AuthForm>
  );
};

export default RegisterFormComponent;
