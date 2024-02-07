import React from "react";
import styles from "./OrdersPage.module.scss";

const OrdersPage = () => {
  return (
    <div className={styles.orders}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarItems}>
          <div className={styles.sidebarItemWrapper}>
            <p>Заказы</p>
          </div>
          <div className={styles.sidebarItemWrapper}>
            <p>Меню</p>
          </div>
          <div className={styles.sidebarItemWrapper}>
            <p>Профиль</p>
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
