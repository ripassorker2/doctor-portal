import React from "react";

const ServicveCard = ({ serviceInfo }) => {
  const { name, img, description } = serviceInfo;
  return (
    <div className="shadow-lg  p-7 rounded-lg ">
      <div className="flex justify-center align-middle items-center">
        <img src={img} alt="" />
      </div>
      <div className="text-center">
        <h3 className="text-center text-xl py-3 font-semibold">{name}</h3>
        <h6 className="text-center">{description}</h6>
      </div>
    </div>
  );
};

export default ServicveCard;
