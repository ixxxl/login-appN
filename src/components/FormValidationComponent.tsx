import { Pattern } from "@mui/icons-material";

const requiredField = "Обязательно для заполнения";

export const loginFormValidation = {
  required: requiredField,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин только на английском";
    }
    
    return true;
  },
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message:
      "Неправильный формат email. Example: name.surname@google.com",
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
  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    message:
      "Минимумальные требования: 6 знаков, одна заглавная буква, одно число и один символ",
  },
};
