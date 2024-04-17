"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 text-gray-400 px-1"
    >
      <ArrowLeft className="w-5 h-5" /> Go Back
    </Button>
  );
};

export default BackButton;
