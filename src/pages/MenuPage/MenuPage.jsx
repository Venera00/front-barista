import React, { useState } from "react";
import SidebarMain from "../../components/sideBar/sidebarMain";
import MenuCard from "../../components/menuCard/MenuCard";
import images from "../../assets/images";
// import { ReactComponent as CoffeeBobs } from "../../assets/coffeeBobs.svg";
// import { ReactComponent as Bakery } from "../../assets/bakery.svg";
// import { ReactComponent as Dessert } from "../../assets/dessert.svg";
// import { ReactComponent as Cocktail } from "../../assets/cocktail.svg";

// import { ReactComponent as CoffeeBobs } from "../../assets/images";
// import { ReactComponent as Bakery } from "../../assets/images";
// import { ReactComponent as Dessert } from "../../assets/images";
// import { ReactComponent as Cocktail } from "../../assets/images";
import styles from "./MenuPage.module.scss";

const MenuPage = () => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearchInput = (e) => {
    setInputSearch(e.target.value);

    console.log(inputSearch);
  };

  const fetchData = (value) => {
    // axios......
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className={styles.menuContainer}>
      <SidebarMain />

      <div className={styles.menu}>
        <header className={styles.menu__header}>
          <h3>Меню</h3>
          <div className={styles.search_wrapper}>
            <img
              src={images.searchIcon}
              alt="Search"
              className={styles.search__icon}
            />
            <input
              type="text"
              placeholder="Поиск"
              className={styles.search__input}
              value={inputSearch}
              onChange={handleSearchInput}
              onKeyUp={handleEnter}
            />
          </div>

          <img
            src={images.bellIcon}
            alt="Notifications"
            className={styles.notifications}
          />
        </header>

        <section className={styles.menu_container}>
          <div className={styles.menutype}>
            <button
              className={`${styles.menutype__btn} ${styles.menutype__coffee}`}
            >
              {/* <CoffeeBobs className={styles.menutype__logo} /> */}
              <img src={images.CoffeeBobs} alt="Coffee icon" />
              Кофе
            </button>
            <button
              className={`${styles.menutype__btn} ${styles.menutype__bakery}`}
            >
              {/* <Bakery /> */}
              <img src={images.Bakery} alt="Bakery icon" />
              Выпечка
            </button>
            <button
              className={`${styles.menutype__btn} ${styles.menutype__dessert}`}
            >
              {/* <Dessert /> */}
              <img src={images.Dessert} alt="Dessert icon" />
              Десерты
            </button>
            <button
              className={`${styles.menutype__btn} ${styles.menutype__drinkables}`}
            >
              {/* <Cocktail /> */}
              <img src={images.Cocktail} alt="Cocktai icon" />
              Напитки
            </button>
          </div>

          <MenuCard />
        </section>
      </div>
    </div>
  );
};

export default MenuPage;
