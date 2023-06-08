import { Row } from "antd";
import { Layout } from "../../components/layout";
import { EmployeeForm } from "../../components/employeeForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useAddEmployeeMutation } from "../../app/services/employees";
import { Employee } from "@prisma/client";
import { Path } from "../../pathes";
import { isErrorWithMessage } from "../../utilis/is-error-with-message";

export const AddEmployee = () => {
  const [ error, setError ] = useState('')
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [addEmployee] = useAddEmployeeMutation()

  useEffect(()=>{
    if(!user?.isAdmin){
      navigate('/')
    }
  }, [navigate, user])

  const handleAddEmployee = async (data: Employee) => {
    try {
      await addEmployee(data).unwrap()

      navigate(`${Path.status}/created`)
    } catch (error) {
      const maybeError = isErrorWithMessage(error)
      if(maybeError){
        setError(error.data.message)
      }
      else{
        setError('Неизвестная ошибка')
      }
    }
  }

  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <EmployeeForm
          title="Добавить сотрудника"
          btnText="Добавить"
          onFinish={handleAddEmployee}
          error={error}
        />
      </Row>
    </Layout>
  );
};
