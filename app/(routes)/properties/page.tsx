import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Filter from "./_components/Filter";
import Properties from "./_components/Properties";
import { DUMMY_DATA } from "@/lib/constants";
import MapMarker from "@/components/Map/Marker";
import { getProperties } from "@/services/property";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const PropertiesPage = async () => {
  const properties = await getProperties();

  return (
    <div className="flex items-start justify-between gap-6 pb-10">
      <Filter />
      <Properties properties={properties} />
      <div className="sticky top-0 flex-1 mx-4 flex-shrink-0 max-w-[840px] h-[710px] mt-16 rounded-2xl overflow-hidden bg-gray-100">
        <Map center={[27.686386, 83.432426]}>
          {properties.map((property) => {
            return (
              <div key={property.id}>
                <MapMarker
                  position={property.location.coordinates as [number, number]}
                >
                  <Link
                    href={`/properties/${property._id}`}
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
