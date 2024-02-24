import React from "react";
import classNames from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={classNames(styles.modal, { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames(styles.modal__content, {
          [styles.active]: active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
