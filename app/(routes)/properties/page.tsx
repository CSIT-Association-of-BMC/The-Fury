import React from "react";
import dynamic from "next/dynamic";
import Filter from "./_components/Filter";
import Properties from "./_components/Properties";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DUMMY_DATA } from "@/lib/constants";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const PropertiesPage = () => {
  return (
    <div className="flex items-start justify-between gap-6 pb-10">
      <Filter />
      <Properties properties={DUMMY_DATA} />
      <div className="flex-1 mx-4 flex-shrink-0 max-w-[840px] h-[710px] mt-16 rounded-2xl overflow-hidden bg-gray-100">
        <Map properties={DUMMY_DATA} />
      </div>
    </div>
  );
};

export default PropertiesPage;
