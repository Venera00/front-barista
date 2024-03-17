import React, { useState, useEffect } from "react";
import SidebarMain from "../../components/sideBar/SideBarMain";
// import SidebarMain from "../../components/SideBar/SideBarMain";
import images from "../../assets/images";
import classNames from "classnames";
import Calendar from "react-calendar";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const [selectedBtn, setSelectedBtn] = useState("profile");
  const [showSchedule, setShowSchedule] = useState(false);

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    const mockEmployeeData = {
      firstName: "Алихандро",
      lastName: "Бутовски",
      phoneNumber: "555 555 555",
      dateOfBirth: "14.03.1998",
    };

    setEmployee(mockEmployeeData);
  }, []);

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

      <div className={styles.profile_content}>
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
            <form className={styles.about_wrapper}>
              <h3>Личные данные</h3>
              <div className={styles.aboutContent_wrapper}>
                <div>
                  <label htmlFor="">Имя</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={styles.about__input}
                    value={employee.firstName}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Фамилия</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={styles.about__input}
                    value={employee.lastName}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="">Номер телефона</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={styles.about__input}
                    value={employee.phoneNumber}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="dateOfBirth">Дата рождения</label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className={styles.about__input}
                    value={employee.dateOfBirth}
                    readOnly
                  />
                </div>
              </div>
            </form>
          </section>
        )}

        {showSchedule && (
          <section className={styles.schedule}>
            <div className={styles.schedule_wrapper}>
              <div className={styles.schedule_titles}>
                <div className={styles.titles_wrapper}>
                  <span
                    className={classNames(
                      styles.schedule_status,
                      styles.weekday
                    )}
                  ></span>
                  <p>Рабочий день</p>
                </div>
                <div className={classNames(styles.titles_wrapper)}>
                  <span
                    className={classNames(
                      styles.schedule_status,
                      styles.weekend
                    )}
                  ></span>
                  <p>Выходной</p>
                </div>
              </div>

              <Calendar className={styles.schedule_calendar} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
