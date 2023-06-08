import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { Path } from "./pathes";
import { Login } from "./pages/login/indes";
import { Register } from "./pages/register";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import { Home } from "./pages/home";
import { Auth } from "./features/auth/auth";
import { Employees } from "./pages/employees";
import { Employee } from "./pages/employee";
import { Status } from "./pages/status/inedx";
import { AddEmployee } from "./pages/addEmployee";
import { EditEmployee } from "./pages/editEmployee";
import { PageNotFound } from "./pages/404";

const router = createBrowserRouter([
  {
    path: Path.home,
    element: <Home />,
  },
  {
    path: Path.login,
    element: <Login />,
  },
  {
    path: Path.register,
    element: <Register />,
  },
  {
    path: `${Path.status}/:status`,
    element: <Status />,
  },
  {
    path: Path.employees,
    element: <Employees />,
  },
  {
    path: `${Path.employee}/:id`,
    element: <Employee />,
  },
  {
    path: Path.employeeAdd,
    element: <AddEmployee />,
  },
  {
    path: `${Path.employeeEdit}/:id`,
    element: <EditEmployee />,
  },
  {
    path: `*`,
    element: <PageNotFound />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
