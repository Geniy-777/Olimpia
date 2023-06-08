import { Employee } from "@prisma/client";
import { Card, Form, Row, Space } from "antd";
import { CustomInput } from "../customInput";
import { ErrorMessage } from "../errorMessage";
import { CustomButton } from "../button";
import TextArea from "antd/es/input/TextArea";

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

export const EmployeeForm = ({
  onFinish,
  btnText,
  title,
  error,
  employee,
}: Props<Employee>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form
        name="add-employee-form"
        onFinish={onFinish}
        initialValues={employee}
      >
        <CustomInput type="text" name="fistrname" placeholder="Имя" />
        <CustomInput type="text" name="lastname" placeholder="Фамилия" />
        <CustomInput type="number" name="age" placeholder="Возраст" />
        <CustomInput type="text" name="education" placeholder="Образование" />
        <TextArea style={{minHeight:"150px", marginBottom:"24px"}} name="description" placeholder="Описание" />
        <Space>
          <Row>
            <ErrorMessage message={error} />
            <CustomButton htmlType="submit">{btnText}</CustomButton>
          </Row>
        </Space>
      </Form>
    </Card>
  );
};
