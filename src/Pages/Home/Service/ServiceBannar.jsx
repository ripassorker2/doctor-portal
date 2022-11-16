import React from "react";
import treatment from "../../../assets/images/treatment.png";

const ServiceBannar = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex  flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 md:flex-row md:justify-evenly ">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-cover">
          <h1 className="md:text-5xl text-3xl font-bold leading-none sm:text-6xl">
            Exceptional Dental <br />
            Care Your Terms
          </h1>

          <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="px-8 py-3 btn btn-primary text-lg font-semibold bg-gradient-to-r from-primary to-secondary  ">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={treatment}
            alt=""
            className="object-contain h-72 sm:h-80  md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceBannar;
