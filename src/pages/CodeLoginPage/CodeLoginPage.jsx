import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import codeValidationSchema from "../../helpers/yup/codeValidationSchema";
import images from "../../assets/images";
import styles from "./CodeLoginPage.module.scss";

const CodeLoginPage = ({ updateStatus }) => {
  //updateStatus from Routes
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    updateStatus();
    navigate("/orders");
  };

  return (
    <div className={styles.loginContainer}>
      <img src={images.loginImg} className={styles.login__img} alt="The cafe" />

      <div className={styles.login__icon}>
        <img src={images.neocafeIconLogin} alt="The neocafe" />
      </div>
      <div className={styles.loginContent}>
        <Formik
          initialValues={{ code1: "", code2: "", code3: "", code4: "" }}
          validationSchema={codeValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, isValid }) => (
            <Form className={styles.emailForm}>
              <h2 className={styles.login__title}>
                Код <br /> подтверждения
              </h2>
              <div className={styles.container}>
                <div className={styles.inputContainer}>
                  <Field
                    type="text"
                    name="code1"
                    placeholder="_"
                    maxLength="1"
                    inputMode="numeric"
                    className={`${styles.code__input} ${
                      errors.code1 && touched.code1 && styles.error
                    }`}
                  />
                  <Field
                    type="text"
                    name="code2"
                    placeholder="_"
                    maxLength="1"
                    inputMode="numeric"
                    className={`${styles.code__input} ${
                      errors.code2 && touched.code2 && styles.error
                    }`}
                  />
                  <Field
                    type="text"
                    name="code3"
                    placeholder="_"
                    maxLength="1"
                    inputMode="numeric"
                    className={`${styles.code__input} ${
                      errors.code3 && touched.code3 && styles.error
                    }`}
                  />
                  <Field
                    type="text"
                    name="code4"
                    placeholder="_"
                    maxLength="1"
                    inputMode="numeric"
                    className={`${styles.code__input} ${
                      errors.code4 && touched.code4 && styles.error
                    }`}
                  />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`${styles.button} ${
                    isSubmitting || !isValid ? styles.button__disabled : ""
                  }`}
                >
                  Войти
                </button>

                <button className={styles.resendBtn}>Отправить повторно</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CodeLoginPage;
