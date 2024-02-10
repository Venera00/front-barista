import React, { useState } from "react";
import images from "../../assets/images";
import styles from "./OrderCard.module.scss";

const NewOrderCard = ({ order }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={styles.neworder_card}>
      <div className={styles.order_content}>
        <img
          src={hover ? images.closeIconWhite : images.closeIcon}
          alt="Close"
          className={styles.close_btn}
        />
        <h3 className={styles.order_number}>{order.number}</h3>
        <p className={styles.waiter_name}>{order.waiter}</p>
        <p className={styles.order_desc}>{order.first_description}</p>
        <p className={styles.order_desc}>{order.second_description}</p>
        <p className={styles.order_desc}>{order.third_description}</p>
        <p className={styles.order_more}>Еще</p>

        <button className={styles.neworder_btn}>Принять</button>
      </div>
    </div>
  );
};

export default NewOrderCard;
