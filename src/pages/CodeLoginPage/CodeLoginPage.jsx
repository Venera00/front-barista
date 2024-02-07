import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginImg from "../../assets/loginImg.png";
import loginIcon from "../../assets/neocafeIconLogin.svg";
import styles from "./CodeLoginPage.module.scss";

const CodeLoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    navigate("/orders");
  };

  return (
    <div className={styles.loginContainer}>
      <img src={loginImg} className={styles.login__img} alt="The cafe" />

      <div className={styles.login__icon}>
        <img src={loginIcon} alt="The neocafe" />
      </div>
      <div className={styles.loginContent}>
        <Formik
          initialValues={{ code: "" }}
          //   validationSchema={emailValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.emailForm}>
              <h2 className={styles.login__title}>
                Код <br /> подтверждения
              </h2>
              <div className={styles.container}>
                <div className={styles.inputContainer}>
                  <Field
                    type="number"
                    name="code"
                    placeholder="_____"
                    className={styles.code__input}
                  />
                  <Field
                    type="number"
                    name="code"
                    className={styles.code__input}
                  />
                  <Field
                    type="number"
                    name="code"
                    className={styles.code__input}
                  />
                  <Field
                    type="number"
                    name="code"
                    className={styles.code__input}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.button}
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
