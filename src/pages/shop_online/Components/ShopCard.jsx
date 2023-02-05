import React from "react";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const ShopCard = (props) => {
  return (
    <div
      key={props.key}
      className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg"
    >
      <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="card-body p-4">
        <a href="https://google.com">
          <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
            {props.productName}
          </h5>
        </a>
        <span className="text-orange-600 rounded font-bold">{props.price}</span>
      </div>
      <div className="card-footer px-4 py-3 flex justify-between items-center">
        <a
          href={props.gatewayURI}
          className="flex justify-between w-full rounded-2xl transition-all hover:px-4 font-bold text-gray-700 hover:bg-indigo-50"
        >
          <span>Buy</span>
          <ArrowLongRightIcon
            height={30}
            className="text-gray-700text-indigo-600"
          />
        </a>
      </div>
    </div>
  );
};

export default ShopCard;
