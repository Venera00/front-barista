import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailValidationSchema from "../../helpers/yup/emailValidationSchema";
import images from "../../assets/images";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    navigate("/verify");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginImg_wrapper}>
        <img
          src={images.loginImg}
          className={styles.login__img}
          alt="The cafe"
        />
      </div>
      <div className={styles.login__icon}>
        <img src={images.neocafeIconLogin} alt="The neocafe" />
      </div>
      <div className={styles.loginContent}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={emailValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className={styles.emailForm}>
              <h2 className={styles.login__title}>Вход</h2>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Электронная почта"
                  className={styles.email__input}
                />
                {/* <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMessage}
                /> */}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={`${styles.button} ${
                  isSubmitting || !isValid ? styles.button__disabled : ""
                }`}
              >
                Получить код
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
