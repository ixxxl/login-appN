import { DisplaySettings } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";

interface IFieldsAuth {
  login: string;
  password: string;
  confirmPassword: string;
}

const LoginFormComponent = (props: IFieldsAuth) => {
  const { login, password, confirmPassword } = props;

  const [dataForm, setDataForm] = useState<IFieldsAuth | null>(null);

  const { handleSubmit, reset, control } = useForm();
  const { errors } = useFormState({ control });

  const onSubmit = (data: any) => {
    console.log(data);
    setDataForm(data);
    reset();
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
        <TextField
          label="login"
          size="small"
          sx={{ marginTop: 2 }}
          fullWidth={true}
        />
        <TextField
          label="password"
          type="password"
          size="small"
          sx={{ marginTop: 2 }}
          fullWidth={true}
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Войти
        </Button>
      </form>
    </div>
    // <form>
    //   <Controller
    //     name={"login"}
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field: { onChange, value } }) => (
    //       <TextField
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           flexWrap: "wrap",
    //           justifyContent: "center",
    //           alignContent: "center",
    //           alignItems: "flex-start"

    //           // display: "flex",
    //           // flexDirection: "row",
    //           // justifyContent: "center",
    //           // alignContent:"center",

    //           // flexWrap:"wrap"
    //         }}
    //         onChange={onChange}
    //         value={value}
    //         label={"login"}
    //         // errors={errors && errors.message}
    //         // helperText={errors && errors.message}
    //       />
    //     )}
    //   />
    //   <Controller
    //     name={"password"}
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field: { onChange, value } }) => (
    //       <TextField
    //         sx={{
    //           width: "300px",
    //           display: "flex",
    //           flexDirection: "row",
    //           justifyContent: "end",
    //           alignContent: "center",
    //         }}
    //         type="password"
    //         autoComplete="current-password"
    //         onChange={onChange}
    //         value={value}
    //         label={"password"}
    //         // error={errors && errors.message}
    //         // helperText={errors && errors.message}
    //       />
    //     )}
    //   />
    //   <div>
    //     <Button onClick={handleSubmit(onSubmit)}>Register</Button>
    //   </div>
    // </form>
  );
};

export default LoginFormComponent;
