import React, { FC } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <Icon className="w-9 h-9 text-green-500" />
      <p className=" text-md font-semibold text-headingColor">{title}</p>
      <p className=" text-sm text-textColor max-w-[200px] text-center">
        {desc}
      </p>
    </div>
  );
};

export default Card;
