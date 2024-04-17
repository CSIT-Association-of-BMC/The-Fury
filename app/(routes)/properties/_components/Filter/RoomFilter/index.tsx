import React from "react";
import SelectBathroom from "./SelectBathroom";

const RoomFilter = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="text-[15px] font-medium text-headingColor">Rooms</h3>
      <h4 className="font-normal text-textColor">Bathroom</h4>
      <div className="flex items-center gap-3">
        <SelectBathroom name={"Min"} />
        <span className="text-[#999] text-[18px]">-</span>

        <SelectBathroom name={"Max"} />
      </div>
    </div>
  );
};

export default RoomFilter;
