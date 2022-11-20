import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointemt from "../../Pages/Appointment/Appointemt";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Resister from "../../Pages/Resister/Resister";
import AdminRouter from "../AdminRouter/AdminRouter";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/appointment",
        element: (
          <PrivetRouter>
            <Appointemt />
          </PrivetRouter>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <DashBoardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/myappointment",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRouter>
            <AllUser />
          </AdminRouter>
        ),
      },
    ],
  },
]);
export default router;
