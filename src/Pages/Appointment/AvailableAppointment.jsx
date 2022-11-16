import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentOptionCard from "./AppointmentOptionCard";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setappointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setappointmentOptions(data));
  // }, []);

  return (
    <div>
      <h1 className="text-secondary text-center text-xl font-semibold">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {appointmentOptions?.map((appointmentOption) => (
          <AppointmentOptionCard
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentOptionCard>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
