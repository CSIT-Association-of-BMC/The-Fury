import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSelect = () => {
  return (
    <div className="flex flex-col gap-2 w-[260px]">
      <label className="text-textColor">No of bathroom</label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="No of bathroom" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
