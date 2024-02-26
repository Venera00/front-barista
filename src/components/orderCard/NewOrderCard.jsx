import React, { useState } from "react";
import images from "../../assets/images";
import Modal from "../Modal/Modal";
import classNames from "classnames";
import styles from "./OrderCard.module.scss";

const NewOrderCard = ({ order, onClick }) => {
  // const [hover, setHover] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  // const handleMouseEnter = () => {
  //   setHover(true);
  // };

  // const handleMouseLeave = () => {
  //   setHover(false);
  // };

  return (
    <div className={styles.neworder_card} onClick={onClick}>
      <div className={styles.order_content}>
        <div>
          <img
            // src={hover ? images.closeIconWhite : images.closeIcon}
            src={images.closeIcon}
            alt="Close"
            className={styles.close_btn}
            onClick={() => setModalActive(true)}
          />
          <h3 className={styles.order_number}>{order.number}</h3>
          <p className={styles.waiter_name}>{order.waiter}</p>
          <p className={styles.order_desc}>{order.first_description}</p>
          <p className={styles.order_desc}>{order.second_description}</p>
          <p className={styles.order_desc}>{order.third_description}</p>
          <p className={styles.order_more}>Еще</p>
        </div>

        <button className={styles.neworder_btn}>Принять</button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.orderCancel_modal}>
          <div className={styles.modalTitle_wrapper}>
            <h4 className={styles.logoutModal_title}>Отменить заказ</h4>
            <img
              src={images.closeIcon}
              className={styles.logoutModal_close}
              alt="Logout"
              onClick={() => setModalActive(false)}
            />
          </div>

          <p className={styles.logoutModal_subtitle}>
            Вы действительно хотите отменить заказ М-47?
          </p>

          <div className={styles.logoutModal_btns}>
            <button
              className={classNames(styles.logoutModal_btn, styles.btn__yes)}
            >
              Да
            </button>
            <button
              onClick={() => setModalActive(false)}
              className={classNames(styles.logoutModal_btn, styles.btn__no)}
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewOrderCard;
