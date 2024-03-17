import React, { useState } from "react";
import SidebarMain from "../../components/sideBar/SideBarMain";
import MenuCard from "../../components/menuCard/MenuCard";
import Modal from "../../components/Modal/Modal";
import classNames from "classnames";
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
  const [modalActive, setModalActive] = useState(true);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const newMenuItem = [
    {
      id: 1,
      img: images.coffee,
      title: "Капучино",
      price: "140 c",
    },
    {
      id: 2,
      img: images.coffee,
      title: "Капучино",
      price: "140 c",
    },

    {
      id: 3,
      img: images.coffee,
      title: "Капучино",
      price: "140 c",
    },
    {
      id: 4,
      img: images.coffee,
      title: "Капучино",
      price: "140 c",
    },
    {
      id: 5,
      img: images.coffee,
      title: "Капучино",
      price: "140 c",
    },
  ];

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

          <div className={styles.menuItem_container}>
            {newMenuItem.map((menuItem) => (
              <MenuCard
                key={menuItem.id}
                menuItem={menuItem}
                onClick={() => setModalActive(true)}
              />
            ))}
          </div>

          <div className={styles.orderCheck}>
            <p className={styles.orderCheck__type}>Заказ на вынос</p>
            <p className={styles.orderCheck__price}>0 сом</p>
          </div>
        </section>
      </div>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        className={styles.additivesModal}
      >
        <div className={styles.additivesModal}>
          <div className={styles.additivesModal_header}>
            <h3>Выберите опции</h3>
            <img
              src={images.closeIcon}
              className={styles.logoutModal_close}
              alt="Logout"
              onClick={() => setModalActive(false)}
            />
          </div>

          <p className={styles.additives_title}>Молоко</p>
          <div className={styles.additives_wrapper}>
            <div className={styles.additives}>
              <label className={styles.additives_radioBtn}>
                <input type="radio" name="additive" />
                <span className={styles.checkmark}></span>
              </label>

              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>коровье</p>
                <p className={styles.additives_price}>+0 c</p>
              </div>
              {/* <hr className={styles.additives__line} /> */}
            </div>
            <div className={styles.additives}>
              <label className={styles.additives_radioBtn}>
                <input type="radio" name="additive" />
                <span className={styles.checkmark}></span>
              </label>

              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>овсяное</p>
                <p className={styles.additives_price}>+0 c</p>
              </div>
              {/* <hr className={styles.additives__line} /> */}
            </div>
            <div className={styles.additives}>
              <label className={styles.additives_radioBtn}>
                <input type="radio" name="additive" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>соевое</p>
                <p className={styles.additives_price}>+0 c</p>
              </div>
              {/* <hr className={styles.additives__line} /> */}
            </div>
          </div>

          <p
            className={classNames(
              styles.additives_title,
              styles.additives_sirop
            )}
          >
            Сиропы
          </p>
          <div className={styles.additives_wrapper}>
            <div className={styles.additives}>
              <input type="checkbox" />
              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>Клубничный</p>
                <p className={styles.additives_price}>+30 c</p>
              </div>
            </div>
            <div className={styles.additives}>
              <input type="checkbox" />
              <div className={styles.additives_line}>
                <p className={styles.additives_ingredient}>Карамельный</p>
                <p className={styles.additives_price}>+50 c</p>
              </div>
            </div>
          </div>

          <div className={styles.additives_footer}>
            <div className={styles.counter}>
              <button
                onClick={handleRemoveItem}
                className={styles.counter__remove}
              >
                -
              </button>
              <p className={styles.counter__title}>{quantity}</p>
              <button onClick={handleAddItem} className={styles.counter__add}>
                +
              </button>
            </div>

            <button className={styles.footer_addBtn}>Добавить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MenuPage;
