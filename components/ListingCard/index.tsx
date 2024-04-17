import Image from "next/image";
import Link from "next/link";
import { HeartIcon, Bath, Scaling } from "lucide-react";
import { FC } from "react";
import { Badge } from "../ui/badge";

interface ListingCardProps {
  property: {
    _id: string;
    title: string;
    address: string;
    bathroomNum: number;
    price: number;
    images: string[];
    category: string;
    location: {
      coordinates: [number, number];
    };
  };
}

const ListingCard: FC<ListingCardProps> = ({
  property: { _id, title, address, bathroomNum, price, images, category },
}) => {
  return (
    <Link
      href={`/properties/${_id}`}
      className="bg-white shadow-md rounded-xl overflow-hidden"
    >
      <div className="relative h-44">
        <Image
          src={images[0]}
          alt="home"
          fill
          className="rounded-t-lg object-cover"
        />
        <div className="z-10 absolute top-2 left-2 flex items-center gap-2">
          <Badge className="font-medium capitalize">{category}</Badge>
        </div>
      </div>
      <div className="px-4 py-2 pt-3 flex justify-between items-center">
        <h2 className="text-lg">
          <span className="text-lg text-green-600 font-semibold">
            Rs {price}{" "}
          </span>
          <span className="text-sm text-gray-500">per month</span>
        </h2>
        <HeartIcon className="text-red-500 cursor-pointer w-5 h-5" />
      </div>
      <div className="px-4 pb-4 flex flex-col">
        <h3 className="text-gray-600 font-medium text-base">{title}</h3>
        <p className="text-[12px] text-gray-500">{address}</p>
        <div className=" pr-4 pt-4 flex items-center gap-x-5">
          <div className="flex items-center gap-2 text-xs text-textColor">
            <Bath className="w-4 h-4" style={{ color: "#006994" }} />
            <span>{bathroomNum} ba.</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-textColor">
            <Scaling className="w-4 h-4" style={{ color: "#006994" }} />
            <span>70 sqft.</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
