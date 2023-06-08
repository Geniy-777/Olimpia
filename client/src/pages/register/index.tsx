import { Layout } from "../../components/layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/customInput";
import { PasswordInput } from "../../components/passwordInput";
import { CustomButton } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { Path } from "../../pathes";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useState } from "react";
import { useRegisterMutation } from "../../app/services/auth";
import { User } from "@prisma/client";
import { ErrorMessage } from "../../components/errorMessage";
import { isErrorWithMessage } from "../../utilis/is-error-with-message";

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState("");
  const [registerUser] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap;

      navigate("/");
    } catch (error) {
      const isCustomError = isErrorWithMessage(error);
      if (isCustomError) {
        setError(error.data.message);
      } else {
        console.error(error);
        setError("Что-то помешало авторизации");
      }
    }
  };

  return (
    <Layout
    >
      <Row align="middle" justify="center">
        <Card
          title="Зарегистрируйтесь"
          style={{ width: "30rem", backgroundColor: "cyan-6" }}
        >
          <Form onFinish={register}>
            <CustomInput type="text" name="name" placeholder="Имя" />
            <CustomInput type="phone" name="phone" placeholder="Телефон" />
            <CustomInput type="email" name="email" placeholder="E-mail" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Подтвердите пароль"
            />
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Есть аккаунт? <Link to={Path.login}>Войти</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
