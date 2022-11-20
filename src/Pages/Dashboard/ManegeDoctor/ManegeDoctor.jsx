import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfitmationModal/ConfirmationModal";

const ManegeDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dashboard/doctors", {
        headers: {
          authorization: `berarer ${localStorage.getItem("doctor-user-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/dashboard/doctors/${doctor?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `berarer ${localStorage.getItem("doctor-user-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Succesfully deleted doctor !!");
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center space-x-2 animate-spin">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-secondary text-center text-5xl font-bold my-10">
        Manege Doctor
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Si no </th>
              <th>Photo</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>
                  <img
                    src={doctor?.image}
                    alt=""
                    className="w-12 h-12 rounded-lg"
                  />
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.speciality}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeletingDoctor(doctor)}
                    className="btn btn-secondary rounded-lg btn-sm"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          modalData={deletingDoctor}
          title="Are you sure ? You want to delete this??"
          massege="If you delete this ,It cannot be recover"
          modalAction={handleDeleteDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManegeDoctor;
