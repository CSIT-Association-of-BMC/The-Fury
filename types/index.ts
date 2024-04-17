import { z } from "zod";

export const createListingFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  bathroomNum: z.string(),
  price: z.string(),
  address: z.string(),
  category: z.string(),
  latlng: z.array(z.number()),
});
