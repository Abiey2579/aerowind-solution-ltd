import React from "react";
import ShopCard from "./Components/ShopCard";
import DB from "./Database/DB";

const ShopContent = () => {
  return (
    <div className="w-fit grid grid-cols-3 gap-5 items-center">
      {DB.map((item) => (
        <ShopCard
          key={item.gatewayURI}
          productName={item.productName}
          price={item.price}
          gatewayURI={item.gatewayURI}
        />
      ))}
    </div>
  );
};

export default ShopContent;
