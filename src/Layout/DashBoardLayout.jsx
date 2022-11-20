import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContect } from "../context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContect);

  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className=" text-center" to={"/dashboard/myappointment"}>
                My Appointment
              </Link>
            </li>

            {isAdmin && (
              <li>
                <Link className=" text-center " to={"/dashboard/alluser"}>
                  All User
                </Link>
                <Link className="text-center " to={"/dashboard/addDoctor"}>
                  Add Doctor
                </Link>
                <Link className=" text-center " to={"/dashboard/manegedoctor"}>
                  Manege Doctor
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
