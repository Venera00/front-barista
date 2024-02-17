import React from "react";
import SidebarMain from "../../components/sideBar/sidebarMain";
import images from "../../assets/images";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.profile_container}>
      <SidebarMain />

      <header className={styles.header}>
        <h3 className={styles.header_title}>Профиль</h3>
        <div className={styles.btn}>
          <button className={styles.btn_profile}>Профиль</button>
          <button className={styles.btn_schedule}>График работы</button>
        </div>
        <img
          src={images.bellIcon}
          alt="The notifications"
          className={styles.notifications_icon}
        />
      </header>

      <section className={styles.about}></section>
    </div>
  );
};

export default ProfilePage;
