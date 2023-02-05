import React from "react";

const Filter = () => {
  return (
    <ul className="border lg:w-[280px] rounded-2xl overflow-hidden select-none">
      <li className="p-4 border-b font-bold bg-indigo-50">Category</li>
      <li
        className="p-4 border-b hover:bg-indigo-50 cursor-pointer"
        onClick={() => alert("Category 1")}
      >
        Category 1
      </li>
      <li
        className="p-4 border-b hover:bg-indigo-50  cursor-pointer"
        onClick={() => alert("Category 2")}
      >
        Category 2
      </li>
      <li
        className="p-4 border-b hover:bg-indigo-50  cursor-pointer"
        onClick={() => alert("Category 3")}
      >
        Category 3
      </li>
      <li
        className="p-4  hover:bg-indigo-50  cursor-pointer"
        onClick={() => alert("Category 4")}
      >
        Category 4
      </li>
    </ul>
  );
};

export default Filter;
