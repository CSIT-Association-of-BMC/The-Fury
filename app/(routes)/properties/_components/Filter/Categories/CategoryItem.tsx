import React, { FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  label: string;
}

const CategoryItem: FC<Props> = ({ label }) => {
  return (
    <li className="flex items-center gap-2 text-[13.75px]">
      <Checkbox id={label} />
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
