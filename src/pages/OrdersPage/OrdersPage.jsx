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

      <div className={styles.ordersContainer}>
        <div className={styles.orderTypeWrapper}>
          <h3>Заказы</h3>
          <button>На вынос</button>
          <button>В заведении</button>
        </div>

        <div className={styles.orderCardsWrapper}>
          <button>Новые</button>
          <button>В процессе</button>
          <button>Готово</button>
          <button>Отменено</button>
          <button>Завершено</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
