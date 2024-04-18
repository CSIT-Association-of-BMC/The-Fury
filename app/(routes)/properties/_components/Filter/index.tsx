"use client";
import React from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import RoomFilter from "./RoomFilter";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Filter = () => {
  const { setValue, getValues, watch } = useForm({
    defaultValues: {
      categories: [],
      minPrice: "",
      maxPrice: "",
      minBathroom: "",
      maxBathroom: "",
    },
  });
  const router = useRouter();
  const categories = watch("categories");

  const onChange = (field: string, value: any) => {
    setValue(field as any, value);
  };

  const handleClick = () => {
    let query;
    if (categories.length > 0) {
      query = `category=${categories.join(",")}`;
    }

    if (!query) return;
    router.push(`/properties/?${query}`);
  };

  return (
    <aside className="w-[250px] py-3 px-6 flex-shrink-0 flex flex-col gap-6 text-[14px] ">
      <Categories onChange={onChange} getValues={getValues} />
      <hr />
      <PriceRange />
      <hr />
      <RoomFilter />

      <div className="flex items-center justify-center mt-8">
        <Button
          type="button"
          className="px-6 h-[42px] rounded-full text-[14px] w-[80%]"
          onClick={handleClick}
        >
          Apply filter
        </Button>
      </div>
    </aside>
  );
};

export default Filter;
