import React from "react";

const AppointmentOptionCard = ({ appointmentOption, setTreatment }) => {
  return (
    <div className="shadow-lg  p-7 rounded-lg ">
      <div className="text-center">
        <h3 className="text-center text-2xl text-secondary font-semibold">
          {appointmentOption?.name}
        </h3>
        <h1 className="text-center my-1">{appointmentOption?.slots[1]}</h1>
        <h1 className="text-center pb-1">
          Available {appointmentOption?.slots?.length > 1 ? "spaces" : "space"}{" "}
          {appointmentOption?.slots?.length}
        </h1>

        <label
          htmlFor="appointment-modal"
          onClick={() => setTreatment(appointmentOption)}
          className="btn btn-secondary"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentOptionCard;
