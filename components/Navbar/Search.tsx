import React from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form className="relative p-1 w-[380px] bg-[#f0f5f6] mr-10 rounded-full">
      <input
        type="text"
        placeholder="City or address"
        className="border-none outline-none bg-transparent w-full h-full pl-6 py-2 rounded-full pr-10 text-base text-gray-500 placeholder:font-normal  placeholder:text-[14px] text-[14px]"
      />
      <button
        type="submit"
        className="absolute top-1/2 right-5 shadow-md-textColor -translate-y-1/2 focus-visible:outline-primary"
      >
        <SearchIcon className="w-[18px] h-[18px] " />
      </button>
    </form>
  );
};

export default Search;
