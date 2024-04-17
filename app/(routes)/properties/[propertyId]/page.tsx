import React from "react";
import Image from "next/image";
import { Bookmark, Share, Bath, Scaling } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PropertyInformation from "./_components/PropertyInformation";
import BackButton from "@/components/BackButton";
import MapMarker from "@/components/Map/Marker";
import { DUMMY_DATA } from "@/lib/constants";
import { getPropertyById } from "@/services/property";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const PropertyPage = async ({
  params: { propertyId },
}: {
  params: {
    propertyId: string;
  };
}) => {
  const property = await getPropertyById(propertyId);

  return (
    <div className="max-w-[1140px] mx-auto py-6">
      <div className="w-full flex items-center justify-between px-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/properties">Properties</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{property.title}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <BackButton />
      </div>
      <section className="w-full mb-10 px-12 py-4 flex gap-x-0.5 justify-between ">
        <div className=" w-[55%] flex flex-col">
          <div className="h-96 pl-0 w-[96%] relative">
            <Image
              src={property.images[0]}
              alt="home"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mt-10 ">
            <h2 className="text-xl text-headingColor font-semibold">Reviews</h2>
            <hr className="w-[80%]" />

            <p className="mt-2">No reviews yet</p>
          </div>
        </div>

        <div className="w-[45%] rounded-md">
          <div className="flex flex-col rounded-md p-4">
            <div className="flex  items-center justify-between ">
              <h2 className="text-xl text-headingColor font-semibold">
                {property.title}
              </h2>
              <div className=" flex items-center space-x-4 text-textColor">
                <Bookmark className="w-5 h-5" />
                <Share className="w-5 h-5" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{property.address}</p>
            <div className="mt-2 flex justify-start gap-4 text-[14px] text-textColor">
              <div className="flex gap-1 items-center bg-white rounded-md">
                <Bath className="w-4 h-4" />
                <span>{property.bathroomNum}</span>
              </div>
              <div className="flex gap-1 items-center bg-white rounded-md">
                <Scaling className="w-4 h-4" />
                <span>3000 sqft.</span>
              </div>
            </div>
            <div className="flex justify-start gap-6 items-baseline mt-4">
              <p className="text-xl text-primary font-semibold  ">
                Rs {property.price}{" "}
                <span className="text-sm text-gray-500 font-normal">
                  per month
                </span>
              </p>
              <Button className="h-9 rounded-md text-[14px]">Book now</Button>
            </div>
            <div className="mt-6 mb-2 ">
              <h2 className="font-semibold text-lg mb-1 text-headingColor">
                Overview
              </h2>
              <p className="text-sm text-textColor text-justify leading-[1.65]">
                {property.description}
              </p>
            </div>
            <PropertyInformation />
            <div className="my-3">
              <h2 className="text-xl text-headingColor font-semibold mb-2">
                Location
              </h2>
              <div className="w-full rounded-xl  overflow-hidden h-64">
                <Map center={property.location.coordinates}>
                  <MapMarker
                    position={property.location.coordinates as [number, number]}
                  >
                    <Link
                      href={`/properties/${DUMMY_DATA[0].id}`}
                      className="text-primary"
                    >
                      {property.title}, Rs {property.price}
                    </Link>
                  </MapMarker>
                </Map>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyPage;
