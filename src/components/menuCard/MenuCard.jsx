import React from "react";
import images from "../../assets/images";
import styles from "./MenuCard.module.scss";

const MenuCard = ({ menuItem }) => {
  return (
    <div className={styles.menucard}>
      <img
        src={menuItem.img}
        alt="The menu item"
        className={styles.menucard__img}
      />

      <div className={styles.menucard__content}>
        <h3 className={styles.menucard__title}>{menuItem.title}</h3>
        <p className={styles.menucard__price}>{menuItem.price}</p>
      </div>

      <button className={styles.menucard__btn}>+</button>
    </div>
  );
};

export default MenuCard;
