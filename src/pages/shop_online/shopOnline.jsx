import React from "react";
import Navbar from "../../Assets/Components/Navbar";
import Filter from "./Filter";
import Search from "./Search";
import ShopContent from "./ShopContent";
const ShopOnline = () => {
  return (
    <>
      <Navbar />
      <Search />
      <div className="flex justify-between items-start 2xl:px-36 xl:px-24 lg:px-[75px] md:px-[50px] sm:px-8 py-5 px-5">
        <Filter />
        <ShopContent />
      </div>
    </>
  );
};

export default ShopOnline;
