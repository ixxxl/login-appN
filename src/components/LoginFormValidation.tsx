const requiredField = "Обязательно для заполнения";

export const loginFormValidation = {
  required: requiredField,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин только на английском";
    }
    return true;
  },
};

export const passwordFormValidation = {
  required: requiredField,
  validate: (value: string) => {
    if (value.length < 6) {
      return "Пароль должен быть длинее 6 символов";
    }
    return true;
  },
};
