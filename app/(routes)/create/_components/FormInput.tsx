import React, { FC } from "react";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  label: string;
  id: string;
  type?: "text" | "number" | "email";
}

const FormInput: FC<FormInputProps> = ({ label, id, type = "text" }) => {
  return (
    <div className="flex flex-col gap-1.5 w-[320px]">
      <label htmlFor={id} className="text-textColor">
        {label}
      </label>
      <Input type={type} id={id} />
    </div>
  );
};

export default FormInput;
