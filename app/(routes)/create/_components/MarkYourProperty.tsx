"use client";
import React from "react";
import dynamic from "next/dynamic";
import MapMarker from "@/components/Map/Marker";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const MarkYourProperty = () => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <label>Mark your property</label>
      <div className="w-full h-[280px] rounded-lg overflow-hidden">
        {/* <Map center={getCurrentLocationLatLng()}>
          <MapInput setCoordinates={setCoordinates} />
          {coordinates && (
            <MapMarker position={coordinates}>your property</MapMarker>
          )}
        </Map> */}
      </div>
    </div>
  );
};

export default MarkYourProperty;
