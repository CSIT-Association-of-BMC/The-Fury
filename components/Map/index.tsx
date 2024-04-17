"use client";
import React, { FC } from "react";
import L from "leaflet";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import marketIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import MapMarker from "./Marker";
import Link from "next/link";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: marketIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
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

const Map: FC<MapProps> = ({ properties }) => {
  return (
    <MapContainer
      center={[27.686386, 83.432426]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {properties.map((property) => {
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
    </MapContainer>
  );
};

export default Map;
