import React from "react";

const ContactUsBody = () => {
  return (
    <div className="2xl:px-36 xl:px-24 lg:px-[75px] md:px-[50px] sm:px-8 py-5 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        Let's Start a Conversation
      </h1>
      <div className="flex justify-around items-center">
        <div className="mb-5 p-5 w-[300px] bg-indigo-600 rounded-3xl text-center">
          <h3 className="text-xl text-white font-semibold mb-2">Address</h3>
          <p className="text-white">
            Bulumkutu Abuja, Abba Kagu Marte Street. Maiduguri Borno State,
            Nigeria
          </p>
        </div>
        <div className="mb-5 p-5 w-[300px] bg-indigo-600 rounded-3xl text-center">
          <h3 className="text-xl text-white font-semibold mb-2">
            Phone Number
          </h3>
          <p className="text-white">+234 9012 3456 789</p>
          <p className="text-white">+234 9012 3456 789</p>
          <p className="text-white">+234 9012 3456 789</p>
        </div>
        <div className="mb-5 p-5 w-[300px] bg-indigo-600 rounded-3xl text-center">
          <h3 className="text-xl text-white font-semibold mb-2">
            Email Address
          </h3>
          <p className="text-white">info@gmail.com</p>
          <p className="text-white">info@gmail.com</p>
          <p className="text-white">info@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
