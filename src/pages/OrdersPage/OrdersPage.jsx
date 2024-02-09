import React from "react";
import images from "../../assets/images";
import styles from "./OrdersPage.module.scss";

const OrdersPage = () => {
  return (
    <div className={styles.orders_container}>
      <div className={styles.sidebar}>
        <img
          src={images.neocafeMainIcon}
          alt="Neocafe Icon"
          className={styles.main_icon}
        />
        <div className={styles.sidebar_items}>
          <button
            className={`${styles.sidebarItemWrapper} ${styles.orders_btn}`}
          >
            <img src={images.ordersIcon} alt="Orders Icon" />
            <p>Заказы</p>
          </button>
          <button className={styles.sidebarItemWrapper}>
            <img src={images.menuIcon} alt="Menu Icon" />
            <p>Меню</p>
          </button>
          <button className={styles.sidebarItemWrapper}>
            <img src={images.profileIcon} alt="Profile Icon" />
            <p>Профиль</p>
          </button>

          <div
            className={`${styles.logout_wrapper} ${styles.sidebarItemWrapper}`}
          >
            <img src={images.logoutIcon} alt="Logout" />
            <p>Выйти</p>
          </div>
        </div>
      </div>

      <div className={styles.ordertype_container}>
        <div className={styles.ordertype_wrapper}>
          <h3 className={styles.orders_title}>Заказы</h3>
          <button className={`${styles.orderplace_btn} ${styles.takeaway_btn}`}>
            На вынос
          </button>
          <button className={`${styles.orderplace_btn} ${styles.inplace_btn}`}>
            В заведении
          </button>
          <img
            src={images.bellIcon}
            alt="The notifications"
            className={styles.notifications_icon}
          />
        </div>

        <div className={styles.orders}>
          <div className={styles.orderstatus_wrapper}>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_new}`}
            >
              Новые
            </button>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_inprocess}`}
            >
              В процессе
            </button>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_ready}`}
            >
              Готово
            </button>

            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_cancelled}`}
            >
              Отменено
            </button>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_done}`}
            >
              Завершено
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
