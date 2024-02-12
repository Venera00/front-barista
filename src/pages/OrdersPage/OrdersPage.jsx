import React, { useState } from "react";
import images from "../../assets/images";
import SidebarMain from "../../components/sideBar/sidebarMain";
import NewOrderCard from "../../components/orderCard/newOrderCard";

import SidebarOrderItems from "../../components/sidebarOrderItems/SidebarOrderItems";
import styles from "./OrdersPage.module.scss";

const OrdersPage = () => {
  const [selectedOrderType, setSelectedOrderType] = useState("takeaway");
  const [showNewOrders, setShowNewOrders] = useState(true);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleOrderTypeSelection = (ordertype) => {
    setSelectedOrderType(ordertype);
  };

  const handleShowNewOrders = () => {
    setShowNewOrders(true);
  };

  const newOrders = [
    {
      id: 1,
      status: "новый",
      number: "M-47",
      waiter: "Валентина",
      first_description: "New order 1",
      second_description: "New order 1",
      third_description: "New order 1",
    },
    {
      id: 2,
      status: "новый",
      number: "M-47",
      waiter: "Валентина",
      first_description: "New order 2",
      second_description: "New order 2",
      third_description: "New order 2",
    },
  ];

  return (
    <div className={styles.orders_container}>
      {sidebar && <SidebarOrderItems />}

      <SidebarMain />

      <div className={styles.ordertype_container}>
        <div className={styles.ordertype_wrapper}>
          <h3 className={styles.orders_title}>Заказы</h3>
          <button
            className={`${styles.orderplace_btn} ${styles.takeaway_btn} ${
              selectedOrderType === "takeaway" ? styles.selectedOrderType : ""
            }`}
            onClick={() => handleOrderTypeSelection("takeaway")}
          >
            На вынос
          </button>
          <button
            className={`${styles.orderplace_btn} ${styles.inplace_btn} ${
              selectedOrderType === "inplace" ? styles.selectedOrderType : ""
            }`}
            onClick={() => handleOrderTypeSelection("inplace")}
          >
            В заведении
          </button>
          <img
            src={images.bellIcon}
            alt="The notifications"
            className={styles.notifications_icon}
          />
        </div>

        <div className={styles.orders}>
          <div className={styles.orderstatus_wrapper}>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_new} ${
                showNewOrders ? styles.selectedOrderType : ""
              }`}
              onClick={handleShowNewOrders}
            >
              <span
                className={`${styles.order_status} ${styles.status_new}`}
              ></span>
              Новые
            </button>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_inprocess}`}
            >
              <span
                className={` ${styles.order_status} ${styles.status_inprocess}`}
              ></span>
              В процессе
            </button>
            {selectedOrderType === "takeaway" ? null : (
              <button
                className={`${styles.orderstatus_btn} ${styles.orderstatus_ready}`}
              >
                <span
                  className={`${styles.order_status} ${styles.status_ready}`}
                ></span>
                Готово
              </button>
            )}

            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_cancelled}`}
            >
              <span
                className={`${styles.order_status} ${styles.status_cancelled}`}
              ></span>
              Отменено
            </button>
            <button
              className={`${styles.orderstatus_btn} ${styles.orderstatus_done}`}
            >
              <span
                className={`${styles.order_status} ${styles.status_done}`}
              ></span>
              Завершено
            </button>
          </div>

          <div className={styles.ordercard_wrapper}>
            {showNewOrders &&
              newOrders.map((order) => (
                <NewOrderCard
                  key={order.id}
                  order={order}
                  onClick={showSidebar}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
