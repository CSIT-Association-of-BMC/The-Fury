import React, { FC } from "react";
import { ArrowDownNarrowWide } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ListingCard from "@/components/ListingCard";

interface PropertiesProps {
  properties: {
    id: string;
    title: string;
    address: string;
    bathroomNum: number;
    area: number;
    price: number;
    image: string;
    category: string;
    latlng: number[];
  }[];
}

const Properties: FC<PropertiesProps> = ({ properties }) => {
  return (
    <div className="w-[620px] py-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/properties">Properties</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="text-xl pt-3 font-semibold text-headingColor">
        Available properties for Rent
      </h3>
      <div className="flex align-center justify-between gap-10 mb-4 py-2">
        <p className="text-sm font-light text-gray-500">4 available</p>

        <div className="flex items-center gap-1 justify-end text-[14px] text-textColor">
          <ArrowDownNarrowWide className="w-4 h-4" />
          <p className="text-sm">Sort by: </p>
          <select className="text-green-600 font-semibold text-sm focus:outline-none">
            <option value="price-low-to-high">Low to High</option>
            <option value="price-high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-10 mt-2">
        {properties.map((p) => (
          <ListingCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
