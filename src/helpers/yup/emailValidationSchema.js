import * as yup from "yup";

const emailValidationSchema = yup.object().shape({
  email: yup.string().email("Неверный формат почты").required("Введите почту"),
});

export default emailValidationSchema;
