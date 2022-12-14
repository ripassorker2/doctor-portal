import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointemt from "../../Pages/Appointment/Appointemt";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import ManegeDoctor from "../../Pages/Dashboard/ManegeDoctor/ManegeDoctor";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
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
      {
        path: "/dashboard//addDoctor",
        element: (
          <AdminRouter>
            <AddDoctor />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/manegedoctor",
        element: (
          <AdminRouter>
            <ManegeDoctor />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/bookings/${params.id}`);
        },
      },
    ],
  },
]);
export default router;
