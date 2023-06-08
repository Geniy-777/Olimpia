import { useNavigate, useParams } from "react-router-dom";
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../../app/services/employees";
import { useState } from "react";
import { Layout } from "../../components/layout";
import { Row } from "antd";
import { EmployeeForm } from "../../components/employeeForm";
import { Employee } from "@prisma/client";
import { Path } from "../../pathes";
import { isErrorWithMessage } from "../../utilis/is-error-with-message";

export const EditEmployee = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [editEmployee] = useEditEmployeeMutation();

  if (isLoading) {
    return <span>Загузка</span>;
  }

  const handleEdituser = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };

      await editEmployee(editedEmployee).unwrap();
      navigate(`${Path.status}/updated`);
    } catch (error) {
      const maybeError = isErrorWithMessage(error);
      if (maybeError) setError(error.data.message);
      else setError("Неизвестная ошибка");
    }
  };

  return (
    <Layout
    isVisible={true}
    title="НАШИ СПЕЦИАЛИСТЫ"
    description=""
    >
      <Row align={"middle"} justify={"center"}>
        <EmployeeForm
          title="Редактирование сотрудника"
          btnText="Отредактировать"
          error={error}
          employee={data}
          onFinish={handleEdituser}
        />
      </Row>
    </Layout>
  );
};
