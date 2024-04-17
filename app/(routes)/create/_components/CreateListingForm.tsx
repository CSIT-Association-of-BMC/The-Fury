"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ImageUpload";
import { SelectItem } from "@/components/ui/select";
import MarkYourProperty from "./MarkYourProperty";
import { createListingFormSchema } from "@/types";

const CreateListingForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      images: [],
      bathroomNum: "",
      address: "",
      category: "",
    },
    resolver: zodResolver(createListingFormSchema),
  });

  const images = watch("images");

  const onSubmit = (data: z.infer<typeof createListingFormSchema>) => {
    const { bathroomNum, price, title, description, address, images } = data;
  };

  return (
    <form className="px-3 " onSubmit={handleSubmit(onSubmit)}>
      <BackButton />
      <div className="flex flex-col gap-2 my-4">
        <h3 className="font-semibold text-headingColor text-2xl">
          Add your property
        </h3>
        <p className="text-gray-500 text-[15px]">
          Fill out these details to create a new property
        </p>
      </div>

      <div className="flex flex-col gap-8 my-8 w-[680px] text-textColor">
        <div className="flex items-center gap-12">
          <FormInput register={register} label="Title" id="title" />
          <FormInput register={register} label="Address" id="address" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-textColor" htmlFor="description">
            Description
          </label>
          <Textarea
            {...register("description")}
            id="description"
            className="w-full h-[120px] border outline-none p-3 rounded-lg text-textColor"
          />
        </div>

        <div className="flex items-center gap-12">
          <FormInput
            register={register}
            label="Price"
            type="number"
            id="price"
          />
          <FormSelect
            onChange={(value) => {
              setValue("bathroomNum", value);
            }}
            label="No of bathrooms"
          >
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </FormSelect>
        </div>

        <FormSelect
          onChange={(value) => {
            setValue("category", value);
          }}
          label="Category"
        >
          <SelectItem value="room">room</SelectItem>
          <SelectItem value="appartment">appartment</SelectItem>
          <SelectItem value="house">house</SelectItem>
        </FormSelect>

        <div className="flex flex-col gap-2">
          <label>Photos</label>
          <ImageUpload
            onChange={(value) => {
              setValue("images", [...images, value] as any);
            }}
          />
        </div>

        <MarkYourProperty />

        <div className="flex items-center justify-end mt-4">
          <Button type="submit" variant="primary" className="px-7">
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateListingForm;
