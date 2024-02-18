import React, { useState } from "react";
import images from "../../assets/images";
import styles from "./SidebarOrderItems.module.scss";

const SidebarOrderItems = ({ order }) => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [count, setCount] = useState(1);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // const dishData = [
  //   {
  //     order_title: "Латте",
  //     order_details: ["Коровье молоко", "Карамельный сироп"],
  //     price: "140",
  //   },
  // ];

  return (
    <>
      {openSideBar && (
        <div className={styles.sidebar}>
          <h3 className={styles.sidebar__title}>Заказ на вынос</h3>
          <img
            src={images.closeIconWhite}
            alt="Close"
            className={styles.sidebar__close}
            onClick={toggleSideBar}
          />
          <div>
            <div className={styles.orderdetails_wrapper}>
              <img src={images.coffee} alt="The order item" />
              {order && (
                <>
                  <div>
                    <h3>{order.order_title}</h3>
                    {order.order_details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>

                  <div>
                    <p>{order.price}</p>
                  </div>
                </>
              )}
              <div className={styles.sidebar_btns}>
                <button onClick={increment} className={styles.sidebar_btn}>
                  +
                </button>
                <p>{count}</p>
                <button onClick={decrement} className={styles.sidebar_btn}>
                  -
                </button>
              </div>
            </div>
          </div>

          <button className={styles.orderadd_btn}>Добавить</button>

          <div className={styles.sidebar__footer}>
            <p className={styles.footer__title}>Итого</p>
            <button className={styles.footer__btn}>Принять</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarOrderItems;
