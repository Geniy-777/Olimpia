import { PlusCircleOutlined } from "@ant-design/icons";
import { CustomButton } from "../../components/button";
import { Layout } from "../../components/layout";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import { ColumnsType } from "antd/es/table";
import { Employee } from "@prisma/client";
import { useNavigate } from "react-router-dom";
import { Path } from "../../pathes";

const columns: ColumnsType<Employee> = [
  {
    title: "Имя",
    dataIndex: "fistrname",
    key: "fistrname",
  },
  {
    title: "Возраст",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Образование",
    dataIndex: "education",
    key: "education",
  },
];

export const Employees = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllEmployeesQuery();
  return (
    <Layout>
      {/* <CustomButton
        type="primary"
        onClick={() => null}
        icon={<PlusCircleOutlined />}
      >
        Добавить
      </CustomButton> */}
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Path.employee}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};

