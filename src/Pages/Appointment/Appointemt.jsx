import React, { useState } from "react";
import AppointmentBannar from "./AppointmentBannar";
import AvailableAppointment from "./AvailableAppointment";

const Appointemt = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBannar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointment selectedDate={selectedDate} />
    </div>
  );
};

export default Appointemt;
