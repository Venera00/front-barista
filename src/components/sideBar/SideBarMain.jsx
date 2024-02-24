import React, { useState } from "react";
import images from "../../assets/images";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import Modal from "../Modal/Modal";
import styles from "./SideBarMain.module.scss";

const SidebarMain = () => {
  // const [active, setActive] = useState("/orders");

  // const handleNavlinkClick = (link) => {
  //   setActive(link);
  // };

  const [modalActive, setModalActive] = useState(false);

  const navigate = useNavigate();

  return (
    <Layout className={styles.sidebar}>
      <img
        src={images.neocafeMainIcon}
        alt="Neocafe Icon"
        className={styles.main_icon}
      />

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

      <Menu
        onClick={({ key }) => {
          if (key === "logout") {
            // TODO: show logout modal
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        className={styles.sidebar_items}
      >
        <Menu.Item
          key="/orders"
          icon={<img src={images.ordersIcon} alt="Orders Icon" />}
          className={styles.navlink}
        >
          Заказы
        </Menu.Item>
        <Menu.Item
          key="/menu"
          icon={<img src={images.menuIcon} alt="Menu Icon" />}
          className={styles.navlink}
        >
          Меню
        </Menu.Item>
        <Menu.Item
          key="/profile"
          icon={<img src={images.profileIcon} alt="Profile Icon" />}
          className={styles.navlink}
        >
          Профиль
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<img src={images.logoutIcon} alt="Logout" />}
          onClick={() => setModalActive(true)}
        >
          Выйти
        </Menu.Item>
      </Menu>

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
    </Layout>
  );
};

export default SidebarMain;
