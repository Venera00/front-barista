import React from "react";
import images from "../../assets/images";
import styles from "./MenuCard.module.scss";

const MenuCard = ({ menuItem }) => {
  const handleBtnClick = () => {
    console.log("Btn clicked");
  };
  return (
    <div className={styles.menucard}>
      <img
        src={menuItem.img}
        alt="The menu item"
        className={styles.menucard__img}
      />

      <div className={styles.menucard__content}>
        <div className={styles.menucard__title}>{menuItem.title}</div>
        <div className={styles.menucard__price}>{menuItem.price}</div>
      </div>

      <button onClick={handleBtnClick} className={styles.menucard__btn}>
        +
      </button>
    </div>
  );
};

export default MenuCard;
