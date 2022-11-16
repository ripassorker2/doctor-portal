import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../MyComponents/PrimaryButton";
const Bannar = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={chair}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div
          className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-cover"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="md:text-5xl text-3xl font-bold leading-none sm:text-6xl">
            Your New Smile <br /> Starts Here
          </h1>

          <p className="mt-6 mb-8 text-base sm:text-lg sm:mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
