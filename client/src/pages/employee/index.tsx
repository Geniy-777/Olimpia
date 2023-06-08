import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from "../../app/services/employees";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Layout } from "../../components/layout";
import { Descriptions, Divider, Modal, Space } from "antd";
import { CustomButton } from "../../components/button";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ErrorMessage } from "../../components/errorMessage";
import { Path } from "../../pathes";
import { isErrorWithMessage } from "../../utilis/is-error-with-message";

export const Employee = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const params = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [removeEmployee] = useRemoveEmployeeMutation();
  const user = useSelector(selectUser);

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  if (!data) {
    return <Navigate to="/" />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = async () => {
    hideModal();

    try {
      await removeEmployee(data.id).unwrap;

      navigate(`${Path.status}/deleted`);
    } catch (error) {
      const maybeError = isErrorWithMessage(error);
      if (maybeError) setError(error.data.message);
      else setError("Неизвестная ошибка");
    }
  };

  return (
    <Layout
    isVisible={false}
    >
      <Descriptions title="Информация о сотруднике" bordered>
        <Descriptions.Item label="Имя" span={3}>
          {`${data.fistrname} ${data.lastname}`}
        </Descriptions.Item>
        <Descriptions.Item label="Возраст" span={3}>
          {`${data.age}`}
        </Descriptions.Item>
        <Descriptions.Item label="Образование" span={3}>
          {`${data.education}`}
        </Descriptions.Item>
        <Descriptions.Item label="Описание" span={3}>
          {`${data.description}`}
        </Descriptions.Item>
      </Descriptions>
      {user?.isAdmin && (
        <>
          <Divider orientation="left">Действие</Divider>
          <Space>
            <Link to={`/employee/edit/${data.id}`}>
              <CustomButton
                shape="round"
                type="default"
                icon={<EditOutlined />}
              >
                Редактировать
              </CustomButton>
            </Link>
            <CustomButton
              shape="round"
              danger
              onClick={showModal}
              icon={<DeleteOutlined />}
            >
              Удалить
            </CustomButton>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title="Подтвердите удаление"
        open={isModalOpen}
        onOk={handleDeleteUser}
        onCancel={hideModal}
        okText="Подтвердить"
        cancelText="Отменить"
      >
        Вы действительно хотите удалить сотрудника?
      </Modal>
    </Layout>
  );
};
