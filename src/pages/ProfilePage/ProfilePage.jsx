import React, { useState } from "react";
import SidebarMain from "../../components/sideBar/sidebarMain";
import images from "../../assets/images";
import classNames from "classnames";
import Calendar from "react-calendar";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const [selectedBtn, setSelectedBtn] = useState("profile");
  const [showSchedule, setShowSchedule] = useState(false);

  const handleBtnSelection = (info) => {
    setSelectedBtn(info);
    console.log(info);

    if (info === "schedule") {
      setShowSchedule(true);
    } else {
      setShowSchedule(false);
    }
  };

  return (
    <div className={styles.profile_container}>
      <SidebarMain />

      <div>
        <header className={styles.header}>
          <h3 className={styles.header_title}>Профиль</h3>
          <div className={styles.btn}>
            <button
              className={classNames(styles.btn_profile, {
                [styles.selectedBtn]: selectedBtn === "profile",
              })}
              onClick={() => handleBtnSelection("profile")}
            >
              Профиль
            </button>
            <button
              className={classNames(styles.btn_schedule, {
                [styles.selectedBtn]: selectedBtn === "schedule",
              })}
              onClick={() => handleBtnSelection("schedule")}
            >
              График работы
            </button>
          </div>
          <img
            src={images.bellIcon}
            alt="The notifications"
            className={styles.notifications_icon}
          />
        </header>

        {selectedBtn === "schedule" ? null : (
          <section className={styles.about}>
            <div className={styles.about_wrapper}>
              <h3>Личные данные</h3>
              <div>
                <label htmlFor="">Имя</label>
                <div>Алихандро</div>
                <div>555 555 555</div>
                <div>Фамилия</div>
                <div>14.03.1998</div>
              </div>
            </div>
          </section>
        )}

        {showSchedule && (
          <section className={styles.schedule}>
            <div className={styles.schedule_wrapper}>
              <p>Рабочий день</p>
              <p>Выходной</p>
              <Calendar className={styles.schedule_calendar} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
