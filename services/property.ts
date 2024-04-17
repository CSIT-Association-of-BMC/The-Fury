"use server";

import Property from "@/lib/models/property.model";
import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";

export const createProperty = async ({
  title,
  description,
  location,
  price,
  bathroomNum,
  images,
  address,
  category,
  email,
}: {
  title: string;
  description: string;
  location: {
    coordinates: number[];
  };
  price: number;
  bathroomNum: number;
  address: string;
  images: string[];
  category: string;
  email: string;
}) => {
  try {
    await connectToDB();
    const currentUser = await User.findOne({
      email,
    });

    console.log(
      title,
      description,
      location,
      price,
      bathroomNum,
      images,
      address,
      category,
      email
    );

    await Property.create({
      title,
      description,
      images,
      address,
      category,
      location,
      price,
      bathroomNum,
      owner: currentUser._id,
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getProperties = async () => {
  await connectToDB();
  const properties = await Property.find();

  return properties;
};

export const getPropertyById = async (id: string) => {
  await connectToDB();
  const property = await Property.findById(id);

  return property;
};
