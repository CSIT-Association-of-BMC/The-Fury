"use client";
import React, { useState, useMemo } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRange = () => {
  const [value, setValue] = useState<number | number[]>([10000, 50000]);

  const { min, max } = useMemo(() => {
    if (typeof value === "number") {
      return { min: value, max: value };
    } else {
      return { min: value[0], max: value[1] };
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="text-[15px] font-medium text-headingColor">Price Range</h3>
      <div className="flex items-center gap-1 text-[13.75px] text-textColor">
        <span>Rs {min}</span>
        <span>-</span>
        <span>Rs {max}</span>
      </div>

      <Slider
        range
        value={value}
        min={1000}
        max={100000}
        className="mt-3"
        onChange={(val) => setValue(val)}
        step={1000}
        styles={{
          track: {
            backgroundColor: "#48c378",
          },
        }}
        activeDotStyle={{
          borderColor: "#48c378",
        }}
      />
    </div>
  );
};

export default PriceRange;
