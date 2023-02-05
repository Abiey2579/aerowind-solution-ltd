import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="flex justify-start items-start lg:max-w-3xl w-full mx-auto 2xl:px-36 xl:px-24 lg:px-[75px] md:px-[50px] sm:px-8 py-5 px-5">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for ..."
        className="p-4 px-5 bg-indigo-50 w-full mb-3 rounded-bl-2xl rounded-tl-2xl outline-0 placeholder:text-gray-800 font-semibold"
      />
      <div className="flex py-[14px] px-5 cursor-pointer justify-center items-center bg-indigo-50 rounded-br-2xl rounded-tr-2xl">
        <MagnifyingGlassIcon className="w-7" />
      </div>
    </div>
  );
};

export default Search;
