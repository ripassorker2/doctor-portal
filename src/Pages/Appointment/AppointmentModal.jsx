import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContect } from "../../context/AuthProvider/AuthProvider";

const AppointmentModal = ({
  treatment,
  selectedDate,
  setTreatment,
  refetch,
}) => {
  const { user } = useContext(AuthContect);
  const { name } = treatment;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const time = form.time.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const patientInfo = {
      ServiceName: treatment.name,
      patientName: name,
      email,
      date,
      time,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(patientInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking suuccesfully !!");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="date"
              placeholder="Type here"
              disabled
              defaultValue={format(selectedDate, "PP")}
              className="input input-bordered  my-2  w-full "
            />
            <select
              name="time"
              className="select select-ghost select-bordered my-2 w-full "
            >
              {treatment?.slots?.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered  my-2  w-full "
              required
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              required
              className="input input-bordered  my-2  w-full "
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered  my-2  w-full "
              required
            />
            <button type="submit" className="btn btn-md btn-neutral w-full ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
