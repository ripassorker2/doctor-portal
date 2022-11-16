import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServicveCard from "./ServicveCard";
import ServiceBannar from "./ServiceBannar";

const Service = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been.",
      img: whitening,
    },
  ];

  return (
    <>
      <div className="pt-14">
        <h4 className="text-2xl text-secondary font-bold text-center">
          Our Services
        </h4>
        <h4 className="text-3xl text-neurtal text-center">
          Services We Provide
        </h4>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {servicesData?.map((info) => (
          <ServicveCard key={info.id} serviceInfo={info}></ServicveCard>
        ))}
      </div>
      <ServiceBannar />
    </>
  );
};

export default Service;
