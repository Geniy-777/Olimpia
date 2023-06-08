import React from "react";
import { Layout as AntLayput } from "antd";
import styles from "./index.module.css";
import { Header } from "../header";
import { Footer } from "../footer";
import mainBackground from "../../assets/MainBackground.png";

type Props = {
  children: React.ReactNode;
  isVisible?: boolean;
  title?: string;
  description?: string;
};

export const Layout: React.FC<Props> = ({
  children,
  isVisible = false,
  title,
  description,
}) => {
  return (
    <div className={styles.main}>
      <Header />
      {isVisible && (
        <>
          
          <div className={styles.mainInfoBoard}>
          <img
            className={styles.mainBackgroundImg}
            src={mainBackground}
            alt=""
          />
            <h1 className={styles.mainBoardTitle}>ОЛИМПИЯ</h1>
            <h2 className={styles.mainBoardSubtitle}>{title}</h2>
            <p className={styles.mainBoardText}>{description}</p>
            <button className={[styles.button,styles.buttonAbout].join(' ')}>Подробнее</button>
          </div>
        </>
      )}

      <AntLayput.Content style={{ minHeight: "80vh" }}>
        {children}
      </AntLayput.Content>
      <Footer />
    </div>
  );
};
