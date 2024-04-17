"use client";
import React from "react";
import CategoryItem from "./CategoryItem";

const categories = ["appartments", "rooms", "houses"];

const Categories = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="text-[15px] font-medium text-headingColor">Category</h3>
      <ul className="flex flex-col gap-2.5">
        {categories.map((category) => {
          return <CategoryItem key={category} label={category} />;
        })}
      </ul>
    </div>
  );
};

export default Categories;
