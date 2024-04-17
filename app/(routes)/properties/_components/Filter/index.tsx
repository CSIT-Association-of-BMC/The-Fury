import React from "react";
// import Categories from "./Categories";
// import PriceRange from "./PriceRange";
// import RoomFilter from "./RoomFilter";
import { Button } from "@/components/ui/button";

const Filter = () => {
  return (
    <aside className="w-[250px] py-3 px-6 flex-shrink-0 flex flex-col gap-6 text-[14px] ">
      {/* <Categories />
      <hr />
      <PriceRange />
      <hr />
      <RoomFilter /> */}

      <div className="flex items-center justify-center mt-8">
        <Button className="px-6 h-[42px] rounded-full text-[14px] w-[80%]">
          Apply filter
        </Button>
      </div>
    </aside>
  );
};

export default Filter;
