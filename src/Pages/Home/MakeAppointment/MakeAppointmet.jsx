import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../MyComponents/PrimaryButton";

const MakeAppointmet = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-32 text-white">
      <div
        className="container flex  flex-col justify-center p-6 mx-auto  md:flex-row md:justify-evenly "
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div className="lg:block hidden   p-6 mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={doctor} alt="" className="h-[620px] -mt-44" />
        </div>
        <div className="flex flex-col justify-center   rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-cover">
          <h1 className=" md:text-2xl text-lg font-bold text-secondary py-3">
            Appointment
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold leading-none sm:text-6xl">
            Make an appointment <br /> Today
          </h1>

          <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointmet;
