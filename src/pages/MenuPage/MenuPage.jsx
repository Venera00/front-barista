import React from "react";
import SidebarMain from "../../components/sideBar/sidebarMain";
import images from "../../assets/images";
import styles from "./MenuPage.module.scss";

const MenuPage = () => {
  return (
    <div>
      <SidebarMain />

      <header>
        <h3>Меню</h3>
        <div>
          <img src={images.searchIcon} alt="Search" />
          <input type="text" />
        </div>

        <img src={images.bellIcon} alt="Notifications" />
      </header>

      <section>
        <div className={styles.menutype}>
          <button className={styles.menutype__btn}>Кофе</button>
          <button className={styles.menutype__btn}>Выпечка</button>
          <button className={styles.menutype__btn}>Десерты</button>
          <button className={styles.menutype__btn}>Напитки</button>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
