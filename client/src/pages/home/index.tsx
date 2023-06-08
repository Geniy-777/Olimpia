import { Layout } from "../../components/layout";
import styles from "./index.module.css";
import newsImage from "../../assets/newsImage.png";

export const Home = () => {
  return (
    <Layout
      isVisible={true}
      title="Медико-восстановительный центр"
      description={`Медико-восстановительный центр "Олимпия" в Симферополе - это место, где людям возвращают надежду и помогают восстановить здоровье. Сочетание богатого практического опыта с внедрением передовых методик позволяет обеспечить пациентам врачебную помощь высокого уровня. `}
    >
      <div className={styles.blockNews}>
        <div className={styles.mainNew}>
          <div className={styles.mainNewDescription}>
            <p className={styles.mainNewDescription__title}>
              Витамин D, нужен?
            </p>
            <p className={styles.mainNewDescription__text}>
              Сегодня поговорим о важносте витамина D, почему стоит чаще
              находится на солнце и...
            </p>
            <button
              className={
                styles.mainNewDescription__button + " " + styles.button
              }
            >
              Подробнее
            </button>
          </div>
          <div className={styles.mainNewImg}>
            <img src={newsImage} alt="Image news" />
            <div className={styles.bgImgBlur}></div>
          </div>
        </div>

        <div className={styles.otherNews}>
          <div className={styles.otherNews__title}>
            <a href="#" className={styles.otherNewsTitle__text}>
              Новости в мире медицины
            </a>
          </div>
          <div className={styles.otherNews__container}>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                Двенадцать объектов скорой помощи отремонтируют в подмосковье...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                Солнце, вода, лес и живность: от чего и как защищать детей.
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
            <div className={styles.otherNews__Item}>
              <a href="#" className={styles.otherNewsItem__text}>
                В РФ разработали способ определения эффективности противораковой
                терап...
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
