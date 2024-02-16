import React from "react";
import SidebarMain from "../../components/sideBar/sidebarMain";
import images from "../../assets/images";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.profile_container}>
      <SidebarMain />

      <header>
        <div className={styles.ordertype_wrapper}>
          <h3 className={styles.orders_title}>Заказы</h3>
          <button>Профиль</button>
          <button>График работы</button>
          <img
            src={images.bellIcon}
            alt="The notifications"
            className={styles.notifications_icon}
          />
        </div>
      </header>

      <section></section>
    </div>
  );
};

export default ProfilePage;
