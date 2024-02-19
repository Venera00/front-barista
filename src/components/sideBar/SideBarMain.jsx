import React, { useState } from "react";
import images from "../../assets/images";
import styles from "./SideBarMain.module.scss";
import { NavLink } from "react-router-dom";

const SidebarMain = () => {
  const [active, setActive] = useState("/orders");

  const handleNavlinkClick = (link) => {
    setActive(link);
  };
  return (
    <div>
      <div className={styles.sidebar}>
        <img
          src={images.neocafeMainIcon}
          alt="Neocafe Icon"
          className={styles.main_icon}
        />
        <div className={styles.sidebar_items}>
          <div>
            <NavLink
              // exact
              to="/orders"
              className={styles.navlink}
              activeClassName={styles.active}
              onClick={() => handleNavlinkClick("/orders")}
            >
              <img src={images.ordersIcon} alt="Orders Icon" />
              <p>Заказы</p>
            </NavLink>
            <NavLink
              to="/menu"
              className={styles.navlink}
              activeClassName={styles.active}
              onClick={() => handleNavlinkClick("/menu")}
            >
              <img src={images.menuIcon} alt="Menu Icon" />
              <p>Меню</p>
            </NavLink>
            <NavLink
              to="/profile"
              className={styles.navlink}
              activeClassName={styles.active}
              onClick={() => handleNavlinkClick("/profile")}
            >
              <img src={images.profileIcon} alt="Profile Icon" />
              <p>Профиль</p>
            </NavLink>
          </div>

          <div className={`${styles.logout_wrapper} ${styles.navlink}`}>
            <img src={images.logoutIcon} alt="Logout" />
            <p>Выйти</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMain;
