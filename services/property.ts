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

    return JSON.parse(
      JSON.stringify(
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
        })
      )
    );
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getProperties = async (query: { [x: string]: any }) => {
  const { category } = query;

  await connectToDB();
  if (category) {
    if (category.includes(",")) {
      const allCategory = category.split(",");
      let data: any = [];
      for (let i = 0; i < allCategory.length; i++) {
        const properties = await Property.find({
          category: allCategory[i],
        });

        data = [...data, ...properties];
      }
      return data;
    } else {
      return await Property.find({
        category,
      });
    }
  }

  return await Property.find({
    $geoWithin: { $centerSphere: [[83.432426, 27.686386], 1 / 6378.16] },
  });
};

export const getPropertyById = async (id: string) => {
  await connectToDB();
  const property = await Property.findById(id);

  return property;
};
