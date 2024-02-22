import React, { useState } from "react";
import images from "../../assets/images";
import styles from "./MenuCard.module.scss";

const MenuCard = ({ menuItem }) => {
  const [showBtns, setShowBtns] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleBtnClick = () => {
    setShowBtns(true);
  };

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    // setShowBtns(true);
    setQuantity(quantity - 1);
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

      {showBtns && (
        <div className={styles.counter}>
          <button onClick={handleRemoveItem} className={styles.counter__remove}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={handleAddItem} className={styles.counter__add}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
