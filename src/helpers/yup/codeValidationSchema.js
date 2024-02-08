import * as yup from "yup";

const codeValidationSchema = yup.object().shape({
  code1: yup
    .string()
    .matches(/^[0-9]$/)
    .required("Required"),
  code2: yup
    .string()
    .matches(/^[0-9]$/)
    .required("Required"),
  code3: yup
    .string()
    .matches(/^[0-9]$/)
    .required("Required"),
  code4: yup
    .string()
    .matches(/^[0-9]$/)
    .required("Required"),
});
//should be test for checking correct input

export default codeValidationSchema;
