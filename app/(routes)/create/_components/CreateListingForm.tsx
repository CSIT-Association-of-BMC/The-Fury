"use client";
import React from "react";
import { useForm } from "react-hook-form";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ImageUpload";

const CreateListingForm = () => {
  // const {} = useForm({
  //   defaultValues: {
  //     title: '',
  //     description: "",
  //     price: '',
  //     photos: [],

  //   }
  // })
  return (
    <form className="px-3 ">
      <BackButton />
      <div className="flex flex-col gap-2 my-4">
        <h3 className="font-semibold text-headingColor text-2xl">
          Add your property
        </h3>
        <p className="text-gray-500 text-[14px]">
          Fill out these details to create a new property
        </p>
      </div>

      <div className="flex flex-col gap-8 my-8 w-[680px] text-textColor">
        <div className="flex items-center gap-12">
          <FormInput label="Title" id="title" />
          <FormInput label="Address" id="address" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-textColor">Description</label>
          <Textarea className="w-full h-[120px] border outline-none p-3 rounded-lg text-textColor" />
        </div>

        <div className="flex items-center gap-12">
          <FormInput label="Price" type="number" id="price" />
          <FormSelect />
        </div>

        <div className="flex flex-col gap-2">
          <label>Photos</label>
          <ImageUpload onChange={() => {}} />
        </div>

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
