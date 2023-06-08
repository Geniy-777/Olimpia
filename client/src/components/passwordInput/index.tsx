import { Form, Input } from "antd";
import { NamePath } from "antd/es/form/interface";

type Props = {
  name: string;
  placeholder?: string;
  dependecies?: NamePath[];
};

export const PasswordInput = ({ name, placeholder, dependecies }: Props) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependecies}
      hasFeedback
      rules={[
        { required: true, message: "Обязательное поле" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }
            if (name === "confirmPassword") {
              if (!value || getFieldValue("password") === value)
                return Promise.resolve();

              return Promise.reject(new Error("Пароли должны совпадать"));
            } else {
              if (value.length < 4 || value.length > 16) {
                return Promise.reject(
                  new Error(
                    "Пароль должен быть не менее 4 и не более 16 символов"
                  )
                );
              }

              return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};
