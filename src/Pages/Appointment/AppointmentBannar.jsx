import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBannar = ({ selectedDate, setSelectedDate }) => {
  //   let footer = <p>Please pick a day.</p>;
  //   if (selectedDate) {
  //     footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  //   }

  return (
    <div>
      <section
        className="dark:bg-gray-800 dark:text-gray-100 bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row md:justify-evenly">
          <div className="flex flex-col justify-center items-center  shadow-xl   rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-cover">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              //   footer={footer}
            />
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={chair}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBannar;
