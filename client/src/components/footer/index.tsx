import styles from "./index.module.css";
import VK from '../../assets/socials/VK.svg'
import OK from '../../assets/socials/OK.svg'
import Insta from '../../assets/socials/Insta.svg'
import Viber from '../../assets/socials/Viber.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footer__mainContainer}>
          <div
            className={[
              styles.footerMainContainer__item,
              styles.footerAbout,
            ].join(" ")}
          >
            <a href="/about" className={styles.footerMainContainerItem__title}>
              О центре
            </a>
            <div
              className={[
                styles.footerMainContainerItem_description,
                styles.footerMainContainer__description,
              ].join(" ")}
            >
              <p className="">Что то о нашем центре в 2 словах</p>
              <p className="">Что то о нашем центре в 2 словах</p>
              <p className="">Что то о нашем центре в 2 словах</p>
            </div>
          </div>
          <div
            className={[
              styles.footerMainContainer__item,
              styles.footerServices,
            ].join(" ")}
          >
            <a href="/about" className={styles.footerMainContainerItem__title}>
              Услуги
            </a>
            <div
              className={[
                styles.footerMainContainerItem_description,
                styles.footerMainContainer__description,
              ].join(" ")}
            >
              <p className="">Услуга какая-то</p>
              <p className="">Услуга какая-то</p>
              <p className="">Услуга какая-то</p>
            </div>
          </div>
          <div
            className={[
              styles.footerMainContainer__item,
              styles.footerContacts,
            ].join(" ")}
          >
            <a href="/about" className={styles.footerMainContainerItem__title}>
              Контакты
            </a>
            <div
              className={[
                styles.footerMainContainerItem_description,
                styles.footerMainContainer__description,
              ].join(" ")}
            >
              <p className="">+7(978)712-32-45</p>
              <p className="">+7(978)712-32-45</p>
              <p className="">ул.Проспект Победы 13 каб 613 бла бла</p>
            </div>
          </div>
          <div
            className={[
              styles.footerMainContainer__item,
              styles.footerActivities,
            ].join(" ")}
          >
            <button
              className={[styles.button, styles.footerButtonAppointment].join(
                " "
              )}
            >
              ЗАПИСЬ НА ПРИЁМ
            </button>
            <button
              className={[styles.button, styles.footerButtonComment].join(" ")}
            >
              ОСТАВИТЬ ОТЗЫВ
            </button>
            <button
              className={[styles.button, styles.footerButtonDrive].join(" ")}
            >
              КАК ПРОЕХАТЬ ?
            </button>
          </div>
        </div>
        <div className={styles.footer__additionalContainer}>
          <div className="">
            <p className="footer-additional-container-item__text">
              Copyright@ Олимпия 2022
            </p>
          </div>
          <div className="">
            <a href="#" className="footer-additional-container-item__text">
              Политика конфиденциальности
            </a>
          </div>
          <div className="">
            <button
              className={[styles.button, styles.buttonForBlind].join(" ")}
            >
              ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ
            </button>
          </div>
          <div className={styles.footerAdditionalContainer__item}>
            <div className={styles.footerSocial}>
              <div className="footer-socials__item VK">
                <img className={styles.footerSocialImg} src={VK} alt="VK" />
                <a href="#" className={styles.footerSocialLink}></a>
              </div>
              <div className="footer-socials__item OK">
                <img className={styles.footerSocialImg} src={OK} alt="OK" />
                <a href="#" className={styles.footerSocialLink}></a>
              </div>
              <div className="footer-socials__item Insta">
                <img className={styles.footerSocialImg} src={Insta} alt="Instagram" />
                <a href="#" className={styles.footerSocialLink}></a>
              </div>
              <div className="footer-socials__item Viber">
                <img className={styles.footerSocialImg} src={Viber} alt="Viber" />
                <a href="#" className={styles.footerSocialLink}></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
