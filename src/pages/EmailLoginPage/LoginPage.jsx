import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailValidationSchema from "../../helpers/yup/emailValidationSchema";
import images from "../../assets/images";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // onEmailSubmit(values.email);

    setSubmitting(false);

    navigate("/verify");
  };

  return (
    <div className={styles.loginContainer}>
      <img src={images.loginImg} className={styles.login__img} alt="The cafe" />

      <div className={styles.login__icon}>
        <img src={images.neocafeIconLogin} alt="The neocafe" />
      </div>
      <div className={styles.loginContent}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={emailValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.emailForm}>
              <h2 className={styles.login__title}>Вход</h2>
              <div className={styles.container}>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    className={styles.email__input}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.button}
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
