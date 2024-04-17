import React from "react";

const PropertyInformation = () => {
  return (
    <div className="my-4">
      <h1 className="font-semibold text-headingColor text-lg">
        Property information and features
      </h1>
      <ul className="flex flex-col gap-2 text-[14px] text-textColor mt-2">
        <li>- Cats and Dogs are allowed</li>
        <li>- Dishwasher / Dryer </li>
        <li>- Detached Garage </li>
      </ul>
    </div>
  );
};

export default PropertyInformation;
