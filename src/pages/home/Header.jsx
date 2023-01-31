import React from "react";
import AEROPLANE from "./../../Assets/Images/AEROPLANE.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-indigo-50 md:py-36 flex-col md:flex-row h-fit w-full 2xl:px-36 xl:px-24 lg:px-[75px] md:px-[50px] sm:px-8 py-5 px-5">
      <div className="max-w-2xl">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <span class="text-gray-600">
              Announcing our online shopping page.
              <a href="#" class="font-semibold text-indigo-600">
                <span class="absolute inset-0" aria-hidden="true"></span> Read
                more <span aria-hidden="true">→</span>
              </a>
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Solution we provide
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
            >
              Get started
              <span className="text-indigo-200 ml-2" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
