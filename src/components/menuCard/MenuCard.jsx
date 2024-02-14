import React from "react";
import images from "../../assets/images";
import styles from "./MenuCard.module.scss";

const MenuCard = () => {
  return (
    <div className={styles.menucard}>
      <img
        src={images.coffee}
        alt="The menu item"
        className={styles.menucard__img}
      />

      <div className={styles.menucard__content}>
        <h3>Капучино</h3>
        <p>140 c</p>
      </div>

      <button className={styles.menu__btn}>+</button>
    </div>
  );
};

export default MenuCard;
