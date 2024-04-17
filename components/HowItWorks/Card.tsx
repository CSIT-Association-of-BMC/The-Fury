import React, { FC } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Icon className="w-8 h-8 text-green-500" />
      <p className="pt-3 text-md font-semibold text-headingColor">{title}</p>
      <p className="pt-3 text-sm text-textColor">{desc}</p>
    </div>
  );
};

export default Card;
