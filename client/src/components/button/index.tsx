import { Button, Form } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
  classes?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const CustomButton = ({
  children,
  classes,
  htmlType = "button",
  type, 
  danger,
  loading,
  shape,
  icon,
  onClick
}: Props) => {
  return (
    <Form.Item>
      <Button
        className={classes}
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
