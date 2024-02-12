import React, { useState } from "react";
import images from "../../assets/images";
import styles from "./SidebarOrderItems.module.scss";

const SidebarOrderItems = ({ order }) => {
  // const dishData = [
  //   {
  //     order_title: "Латте",
  //     order_details: ["Коровье молоко", "Карамельный сироп"],
  //     price: "140",
  //   },
  // ];

  return (
    <div className={styles.sidebar_container}>
      <h3>Заказ на вынос</h3>
      <img src={images.closeIconWhite} alt="Close" />
      <div>
        <div className={styles.orderdetails_wrapper}>
          <img src={images.coffee} alt="The order item" />
          {/* <div>
            <h3>{order.order_title}</h3>
            {dishData.order_details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div> */}

          <div>
            {/* <p>{order.price}</p> */}
            <div>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOrderItems;
