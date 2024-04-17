"use client";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import MapMarker from "@/components/Map/Marker";
import { useMapEvents } from "react-leaflet";

const MapInput = ({
  setCoordinates,
}: {
  setCoordinates: (value: [number, number]) => void;
}) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setCoordinates([lat, lng]);
    },
  });
  return null;
};

const MarkYourProperty = ({
  onChange,
  latlng,
}: {
  onChange: (value: any) => void;
  latlng: any;
}) => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords([latitude, longitude] as any);
        }
      );
    }
  }, []);

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [coords]
  );

  return (
    <div className="flex-1 flex flex-col gap-2">
      <label>Mark your property</label>
      <div className="w-full h-[280px] rounded-lg overflow-hidden">
        <Map center={coords}>
          <MapInput setCoordinates={onChange} />
          {latlng && latlng.length !== 0 && (
            <MapMarker position={latlng}>your property</MapMarker>
          )}
        </Map>
      </div>
    </div>
  );
};

export default MarkYourProperty;
