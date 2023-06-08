import { Layout, Space, Typography, Button } from "antd";
import { TeamOutlined, LoginOutlined } from "@ant-design/icons";
import { CustomButton } from "../button";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { Path } from "../../pathes";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.headerLinks}>
        <Link to={Path.home}>
          {/* <TeamOutlined className={styles.teamIcon} /> */}
          <span>Олимпия</span>
        </Link>
      </div>
      <div className={styles.headerLinks}>
        <Link to={Path.home}>
          <CustomButton type="ghost">Главная</CustomButton>
        </Link>
        <Link to={Path.services}>
          <CustomButton type="ghost">Услуги</CustomButton>
        </Link>
        <Link to={Path.employees}>
          <CustomButton type="ghost">Наши специалисты</CustomButton>
        </Link>
        <Link to={Path.articles}>
          <CustomButton type="ghost">Наши статьи</CustomButton>
        </Link>
        <Link to={Path.about}>
          <CustomButton type="ghost">О нас</CustomButton>
        </Link>
      </div>
      <div className={styles.headerLinks}>
        <Link to={"#"}>
          <CustomButton classes={styles.headerFormButton} type="default">
            Записаться на приём
          </CustomButton>
        </Link>
        {user ? (
          <Link to={'#'}>
            <CustomButton
              type="ghost"  
              icon={<LoginOutlined />}
              onClick={onLogoutClick}
            >
              Выйти
            </CustomButton>
          </Link>
        ) : (
          <Link to={Path.login}>
            <CustomButton type="ghost" icon={<LoginOutlined />}>
              Войти
            </CustomButton>
          </Link>
        )}
      </div>
    </Layout.Header>
  );
};
