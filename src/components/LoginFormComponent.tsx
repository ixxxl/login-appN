import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";

interface IFieldsAuth {
  login: string;
  password: string;
  confirmPassword: string;
}

const LoginFormComponent = (props: IFieldsAuth) => {
  const { login, password, confirmPassword } = props;
  const [fieldsState, setFieldState] = useState<IFieldsAuth | null>(null);
  const { register, handleSubmit, reset, control } = useForm();
  const { errors } = useFormState({ control });
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <form onClick={handleSubmit(onSubmit)}>
        <Controller
          name={"login"}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={"login"}
              // error={errors && errors.message}
              // helperText={errors && errors.message}
            />
          )}
        />
        <div>
          <Button onClick={handleSubmit(onSubmit)}>Register</Button>
          <Button onClick={() => reset()} variant={"outlined"}>
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginFormComponent;
