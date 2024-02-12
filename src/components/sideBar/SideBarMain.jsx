import React from "react";
import images from "../../assets/images";
import styles from "./SideBarMain.module.scss";

const SidebarMain = () => {
  return (
    <div>
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
    </div>
  );
};

export default SidebarMain;
