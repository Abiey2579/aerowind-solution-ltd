import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
};
const ShopOnline = () => {
  return (
    <div className="py-20 px-20 bg-indigo-600">
      <div className="mb-10">
        <h2 className="text-center text-white font-bold mb-5 tracking-tight sm:text-4xl">
          Shop Online
        </h2>
        <p className="text-center text-white max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla
          doloribus animi deserunt voluptatum quo.
        </p>
      </div>

      <Slider {...settings}>
        <div className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg">
          <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="card-body px-7 pt-7">
            <a href="google.com">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Shop Online
              </h5>
            </a>
            <span className="text-orange-600 p-1 rounded font-bold">$19.7</span>
            <p className="mb-3 text-sm font-normal text-gray-800"></p>
          </div>
          <div className="card-footer px-7 pb-7 pt-3 flex justify-between items-center transition-all hover:px-8 ">
            <span className="font-bold text-gray-700">Proceed</span>
            <ArrowLongRightIcon
              height={30}
              className="text-gray-700 hover:text-indigo-600"
            />
          </div>
        </div>
        <div className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg">
          <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="card-body px-7 pt-7">
            <a href="google.com">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Shop Online
              </h5>
            </a>
            <span className="text-orange-600 p-1 rounded font-bold">$19.7</span>
            <p className="mb-3 text-sm font-normal text-gray-800"></p>
          </div>
          <div className="card-footer px-7 pb-7 pt-3 flex justify-between items-center transition-all hover:px-8 ">
            <span className="font-bold text-gray-700">Proceed</span>
            <ArrowLongRightIcon
              height={30}
              className="text-gray-700 hover:text-indigo-600"
            />
          </div>
        </div>
        <div className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg">
          <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="card-body px-7 pt-7">
            <a href="google.com">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Shop Online
              </h5>
            </a>
            <span className="text-orange-600 p-1 rounded font-bold">$19.7</span>
            <p className="mb-3 text-sm font-normal text-gray-800"></p>
          </div>
          <div className="card-footer px-7 pb-7 pt-3 flex justify-between items-center transition-all hover:px-8 ">
            <span className="font-bold text-gray-700">Proceed</span>
            <ArrowLongRightIcon
              height={30}
              className="text-gray-700 hover:text-indigo-600"
            />
          </div>
        </div>
        <div className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg">
          <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="card-body px-7 pt-7">
            <a href="google.com">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Shop Online
              </h5>
            </a>
            <span className="text-orange-600 p-1 rounded font-bold">$19.7</span>
            <p className="mb-3 text-sm font-normal text-gray-800"></p>
          </div>
          <div className="card-footer px-7 pb-7 pt-3 flex justify-between items-center transition-all hover:px-8 ">
            <span className="font-bold text-gray-700">Proceed</span>
            <ArrowLongRightIcon
              height={30}
              className="text-gray-700 hover:text-indigo-600"
            />
          </div>
        </div>
        <div className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg">
          <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="card-body px-7 pt-7">
            <a href="google.com">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Shop Online
              </h5>
            </a>
            <span className="text-orange-600 p-1 rounded font-bold">$19.7</span>
            <p className="mb-3 text-sm font-normal text-gray-800"></p>
          </div>
          <div className="card-footer px-7 pb-7 pt-3 flex justify-between items-center transition-all hover:px-8 ">
            <span className="font-bold text-gray-700">Proceed</span>
            <ArrowLongRightIcon
              height={30}
              className="text-gray-700 hover:text-indigo-600"
            />
          </div>
        </div>
        <div className="min-w-[256px] max-w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg">
          <div className="card-header h-48 w-full bg-[url('/public/Images/AEROSPACE.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="card-body px-7 pt-7">
            <a href="google.com">
              <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                Shop Online
              </h5>
            </a>
            <span className="text-orange-600 p-1 rounded font-bold">$19.7</span>
            <p className="mb-3 text-sm font-normal text-gray-800"></p>
          </div>
          <div className="card-footer px-7 pb-7 pt-3 flex justify-between items-center transition-all hover:px-8 ">
            <span className="font-bold text-gray-700">Proceed</span>
            <ArrowLongRightIcon
              height={30}
              className="text-gray-700 hover:text-indigo-600"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ShopOnline;
