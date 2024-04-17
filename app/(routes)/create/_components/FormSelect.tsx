import React, { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSelect = ({
  onChange,
  label,
  children,
}: {
  onChange: (val: string) => void;
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 w-[260px] text-[15px]">
      <label className="text-textColor">{label}</label>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
