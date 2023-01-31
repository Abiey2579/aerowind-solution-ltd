import React from "react";
import OURSTORY from "./../../Assets/Images/our-story.jpg";

const OurStory = () => {
  return (
    <div className="bg-indigo-50 py-16 px-5">
      <h1 className="font-bold text-5xl text-center mb-5 text-indigo-900">
        Our Story
      </h1>
      <p className="text-center text-gray-800  mb-10  max-w-2xl m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam
        ratione? Obcaecati, quia officia! Laborum iusto.
      </p>
      <div className="flex justify-around items-center px-20">
        <div className="w-[50%]">
          <div className="w-[80%]">
            <h2 className="font-bold text-2xl mb-5 w-max text-indigo-900">
              The journey to relaxation
            </h2>
            <p className="text-gray-800 mb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              iusto voluptate labore? Molestias a nihil cum voluptate laboriosam
              voluptatum non nisi quisquam, nulla aut ad necessitatibus ipsa
              sint iste harum.
            </p>
          </div>
        </div>
        <div className="w-[50%] overflow-hidden flex-shrink">
          <img
            src={OURSTORY}
            alt="OurStory"
            className="w-full object-cover m-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
