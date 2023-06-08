import { Form, Input } from "antd";
import React, { CSSProperties } from "react";

type Props = {
  name: string;
  style?: CSSProperties | undefined;
  placeholder?: string;
  type?: string;
};

export const CustomInput = ({ name, style, placeholder, type }: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
