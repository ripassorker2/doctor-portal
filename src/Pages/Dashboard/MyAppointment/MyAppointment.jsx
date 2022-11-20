import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContect } from "../../../context/AuthProvider/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContect);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: myAppoinments } = useQuery({
    queryKey: ["boolings", user.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("doctor-user-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-4xl text-secondary font-bold my-11  text-center">
        My Appointment
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Si no </th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {myAppoinments?.map((myAppoinment, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{myAppoinment?.patientName}</td>
                <td>{myAppoinment?.ServiceName}</td>
                <td>{myAppoinment?.date}</td>
                <td>{myAppoinment?.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
