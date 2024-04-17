import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Filter from "./_components/Filter";
import Properties from "./_components/Properties";
import { DUMMY_DATA } from "@/lib/constants";
import MapMarker from "@/components/Map/Marker";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const PropertiesPage = () => {
  return (
    <div className="flex items-start justify-between gap-6 pb-10">
      <Filter />
      <Properties properties={DUMMY_DATA} />
      <div className="flex-1 mx-4 flex-shrink-0 max-w-[840px] h-[710px] mt-16 rounded-2xl overflow-hidden bg-gray-100">
        <Map center={[27.686386, 83.432426]}>
          {DUMMY_DATA.map((property) => {
            return (
              <div key={property.id}>
                <MapMarker position={property.latlng as [number, number]}>
                  <Link
                    href={`/properties/${property.id}`}
                    className="text-primary"
                  >
                    {property.title}, Rs {property.price}
                  </Link>
                </MapMarker>
              </div>
            );
          })}
        </Map>
      </div>
    </div>
  );
};

export default PropertiesPage;
