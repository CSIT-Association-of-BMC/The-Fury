"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { FileImage } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useEdgeStore } from "@/lib/edgestore";

interface ImageUploadProps {
  onChange: (imgSrc: string) => void;
}

const ImageUpload: FC<ImageUploadProps> = ({ onChange }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { edgestore } = useEdgeStore();

  const uploadImage = async (e: any, file: File) => {
    if (!file.type.startsWith("image") && images.length < 3) return;
    setImages((prev) => [...prev, URL.createObjectURL(file)]);

    try {
      const res = await edgestore.publicFiles.upload({
        file,
      });

      onChange(res.url);
    } catch (error) {}
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    uploadImage(e, file);
  };

  const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    uploadImage(e, e.dataTransfer.files[0]);
  };

  return (
    <div className="flex items-center flex-col gap-4 justify-start ">
      {images.length !== 0 && (
        <div className="flex flex-row justify-start w-full gap-4 py-2">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt="rooms"
                width={100}
                height={64}
              />
            );
          })}
        </div>
      )}
      <label
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        htmlFor="property"
        className={cn(
          " relative cursor-pointer hover:opacity-70 transition border-dashed  w-full p-24  border-2  border-neutral-300 flex-1 flex flex-col rounded-lg justify-center items-center   text-neutral-600 ",

          isDragging && "border-green-500"
        )}
      >
        <>
          <FileImage className="!w-[48px] !h-[48px] mb-4" />
        </>

        <input
          type="file"
          accept="image/*"
          multiple
          id="property"
          className="w-0 h-0 opacity-0"
          onChange={handleChange}
          autoFocus
        />
      </label>
    </div>
  );
};

export default ImageUpload;
