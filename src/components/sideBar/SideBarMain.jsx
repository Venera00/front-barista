import React, { useState } from "react";
import images from "../../assets/images";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import Modal from "../Modal/Modal";
import styles from "./SideBarMain.module.scss";

const SidebarMain = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("/orders");
  const [modalActive, setModalActive] = useState(false);

  const handleNavlinkClick = (key) => {
    setActiveMenuItem(key);
    console.log("Clicked", key);
  };

  const navigate = useNavigate();

  const menuItem = {
    width: "15.7rem",
    height: "4.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "1.8rem",
    fontWeight: "500",
    borderRadius: "1.2rem",
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "var(--COLOR-MAIN)",
  };

  return (
    <div className={styles.sidebar}>
      <Menu
        onClick={({ key }) => {
          if (key === "logout") {
            // TODO: show logout modal
          } else {
            handleNavlinkClick(key);
            navigate(key);
          }
        }}
        defaultSelectedKeys={[activeMenuItem]}
        className={styles.sidebar_items}
      >
        <img
          src={images.neocafeMainIcon}
          alt="Neocafe Icon"
          className={styles.main_icon}
        />
        <Menu.Item
          key="/orders"
          icon={<img src={images.ordersIcon} alt="Orders Icon" />}
          onClick={() => handleNavlinkClick("/orders")}
          // className={styles.menuItem}
          style={{
            ...menuItem,
            backgroundColor:
              activeMenuItem === "/orders"
                ? "var(--COLOR-PRIMARY)"
                : "var(--COLOR-MAIN)",
          }}
        >
          Заказы
        </Menu.Item>
        <Menu.Item
          key="/menu"
          icon={<img src={images.menuIcon} alt="Menu Icon" />}
          onClick={() => handleNavlinkClick("/menu")}
          // className={styles.menuItem}
          style={{
            ...menuItem,
            backgroundColor:
              activeMenuItem === "/menu"
                ? "var(--COLOR-PRIMARY)"
                : "var(--COLOR-MAIN)",
          }}
        >
          Меню
        </Menu.Item>
        <Menu.Item
          key="/profile"
          icon={<img src={images.profileIcon} alt="Profile Icon" />}
          onClick={() => handleNavlinkClick("/profile")}
          // className={styles.menuItem}
          style={{
            ...menuItem,
            backgroundColor:
              activeMenuItem === "/profile"
                ? "var(--COLOR-PRIMARY)"
                : "var(--COLOR-MAIN)",
          }}
        >
          Профиль
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<img src={images.logoutIcon} alt="Logout" />}
          onClick={() => setModalActive(true)}
          className={styles.logout}
          style={{
            ...menuItem,
            backgroundColor:
              activeMenuItem === "logout"
                ? "var(--COLOR-PRIMARY)"
                : "var(--COLOR-MAIN)",
          }}
        >
          Выйти
        </Menu.Item>
      </Menu>

      {/* <div>
        <NavLink
          exact
          to="/orders"
          className={classNames(styles.navlink, {
            [styles.active]: active === "/orders",
          })}
          // activeClassName={styles.active}
          onClick={() => handleNavlinkClick("/orders")}
        >
          <img src={images.ordersIcon} alt="Orders Icon" />
          <p>Заказы</p>
        </NavLink>
        <NavLink
          to="/menu"
          className={classNames(styles.navlink, {
            [styles.active]: active === "/menu",
          })}
          // activeClassName={styles.active}
          onClick={() => handleNavlinkClick("/menu")}
        >
          <img src={images.menuIcon} alt="Menu Icon" />
          <p>Меню</p>
        </NavLink>
        <NavLink
          to="/profile"
          className={classNames(styles.navlink, {
            [styles.active]: active === "/profile",
          })}
          // activeClassName={styles.active}
          onClick={() => handleNavlinkClick("/profile")}
        >
          <img src={images.profileIcon} alt="Profile Icon" />
          <p>Профиль</p>
        </NavLink>
      </div> */}

      {/* <Menu
        onClick={({ key }) => {
          if (key === "logout") {
            // TODO: show logout modal
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          {
            label: "Orders",
            key: "/orders",
            icon: <img src={images.ordersIcon} alt="Orders Icon" />,
            className: styles.navlink,
          },
          {
            label: "Меню",
            key: "/menu",
            icon: <img src={images.menuIcon} alt="Menu Icon" />,
            className: styles.navlink,
          },
          {
            label: "Профиль",
            key: "/profile",
            icon: <img src={images.profileIcon} alt="Profile Icon" />,
            className: styles.navlink,
          },
          {
            label: "Выйти",
            key: "logout",
            icon: <img src={images.logoutIcon} alt="Logout" />,
            className: styles.navlink,
          },
        ]}
        className={styles.sidebar_items}
      ></Menu> */}

      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.logout_modal}>
          <div className={styles.modalTitle_wrapper}>
            <h4 className={styles.logoutModal_title}>
              Выход из учетной записи
            </h4>
            <img
              src={images.closeIcon}
              className={styles.logoutModal_close}
              alt="Logout"
              onClick={() => setModalActive(false)}
            />
          </div>

          <p className={styles.logoutModal_subtitle}>
            Вы действительно хотите выйти из учетной записи?
          </p>

          <div className={styles.logoutModal_btns}>
            <button
              className={classNames(styles.logoutModal_btn, styles.btn__yes)}
            >
              Да
            </button>
            <button
              onClick={() => setModalActive(false)}
              className={classNames(styles.logoutModal_btn, styles.btn__no)}
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SidebarMain;
