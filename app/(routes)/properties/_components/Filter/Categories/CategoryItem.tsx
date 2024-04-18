import React, { FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CategoryItem = ({ label, onChange, getValues }: any) => {
  return (
    <li className="flex items-center gap-2 text-[13.75px]">
      <Checkbox
        id={label}
        onCheckedChange={(state) => {
          if (state) {
            onChange("categories", [...getValues("categories"), label]);
          } else {
            onChange(
              "categories",
              getValues("categories").filter((v: string) => v !== label)
            );
          }
        }}
      />
      <label
        htmlFor={label}
        className="text-textColor cursor-pointer  select-none capitalize"
      >
        {label}
      </label>
    </li>
  );
};

export default CategoryItem;
