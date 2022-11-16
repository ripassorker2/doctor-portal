import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="px-8 py-3 btn btn-primary text-lg font-semibold bg-gradient-to-r from-primary to-secondary  ">
      {children}
    </button>
  );
};

export default PrimaryButton;
