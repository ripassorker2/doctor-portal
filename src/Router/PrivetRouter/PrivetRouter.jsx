import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContect } from "../../context/AuthProvider/AuthProvider";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContect);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center space-x-2 animate-spin">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivetRouter;
