import React from "react";

const CardInfo = ({ info }) => {
  const { name, icon, description, bgClass } = info;
  return (
    <div>
      <div
        className={` ${bgClass} w-full h-52 lg:max-w-full justify-center lg:flex  rounded-md p-7`}
      >
        <div className="flex justify-center items-center text-center mx-4">
          <img src={icon} alt="" />
        </div>
        <div className="text-white   p-4 flex flex-col leading-normal justify-center items-center">
          <div className="mb-8">
            <div className=" font-bold text-2xl mb-2">{name}</div>
            <p className=" text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
