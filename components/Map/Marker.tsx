"use client";
import React, { ReactNode, useEffect, useRef } from "react";

import { Marker, Popup } from "react-leaflet";

const MapMarker = ({
  children,
  position,
}: {
  children: ReactNode;
  position: [number, number];
}) => {
  const ref = useRef<any>();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.openPopup();
  }, []);

  return (
    <Marker position={position} ref={ref}>
      <Popup>{children}</Popup>
    </Marker>
  );
};

export default MapMarker;
