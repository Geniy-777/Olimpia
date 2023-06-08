import { useState } from "react";
import { Layout } from "../../components/layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/customInput";
import { PasswordInput } from "../../components/passwordInput";
import { CustomButton } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { Path } from "../../pathes";
import { UserData, useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utilis/is-error-with-message";
import { ErrorMessage } from "../../components/errorMessage";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate("/");
    } catch (err) {
      const isCustomError = isErrorWithMessage(err);

      if (isCustomError) {
        setError(err.data.message);
      } else {
        console.error(err);
        setError("Что-то помешало авторизации");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card
          title="Войдите"
          style={{ width: "30rem" }}
        >
          <Form onFinish={login}>
            <CustomInput style={{background: "#04513F"}} type="email" name="email" placeholder="E-mail" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Path.register}>Зарегистрироваться</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
